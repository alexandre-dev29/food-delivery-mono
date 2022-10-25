import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProfilesService } from './profiles.service';
import { CreateOneProfileArgs, Profile, UpdateOneProfileArgs } from '@food-delivery-mono/data-access';
import { FileService, UtilityService } from '@food-delivery-mono/utilities';
import { FileUpload, GraphQLUpload } from '@food-delivery-mono/shared-types';
import { GraphQLError } from 'graphql/error';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, MainAuthGuardGuard } from '@food-delivery-mono/app-security';

@Resolver(() => Profile)
export class ProfilesResolver {
  constructor(
    private readonly profileService: ProfilesService,
    private utilityService: UtilityService,
    private fileService: FileService
  ) {}

  @Mutation(() => Profile)
  createProfile(@Args('createProfileInput') createProfileInput: CreateOneProfileArgs) {
    return this.profileService.create(createProfileInput);
  }

  @Query(() => [Profile], { name: 'profiles' })
  findAll() {
    return this.profileService.findAll();
  }

  @Query(() => Profile, { name: 'profile' })
  findOne(@Args('profileId', { type: () => String }) profileId: string) {
    return this.profileService.findOne(profileId);
  }

  @Mutation(() => Profile)
  updateProfile(@Args('updateProfileInput') updateProfileInput: UpdateOneProfileArgs) {
    return this.profileService.update(updateProfileInput);
  }

  @Mutation(() => Boolean)
  @UseGuards(MainAuthGuardGuard)
  async updatePhotoProfile(@Args('myFile', { type: () => GraphQLUpload }) file: File, @CurrentUser() currentUser) {
    try {
      const { name } = file;
      const bufferFile = Buffer.from(await file.arrayBuffer());
      const uploadResult = await this.fileService.uploadToS3(bufferFile, name);
      await this.profileService.updateProfilePicture(uploadResult, currentUser.userId, name);
      return true;
    } catch (e) {
      console.log(e);
      throw new GraphQLError('There was an error while updating your photo');
    }
  }

  @Mutation(() => Profile)
  removeProfile(@Args('profileId', { type: () => String }) profileId: string) {
    return this.profileService.remove(profileId);
  }
}
