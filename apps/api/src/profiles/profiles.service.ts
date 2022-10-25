import { Injectable } from '@nestjs/common';

import { CreateOneProfileArgs, DataAccessPrismaService, UpdateOneProfileArgs } from '@food-delivery-mono/data-access';
import { ManagedUpload } from 'aws-sdk/clients/s3';
import { use } from 'passport';

@Injectable()
export class ProfilesService {
  constructor(private userPrisma: DataAccessPrismaService) {}

  create(createProfileInput: CreateOneProfileArgs) {
    return this.userPrisma.profile.create(createProfileInput);
  }

  findAll() {
    return this.userPrisma.profile.findMany();
  }

  findOne(profileId: string) {
    return this.userPrisma.profile.findUnique({
      where: { profileId: profileId },
    });
  }

  update(updateProfileInput: UpdateOneProfileArgs) {
    return this.userPrisma.profile.update(updateProfileInput);
  }

  remove(profileId: string) {
    return this.userPrisma.profile.delete({ where: { profileId: profileId } });
  }

  async updateProfilePicture(uploadResult: ManagedUpload.SendData, userId: string, fileName: string) {
    const currentProfile = await this.userPrisma.profile.findFirst({
      where: { userId: userId },
    });
    if (currentProfile != null) {
      await this.userPrisma.fileEntity.update({
        where: { profileId: currentProfile.profileId },
        data: {
          fileName: fileName,
          fileUrl: uploadResult.Location,
          key: uploadResult.Key,
        },
      });
    } else {
      const newProfile = await this.userPrisma.profile.create({ data: { userId: userId, bio: 'nothing' } });

      await this.userPrisma.fileEntity.create({
        data: {
          fileName,
          fileUrl: uploadResult.Location,
          key: uploadResult.Key,
          profileId: newProfile.profileId,
        },
      });
    }
  }
}
