import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
  idUser = 'idUser',
  firstName = 'firstName',
  lastName = 'lastName',
  userName = 'userName',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum RestaurantsScalarFieldEnum {
  idRestaurant = 'idRestaurant',
  restauDescription = 'restauDescription',
  restauName = 'restauName',
  creationDate = 'creationDate',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  fileEntityId = 'fileEntityId',
}

export enum RestauUsersScalarFieldEnum {
  idRestauUser = 'idRestauUser',
  userName = 'userName',
  password = 'password',
  refreshToken = 'refreshToken',
  userFullName = 'userFullName',
  restauId = 'restauId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  role = 'role',
}

export enum ProfileScalarFieldEnum {
  profileId = 'profileId',
  bio = 'bio',
  dateOfBirth = 'dateOfBirth',
  placeOfBirth = 'placeOfBirth',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  fileEntityId = 'fileEntityId',
  userId = 'userId',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum Role {
  SuperAdmin = 'SuperAdmin',
  User = 'User',
  RestaurantUser = 'RestaurantUser',
  RestaurantAdmin = 'RestaurantAdmin',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum ImagesSecondaryScalarFieldEnum {
  id = 'id',
  fileName = 'fileName',
  fileUrl = 'fileUrl',
  key = 'key',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  restaurantsId = 'restaurantsId',
}

export enum FileEntityScalarFieldEnum {
  id = 'id',
  fileName = 'fileName',
  fileUrl = 'fileUrl',
  key = 'key',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum AuthUserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  refreshToken = 'refreshToken',
  phoneNumber = 'phoneNumber',
  password = 'password',
  username = 'username',
  isPhoneConfirmed = 'isPhoneConfirmed',
  role = 'role',
}

export enum AdressesScalarFieldEnum {
  idAdresse = 'idAdresse',
  userId = 'userId',
  restaurantId = 'restaurantId',
  adressName = 'adressName',
  longitude = 'longitude',
  latitude = 'latitude',
  elevation = 'elevation',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(AdressesScalarFieldEnum, { name: 'AdressesScalarFieldEnum', description: undefined });
registerEnumType(AuthUserScalarFieldEnum, { name: 'AuthUserScalarFieldEnum', description: undefined });
registerEnumType(FileEntityScalarFieldEnum, { name: 'FileEntityScalarFieldEnum', description: undefined });
registerEnumType(ImagesSecondaryScalarFieldEnum, { name: 'ImagesSecondaryScalarFieldEnum', description: undefined });
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(Role, { name: 'Role', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined });
registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined });
registerEnumType(RestauUsersScalarFieldEnum, { name: 'RestauUsersScalarFieldEnum', description: undefined });
registerEnumType(RestaurantsScalarFieldEnum, { name: 'RestaurantsScalarFieldEnum', description: undefined });
registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined });

@InputType()
export class AdressesAggregateArgs {
  @Field(() => AdressesWhereInput, { nullable: true })
  @Type(() => AdressesWhereInput)
  where?: InstanceType<typeof AdressesWhereInput>;
  @Field(() => [AdressesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdressesOrderByWithRelationInput>;
  @Field(() => AdressesWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AdressesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AdressesCountAggregateInput>;
  @Field(() => AdressesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AdressesMinAggregateInput>;
  @Field(() => AdressesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AdressesMaxAggregateInput>;
}

@InputType()
export class AdressesCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idAdresse?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  restaurantId?: true;
  @Field(() => Boolean, { nullable: true })
  adressName?: true;
  @Field(() => Boolean, { nullable: true })
  longitude?: true;
  @Field(() => Boolean, { nullable: true })
  latitude?: true;
  @Field(() => Boolean, { nullable: true })
  elevation?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class AdressesCountAggregate {
  @Field(() => Int, { nullable: false })
  idAdresse!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  restaurantId!: number;
  @Field(() => Int, { nullable: false })
  adressName!: number;
  @Field(() => Int, { nullable: false })
  longitude!: number;
  @Field(() => Int, { nullable: false })
  latitude!: number;
  @Field(() => Int, { nullable: false })
  elevation!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class AdressesCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  adressName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  longitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  latitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  elevation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AdressesCreateManyRestaurantInputEnvelope {
  @Field(() => [AdressesCreateManyRestaurantInput], { nullable: false })
  @Type(() => AdressesCreateManyRestaurantInput)
  data!: Array<AdressesCreateManyRestaurantInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AdressesCreateManyRestaurantInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesCreateManyUserInputEnvelope {
  @Field(() => [AdressesCreateManyUserInput], { nullable: false })
  @Type(() => AdressesCreateManyUserInput)
  data!: Array<AdressesCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AdressesCreateManyUserInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  restaurantId?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesCreateManyInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  restaurantId?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesCreateNestedManyWithoutRestaurantInput {
  @Field(() => [AdressesCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateWithoutRestaurantInput)
  create?: Array<AdressesCreateWithoutRestaurantInput>;
  @Field(() => [AdressesCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutRestaurantInput>;
  @Field(() => AdressesCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyRestaurantInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
}

@InputType()
export class AdressesCreateNestedManyWithoutUserInput {
  @Field(() => [AdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateWithoutUserInput)
  create?: Array<AdressesCreateWithoutUserInput>;
  @Field(() => [AdressesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutUserInput>;
  @Field(() => AdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyUserInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
}

@InputType()
export class AdressesCreateOrConnectWithoutRestaurantInput {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => AdressesCreateWithoutRestaurantInput, { nullable: false })
  @Type(() => AdressesCreateWithoutRestaurantInput)
  create!: InstanceType<typeof AdressesCreateWithoutRestaurantInput>;
}

@InputType()
export class AdressesCreateOrConnectWithoutUserInput {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => AdressesCreateWithoutUserInput, { nullable: false })
  @Type(() => AdressesCreateWithoutUserInput)
  create!: InstanceType<typeof AdressesCreateWithoutUserInput>;
}

@InputType()
export class AdressesCreateWithoutRestaurantInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UsersCreateNestedOneWithoutAdressesInput, { nullable: true })
  user?: InstanceType<typeof UsersCreateNestedOneWithoutAdressesInput>;
}

@InputType()
export class AdressesCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestaurantsCreateNestedOneWithoutAdressesInput, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsCreateNestedOneWithoutAdressesInput>;
}

@InputType()
export class AdressesCreateInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UsersCreateNestedOneWithoutAdressesInput, { nullable: true })
  user?: InstanceType<typeof UsersCreateNestedOneWithoutAdressesInput>;
  @Field(() => RestaurantsCreateNestedOneWithoutAdressesInput, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsCreateNestedOneWithoutAdressesInput>;
}

@InputType()
export class AdressesGroupByArgs {
  @Field(() => AdressesWhereInput, { nullable: true })
  @Type(() => AdressesWhereInput)
  where?: InstanceType<typeof AdressesWhereInput>;
  @Field(() => [AdressesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AdressesOrderByWithAggregationInput>;
  @Field(() => [AdressesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AdressesScalarFieldEnum>;
  @Field(() => AdressesScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof AdressesScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AdressesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AdressesCountAggregateInput>;
  @Field(() => AdressesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AdressesMinAggregateInput>;
  @Field(() => AdressesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AdressesMaxAggregateInput>;
}

@ObjectType()
export class AdressesGroupBy {
  @Field(() => String, { nullable: false })
  idAdresse!: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  restaurantId?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => AdressesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AdressesCountAggregate>;
  @Field(() => AdressesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AdressesMinAggregate>;
  @Field(() => AdressesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AdressesMaxAggregate>;
}

@InputType()
export class AdressesListRelationFilter {
  @Field(() => AdressesWhereInput, { nullable: true })
  every?: InstanceType<typeof AdressesWhereInput>;
  @Field(() => AdressesWhereInput, { nullable: true })
  some?: InstanceType<typeof AdressesWhereInput>;
  @Field(() => AdressesWhereInput, { nullable: true })
  none?: InstanceType<typeof AdressesWhereInput>;
}

@InputType()
export class AdressesMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idAdresse?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  restaurantId?: true;
  @Field(() => Boolean, { nullable: true })
  adressName?: true;
  @Field(() => Boolean, { nullable: true })
  longitude?: true;
  @Field(() => Boolean, { nullable: true })
  latitude?: true;
  @Field(() => Boolean, { nullable: true })
  elevation?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class AdressesMaxAggregate {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  restaurantId?: string;
  @Field(() => String, { nullable: true })
  adressName?: string;
  @Field(() => String, { nullable: true })
  longitude?: string;
  @Field(() => String, { nullable: true })
  latitude?: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  adressName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  longitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  latitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  elevation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AdressesMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idAdresse?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  restaurantId?: true;
  @Field(() => Boolean, { nullable: true })
  adressName?: true;
  @Field(() => Boolean, { nullable: true })
  longitude?: true;
  @Field(() => Boolean, { nullable: true })
  latitude?: true;
  @Field(() => Boolean, { nullable: true })
  elevation?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class AdressesMinAggregate {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  restaurantId?: string;
  @Field(() => String, { nullable: true })
  adressName?: string;
  @Field(() => String, { nullable: true })
  longitude?: string;
  @Field(() => String, { nullable: true })
  latitude?: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  adressName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  longitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  latitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  elevation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AdressesOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class AdressesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  adressName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  longitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  latitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  elevation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => AdressesCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AdressesCountOrderByAggregateInput>;
  @Field(() => AdressesMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AdressesMaxOrderByAggregateInput>;
  @Field(() => AdressesMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AdressesMinOrderByAggregateInput>;
}

@InputType()
export class AdressesOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  adressName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  longitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  latitude?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  elevation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UsersOrderByWithRelationInput>;
  @Field(() => RestaurantsOrderByWithRelationInput, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsOrderByWithRelationInput>;
}

@InputType()
export class AdressesScalarWhereWithAggregatesInput {
  @Field(() => [AdressesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AdressesScalarWhereWithAggregatesInput>;
  @Field(() => [AdressesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AdressesScalarWhereWithAggregatesInput>;
  @Field(() => [AdressesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AdressesScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  idAdresse?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  restaurantId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  adressName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  longitude?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  latitude?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  elevation?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class AdressesScalarWhereInput {
  @Field(() => [AdressesScalarWhereInput], { nullable: true })
  AND?: Array<AdressesScalarWhereInput>;
  @Field(() => [AdressesScalarWhereInput], { nullable: true })
  OR?: Array<AdressesScalarWhereInput>;
  @Field(() => [AdressesScalarWhereInput], { nullable: true })
  NOT?: Array<AdressesScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idAdresse?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  userId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  restaurantId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  adressName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  longitude?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  latitude?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  elevation?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class AdressesUncheckedCreateNestedManyWithoutRestaurantInput {
  @Field(() => [AdressesCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateWithoutRestaurantInput)
  create?: Array<AdressesCreateWithoutRestaurantInput>;
  @Field(() => [AdressesCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutRestaurantInput>;
  @Field(() => AdressesCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyRestaurantInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
}

@InputType()
export class AdressesUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [AdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateWithoutUserInput)
  create?: Array<AdressesCreateWithoutUserInput>;
  @Field(() => [AdressesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutUserInput>;
  @Field(() => AdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyUserInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
}

@InputType()
export class AdressesUncheckedCreateWithoutRestaurantInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  restaurantId?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  restaurantId?: string;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AdressesUncheckedUpdateManyWithoutAdressesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  restaurantId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AdressesUncheckedUpdateManyWithoutRestaurantNestedInput {
  @Field(() => [AdressesCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateWithoutRestaurantInput)
  create?: Array<AdressesCreateWithoutRestaurantInput>;
  @Field(() => [AdressesCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutRestaurantInput>;
  @Field(() => [AdressesUpsertWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesUpsertWithWhereUniqueWithoutRestaurantInput)
  upsert?: Array<AdressesUpsertWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => AdressesCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyRestaurantInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  set?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  disconnect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  delete?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesUpdateWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesUpdateWithWhereUniqueWithoutRestaurantInput)
  update?: Array<AdressesUpdateWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => [AdressesUpdateManyWithWhereWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesUpdateManyWithWhereWithoutRestaurantInput)
  updateMany?: Array<AdressesUpdateManyWithWhereWithoutRestaurantInput>;
  @Field(() => [AdressesScalarWhereInput], { nullable: true })
  @Type(() => AdressesScalarWhereInput)
  deleteMany?: Array<AdressesScalarWhereInput>;
}

@InputType()
export class AdressesUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [AdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateWithoutUserInput)
  create?: Array<AdressesCreateWithoutUserInput>;
  @Field(() => [AdressesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutUserInput>;
  @Field(() => [AdressesUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => AdressesUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AdressesUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyUserInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  set?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  disconnect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  delete?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => AdressesUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AdressesUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AdressesUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => AdressesUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AdressesUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AdressesScalarWhereInput], { nullable: true })
  @Type(() => AdressesScalarWhereInput)
  deleteMany?: Array<AdressesScalarWhereInput>;
}

@InputType()
export class AdressesUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  restaurantId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AdressesUncheckedUpdateWithoutRestaurantInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AdressesUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  restaurantId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AdressesUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  restaurantId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AdressesUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AdressesUpdateManyWithWhereWithoutRestaurantInput {
  @Field(() => AdressesScalarWhereInput, { nullable: false })
  @Type(() => AdressesScalarWhereInput)
  where!: InstanceType<typeof AdressesScalarWhereInput>;
  @Field(() => AdressesUpdateManyMutationInput, { nullable: false })
  @Type(() => AdressesUpdateManyMutationInput)
  data!: InstanceType<typeof AdressesUpdateManyMutationInput>;
}

@InputType()
export class AdressesUpdateManyWithWhereWithoutUserInput {
  @Field(() => AdressesScalarWhereInput, { nullable: false })
  @Type(() => AdressesScalarWhereInput)
  where!: InstanceType<typeof AdressesScalarWhereInput>;
  @Field(() => AdressesUpdateManyMutationInput, { nullable: false })
  @Type(() => AdressesUpdateManyMutationInput)
  data!: InstanceType<typeof AdressesUpdateManyMutationInput>;
}

@InputType()
export class AdressesUpdateManyWithoutRestaurantNestedInput {
  @Field(() => [AdressesCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateWithoutRestaurantInput)
  create?: Array<AdressesCreateWithoutRestaurantInput>;
  @Field(() => [AdressesCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutRestaurantInput>;
  @Field(() => [AdressesUpsertWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesUpsertWithWhereUniqueWithoutRestaurantInput)
  upsert?: Array<AdressesUpsertWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => AdressesCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyRestaurantInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  set?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  disconnect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  delete?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesUpdateWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesUpdateWithWhereUniqueWithoutRestaurantInput)
  update?: Array<AdressesUpdateWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => [AdressesUpdateManyWithWhereWithoutRestaurantInput], { nullable: true })
  @Type(() => AdressesUpdateManyWithWhereWithoutRestaurantInput)
  updateMany?: Array<AdressesUpdateManyWithWhereWithoutRestaurantInput>;
  @Field(() => [AdressesScalarWhereInput], { nullable: true })
  @Type(() => AdressesScalarWhereInput)
  deleteMany?: Array<AdressesScalarWhereInput>;
}

@InputType()
export class AdressesUpdateManyWithoutUserNestedInput {
  @Field(() => [AdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateWithoutUserInput)
  create?: Array<AdressesCreateWithoutUserInput>;
  @Field(() => [AdressesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AdressesCreateOrConnectWithoutUserInput>;
  @Field(() => [AdressesUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => AdressesUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AdressesUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AdressesCreateManyUserInputEnvelope>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  set?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  disconnect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  delete?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesWhereUniqueInput], { nullable: true })
  @Type(() => AdressesWhereUniqueInput)
  connect?: Array<AdressesWhereUniqueInput>;
  @Field(() => [AdressesUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => AdressesUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AdressesUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AdressesUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => AdressesUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AdressesUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AdressesScalarWhereInput], { nullable: true })
  @Type(() => AdressesScalarWhereInput)
  deleteMany?: Array<AdressesScalarWhereInput>;
}

@InputType()
export class AdressesUpdateWithWhereUniqueWithoutRestaurantInput {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => AdressesUpdateWithoutRestaurantInput, { nullable: false })
  @Type(() => AdressesUpdateWithoutRestaurantInput)
  data!: InstanceType<typeof AdressesUpdateWithoutRestaurantInput>;
}

@InputType()
export class AdressesUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => AdressesUpdateWithoutUserInput, { nullable: false })
  @Type(() => AdressesUpdateWithoutUserInput)
  data!: InstanceType<typeof AdressesUpdateWithoutUserInput>;
}

@InputType()
export class AdressesUpdateWithoutRestaurantInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UsersUpdateOneWithoutAdressesNestedInput, { nullable: true })
  user?: InstanceType<typeof UsersUpdateOneWithoutAdressesNestedInput>;
}

@InputType()
export class AdressesUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestaurantsUpdateOneWithoutAdressesNestedInput, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsUpdateOneWithoutAdressesNestedInput>;
}

@InputType()
export class AdressesUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adressName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  longitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  latitude?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  elevation?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UsersUpdateOneWithoutAdressesNestedInput, { nullable: true })
  user?: InstanceType<typeof UsersUpdateOneWithoutAdressesNestedInput>;
  @Field(() => RestaurantsUpdateOneWithoutAdressesNestedInput, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsUpdateOneWithoutAdressesNestedInput>;
}

@InputType()
export class AdressesUpsertWithWhereUniqueWithoutRestaurantInput {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => AdressesUpdateWithoutRestaurantInput, { nullable: false })
  @Type(() => AdressesUpdateWithoutRestaurantInput)
  update!: InstanceType<typeof AdressesUpdateWithoutRestaurantInput>;
  @Field(() => AdressesCreateWithoutRestaurantInput, { nullable: false })
  @Type(() => AdressesCreateWithoutRestaurantInput)
  create!: InstanceType<typeof AdressesCreateWithoutRestaurantInput>;
}

@InputType()
export class AdressesUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => AdressesUpdateWithoutUserInput, { nullable: false })
  @Type(() => AdressesUpdateWithoutUserInput)
  update!: InstanceType<typeof AdressesUpdateWithoutUserInput>;
  @Field(() => AdressesCreateWithoutUserInput, { nullable: false })
  @Type(() => AdressesCreateWithoutUserInput)
  create!: InstanceType<typeof AdressesCreateWithoutUserInput>;
}

@InputType()
export class AdressesWhereUniqueInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
}

@InputType()
export class AdressesWhereInput {
  @Field(() => [AdressesWhereInput], { nullable: true })
  AND?: Array<AdressesWhereInput>;
  @Field(() => [AdressesWhereInput], { nullable: true })
  OR?: Array<AdressesWhereInput>;
  @Field(() => [AdressesWhereInput], { nullable: true })
  NOT?: Array<AdressesWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idAdresse?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  userId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  restaurantId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  adressName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  longitude?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  latitude?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  elevation?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UsersRelationFilter, { nullable: true })
  user?: InstanceType<typeof UsersRelationFilter>;
  @Field(() => RestaurantsRelationFilter, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsRelationFilter>;
}

@ObjectType()
export class Adresses {
  @Field(() => ID, { nullable: false })
  idAdresse!: string;
  @Field(() => String, { nullable: true })
  userId!: string | null;
  @Field(() => String, { nullable: true })
  restaurantId!: string | null;
  @Field(() => String, { nullable: false })
  adressName!: string;
  @Field(() => String, { nullable: false })
  longitude!: string;
  @Field(() => String, { nullable: false })
  latitude!: string;
  @Field(() => String, { nullable: true })
  elevation!: string | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Users, { nullable: true })
  user?: InstanceType<typeof Users> | null;
  @Field(() => Restaurants, { nullable: true })
  restaurant?: InstanceType<typeof Restaurants> | null;
}

@ObjectType()
export class AggregateAdresses {
  @Field(() => AdressesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AdressesCountAggregate>;
  @Field(() => AdressesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AdressesMinAggregate>;
  @Field(() => AdressesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AdressesMaxAggregate>;
}

@InputType()
export class CreateManyAdressesArgs {
  @Field(() => [AdressesCreateManyInput], { nullable: false })
  @Type(() => AdressesCreateManyInput)
  data!: Array<AdressesCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneAdressesArgs {
  @Field(() => AdressesCreateInput, { nullable: false })
  @Type(() => AdressesCreateInput)
  data!: InstanceType<typeof AdressesCreateInput>;
}

@InputType()
export class DeleteManyAdressesArgs {
  @Field(() => AdressesWhereInput, { nullable: true })
  @Type(() => AdressesWhereInput)
  where?: InstanceType<typeof AdressesWhereInput>;
}

@InputType()
export class DeleteOneAdressesArgs {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
}

@InputType()
export class FindFirstAdressesArgs {
  @Field(() => AdressesWhereInput, { nullable: true })
  @Type(() => AdressesWhereInput)
  where?: InstanceType<typeof AdressesWhereInput>;
  @Field(() => [AdressesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdressesOrderByWithRelationInput>;
  @Field(() => AdressesWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AdressesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AdressesScalarFieldEnum>;
}

@InputType()
export class FindManyAdressesArgs {
  @Field(() => AdressesWhereInput, { nullable: true })
  @Type(() => AdressesWhereInput)
  where?: InstanceType<typeof AdressesWhereInput>;
  @Field(() => [AdressesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdressesOrderByWithRelationInput>;
  @Field(() => AdressesWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AdressesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AdressesScalarFieldEnum>;
}

@InputType()
export class FindUniqueAdressesArgs {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
}

@InputType()
export class UpdateManyAdressesArgs {
  @Field(() => AdressesUpdateManyMutationInput, { nullable: false })
  @Type(() => AdressesUpdateManyMutationInput)
  data!: InstanceType<typeof AdressesUpdateManyMutationInput>;
  @Field(() => AdressesWhereInput, { nullable: true })
  @Type(() => AdressesWhereInput)
  where?: InstanceType<typeof AdressesWhereInput>;
}

@InputType()
export class UpdateOneAdressesArgs {
  @Field(() => AdressesUpdateInput, { nullable: false })
  @Type(() => AdressesUpdateInput)
  data!: InstanceType<typeof AdressesUpdateInput>;
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
}

@InputType()
export class UpsertOneAdressesArgs {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => AdressesCreateInput, { nullable: false })
  @Type(() => AdressesCreateInput)
  create!: InstanceType<typeof AdressesCreateInput>;
  @Field(() => AdressesUpdateInput, { nullable: false })
  @Type(() => AdressesUpdateInput)
  update!: InstanceType<typeof AdressesUpdateInput>;
}

@ObjectType()
export class AggregateAuthUser {
  @Field(() => AuthUserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AuthUserCountAggregate>;
  @Field(() => AuthUserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AuthUserMinAggregate>;
  @Field(() => AuthUserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AuthUserMaxAggregate>;
}

@InputType()
export class AuthUserAggregateArgs {
  @Field(() => AuthUserWhereInput, { nullable: true })
  @Type(() => AuthUserWhereInput)
  where?: InstanceType<typeof AuthUserWhereInput>;
  @Field(() => [AuthUserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthUserOrderByWithRelationInput>;
  @Field(() => AuthUserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AuthUserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuthUserCountAggregateInput>;
  @Field(() => AuthUserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuthUserMinAggregateInput>;
  @Field(() => AuthUserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuthUserMaxAggregateInput>;
}

@InputType()
export class AuthUserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class AuthUserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @HideField()
  refreshToken!: number;
  @Field(() => Int, { nullable: false })
  phoneNumber!: number;
  @HideField()
  password!: number;
  @Field(() => Int, { nullable: false })
  username!: number;
  @Field(() => Int, { nullable: false })
  isPhoneConfirmed!: number;
  @Field(() => Int, { nullable: false })
  role!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class AuthUserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AuthUserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AuthUserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AuthUserGroupByArgs {
  @Field(() => AuthUserWhereInput, { nullable: true })
  @Type(() => AuthUserWhereInput)
  where?: InstanceType<typeof AuthUserWhereInput>;
  @Field(() => [AuthUserOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AuthUserOrderByWithAggregationInput>;
  @Field(() => [AuthUserScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AuthUserScalarFieldEnum>;
  @Field(() => AuthUserScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof AuthUserScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AuthUserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuthUserCountAggregateInput>;
  @Field(() => AuthUserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuthUserMinAggregateInput>;
  @Field(() => AuthUserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuthUserMaxAggregateInput>;
}

@ObjectType()
export class AuthUserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @HideField()
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: false })
  isPhoneConfirmed!: boolean;
  @Field(() => Role, { nullable: false })
  role!: keyof typeof Role;
  @Field(() => AuthUserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AuthUserCountAggregate>;
  @Field(() => AuthUserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AuthUserMinAggregate>;
  @Field(() => AuthUserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AuthUserMaxAggregate>;
}

@InputType()
export class AuthUserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
}

@ObjectType()
export class AuthUserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @HideField()
  password?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AuthUserMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AuthUserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
}

@ObjectType()
export class AuthUserMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @HideField()
  password?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AuthUserMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AuthUserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => AuthUserCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuthUserCountOrderByAggregateInput>;
  @Field(() => AuthUserMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuthUserMaxOrderByAggregateInput>;
  @Field(() => AuthUserMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuthUserMinOrderByAggregateInput>;
}

@InputType()
export class AuthUserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AuthUserScalarWhereWithAggregatesInput {
  @Field(() => [AuthUserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AuthUserScalarWhereWithAggregatesInput>;
  @Field(() => [AuthUserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AuthUserScalarWhereWithAggregatesInput>;
  @Field(() => [AuthUserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AuthUserScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  username?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
}

@InputType()
export class AuthUserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AuthUserUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class AuthUserWhereInput {
  @Field(() => [AuthUserWhereInput], { nullable: true })
  AND?: Array<AuthUserWhereInput>;
  @Field(() => [AuthUserWhereInput], { nullable: true })
  OR?: Array<AuthUserWhereInput>;
  @Field(() => [AuthUserWhereInput], { nullable: true })
  NOT?: Array<AuthUserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  username?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFilter>;
  @Field(() => EnumRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleFilter>;
}

@ObjectType()
export class AuthUser {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => String, { nullable: false })
  userId!: string;
  @HideField()
  refreshToken!: string | null;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @HideField()
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isPhoneConfirmed!: boolean;
  @Field(() => Role, { nullable: false, defaultValue: 'User' })
  role!: keyof typeof Role;
}

@InputType()
export class CreateManyAuthUserArgs {
  @Field(() => [AuthUserCreateManyInput], { nullable: false })
  @Type(() => AuthUserCreateManyInput)
  data!: Array<AuthUserCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneAuthUserArgs {
  @Field(() => AuthUserCreateInput, { nullable: false })
  @Type(() => AuthUserCreateInput)
  data!: InstanceType<typeof AuthUserCreateInput>;
}

@InputType()
export class DeleteManyAuthUserArgs {
  @Field(() => AuthUserWhereInput, { nullable: true })
  @Type(() => AuthUserWhereInput)
  where?: InstanceType<typeof AuthUserWhereInput>;
}

@InputType()
export class DeleteOneAuthUserArgs {
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
}

@InputType()
export class FindFirstAuthUserArgs {
  @Field(() => AuthUserWhereInput, { nullable: true })
  @Type(() => AuthUserWhereInput)
  where?: InstanceType<typeof AuthUserWhereInput>;
  @Field(() => [AuthUserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthUserOrderByWithRelationInput>;
  @Field(() => AuthUserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuthUserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuthUserScalarFieldEnum>;
}

@InputType()
export class FindManyAuthUserArgs {
  @Field(() => AuthUserWhereInput, { nullable: true })
  @Type(() => AuthUserWhereInput)
  where?: InstanceType<typeof AuthUserWhereInput>;
  @Field(() => [AuthUserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthUserOrderByWithRelationInput>;
  @Field(() => AuthUserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuthUserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuthUserScalarFieldEnum>;
}

@InputType()
export class FindUniqueAuthUserArgs {
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
}

@InputType()
export class UpdateManyAuthUserArgs {
  @Field(() => AuthUserUpdateManyMutationInput, { nullable: false })
  @Type(() => AuthUserUpdateManyMutationInput)
  data!: InstanceType<typeof AuthUserUpdateManyMutationInput>;
  @Field(() => AuthUserWhereInput, { nullable: true })
  @Type(() => AuthUserWhereInput)
  where?: InstanceType<typeof AuthUserWhereInput>;
}

@InputType()
export class UpdateOneAuthUserArgs {
  @Field(() => AuthUserUpdateInput, { nullable: false })
  @Type(() => AuthUserUpdateInput)
  data!: InstanceType<typeof AuthUserUpdateInput>;
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
}

@InputType()
export class UpsertOneAuthUserArgs {
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => AuthUserCreateInput, { nullable: false })
  @Type(() => AuthUserCreateInput)
  create!: InstanceType<typeof AuthUserCreateInput>;
  @Field(() => AuthUserUpdateInput, { nullable: false })
  @Type(() => AuthUserUpdateInput)
  update!: InstanceType<typeof AuthUserUpdateInput>;
}

@ObjectType()
export class AggregateFileEntity {
  @Field(() => FileEntityCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FileEntityCountAggregate>;
  @Field(() => FileEntityMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FileEntityMinAggregate>;
  @Field(() => FileEntityMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FileEntityMaxAggregate>;
}

@InputType()
export class CreateManyFileEntityArgs {
  @Field(() => [FileEntityCreateManyInput], { nullable: false })
  @Type(() => FileEntityCreateManyInput)
  data!: Array<FileEntityCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneFileEntityArgs {
  @Field(() => FileEntityCreateInput, { nullable: false })
  @Type(() => FileEntityCreateInput)
  data!: InstanceType<typeof FileEntityCreateInput>;
}

@InputType()
export class DeleteManyFileEntityArgs {
  @Field(() => FileEntityWhereInput, { nullable: true })
  @Type(() => FileEntityWhereInput)
  where?: InstanceType<typeof FileEntityWhereInput>;
}

@InputType()
export class DeleteOneFileEntityArgs {
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class FileEntityAggregateArgs {
  @Field(() => FileEntityWhereInput, { nullable: true })
  @Type(() => FileEntityWhereInput)
  where?: InstanceType<typeof FileEntityWhereInput>;
  @Field(() => [FileEntityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileEntityOrderByWithRelationInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FileEntityCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileEntityCountAggregateInput>;
  @Field(() => FileEntityMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileEntityMinAggregateInput>;
  @Field(() => FileEntityMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileEntityMaxAggregateInput>;
}

@InputType()
export class FileEntityCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  fileName?: true;
  @Field(() => Boolean, { nullable: true })
  fileUrl?: true;
  @Field(() => Boolean, { nullable: true })
  key?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class FileEntityCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  fileName!: number;
  @Field(() => Int, { nullable: false })
  fileUrl!: number;
  @Field(() => Int, { nullable: false })
  key!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class FileEntityCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class FileEntityCount {
  @Field(() => Int, { nullable: false })
  Restaurants?: number;
  @Field(() => Int, { nullable: false })
  Profiles?: number;
}

@InputType()
export class FileEntityCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class FileEntityCreateNestedOneWithoutProfilesInput {
  @Field(() => FileEntityCreateWithoutProfilesInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutProfilesInput)
  create?: InstanceType<typeof FileEntityCreateWithoutProfilesInput>;
  @Field(() => FileEntityCreateOrConnectWithoutProfilesInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutProfilesInput)
  connectOrCreate?: InstanceType<typeof FileEntityCreateOrConnectWithoutProfilesInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class FileEntityCreateNestedOneWithoutRestaurantsInput {
  @Field(() => FileEntityCreateWithoutRestaurantsInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutRestaurantsInput)
  create?: InstanceType<typeof FileEntityCreateWithoutRestaurantsInput>;
  @Field(() => FileEntityCreateOrConnectWithoutRestaurantsInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutRestaurantsInput)
  connectOrCreate?: InstanceType<typeof FileEntityCreateOrConnectWithoutRestaurantsInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class FileEntityCreateOrConnectWithoutProfilesInput {
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityCreateWithoutProfilesInput, { nullable: false })
  @Type(() => FileEntityCreateWithoutProfilesInput)
  create!: InstanceType<typeof FileEntityCreateWithoutProfilesInput>;
}

@InputType()
export class FileEntityCreateOrConnectWithoutRestaurantsInput {
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityCreateWithoutRestaurantsInput, { nullable: false })
  @Type(() => FileEntityCreateWithoutRestaurantsInput)
  create!: InstanceType<typeof FileEntityCreateWithoutRestaurantsInput>;
}

@InputType()
export class FileEntityCreateWithoutProfilesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestaurantsCreateNestedManyWithoutRestauMainImageInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsCreateNestedManyWithoutRestauMainImageInput>;
}

@InputType()
export class FileEntityCreateWithoutRestaurantsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ProfileCreateNestedManyWithoutProfilePictureInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileCreateNestedManyWithoutProfilePictureInput>;
}

@InputType()
export class FileEntityCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestaurantsCreateNestedManyWithoutRestauMainImageInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsCreateNestedManyWithoutRestauMainImageInput>;
  @Field(() => ProfileCreateNestedManyWithoutProfilePictureInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileCreateNestedManyWithoutProfilePictureInput>;
}

@InputType()
export class FileEntityGroupByArgs {
  @Field(() => FileEntityWhereInput, { nullable: true })
  @Type(() => FileEntityWhereInput)
  where?: InstanceType<typeof FileEntityWhereInput>;
  @Field(() => [FileEntityOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FileEntityOrderByWithAggregationInput>;
  @Field(() => [FileEntityScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FileEntityScalarFieldEnum>;
  @Field(() => FileEntityScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof FileEntityScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FileEntityCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileEntityCountAggregateInput>;
  @Field(() => FileEntityMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileEntityMinAggregateInput>;
  @Field(() => FileEntityMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileEntityMaxAggregateInput>;
}

@ObjectType()
export class FileEntityGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => FileEntityCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FileEntityCountAggregate>;
  @Field(() => FileEntityMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FileEntityMinAggregate>;
  @Field(() => FileEntityMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FileEntityMaxAggregate>;
}

@InputType()
export class FileEntityMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  fileName?: true;
  @Field(() => Boolean, { nullable: true })
  fileUrl?: true;
  @Field(() => Boolean, { nullable: true })
  key?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class FileEntityMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  fileName?: string;
  @Field(() => String, { nullable: true })
  fileUrl?: string;
  @Field(() => String, { nullable: true })
  key?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class FileEntityMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileEntityMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  fileName?: true;
  @Field(() => Boolean, { nullable: true })
  fileUrl?: true;
  @Field(() => Boolean, { nullable: true })
  key?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class FileEntityMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  fileName?: string;
  @Field(() => String, { nullable: true })
  fileUrl?: string;
  @Field(() => String, { nullable: true })
  key?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class FileEntityMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileEntityOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => FileEntityCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileEntityCountOrderByAggregateInput>;
  @Field(() => FileEntityMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileEntityMaxOrderByAggregateInput>;
  @Field(() => FileEntityMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileEntityMinOrderByAggregateInput>;
}

@InputType()
export class FileEntityOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => RestaurantsOrderByRelationAggregateInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsOrderByRelationAggregateInput>;
  @Field(() => ProfileOrderByRelationAggregateInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileOrderByRelationAggregateInput>;
}

@InputType()
export class FileEntityRelationFilter {
  @Field(() => FileEntityWhereInput, { nullable: true })
  is?: InstanceType<typeof FileEntityWhereInput>;
  @Field(() => FileEntityWhereInput, { nullable: true })
  isNot?: InstanceType<typeof FileEntityWhereInput>;
}

@InputType()
export class FileEntityScalarWhereWithAggregatesInput {
  @Field(() => [FileEntityScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<FileEntityScalarWhereWithAggregatesInput>;
  @Field(() => [FileEntityScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<FileEntityScalarWhereWithAggregatesInput>;
  @Field(() => [FileEntityScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<FileEntityScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileUrl?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  key?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class FileEntityUncheckedCreateWithoutProfilesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestaurantsUncheckedCreateNestedManyWithoutRestauMainImageInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsUncheckedCreateNestedManyWithoutRestauMainImageInput>;
}

@InputType()
export class FileEntityUncheckedCreateWithoutRestaurantsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ProfileUncheckedCreateNestedManyWithoutProfilePictureInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileUncheckedCreateNestedManyWithoutProfilePictureInput>;
}

@InputType()
export class FileEntityUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestaurantsUncheckedCreateNestedManyWithoutRestauMainImageInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsUncheckedCreateNestedManyWithoutRestauMainImageInput>;
  @Field(() => ProfileUncheckedCreateNestedManyWithoutProfilePictureInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileUncheckedCreateNestedManyWithoutProfilePictureInput>;
}

@InputType()
export class FileEntityUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileEntityUncheckedUpdateWithoutProfilesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestaurantsUncheckedUpdateManyWithoutRestauMainImageNestedInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsUncheckedUpdateManyWithoutRestauMainImageNestedInput>;
}

@InputType()
export class FileEntityUncheckedUpdateWithoutRestaurantsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ProfileUncheckedUpdateManyWithoutProfilePictureNestedInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileUncheckedUpdateManyWithoutProfilePictureNestedInput>;
}

@InputType()
export class FileEntityUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestaurantsUncheckedUpdateManyWithoutRestauMainImageNestedInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsUncheckedUpdateManyWithoutRestauMainImageNestedInput>;
  @Field(() => ProfileUncheckedUpdateManyWithoutProfilePictureNestedInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileUncheckedUpdateManyWithoutProfilePictureNestedInput>;
}

@InputType()
export class FileEntityUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput {
  @Field(() => FileEntityCreateWithoutRestaurantsInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutRestaurantsInput)
  create?: InstanceType<typeof FileEntityCreateWithoutRestaurantsInput>;
  @Field(() => FileEntityCreateOrConnectWithoutRestaurantsInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutRestaurantsInput)
  connectOrCreate?: InstanceType<typeof FileEntityCreateOrConnectWithoutRestaurantsInput>;
  @Field(() => FileEntityUpsertWithoutRestaurantsInput, { nullable: true })
  @Type(() => FileEntityUpsertWithoutRestaurantsInput)
  upsert?: InstanceType<typeof FileEntityUpsertWithoutRestaurantsInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityUpdateWithoutRestaurantsInput, { nullable: true })
  @Type(() => FileEntityUpdateWithoutRestaurantsInput)
  update?: InstanceType<typeof FileEntityUpdateWithoutRestaurantsInput>;
}

@InputType()
export class FileEntityUpdateOneWithoutProfilesNestedInput {
  @Field(() => FileEntityCreateWithoutProfilesInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutProfilesInput)
  create?: InstanceType<typeof FileEntityCreateWithoutProfilesInput>;
  @Field(() => FileEntityCreateOrConnectWithoutProfilesInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutProfilesInput)
  connectOrCreate?: InstanceType<typeof FileEntityCreateOrConnectWithoutProfilesInput>;
  @Field(() => FileEntityUpsertWithoutProfilesInput, { nullable: true })
  @Type(() => FileEntityUpsertWithoutProfilesInput)
  upsert?: InstanceType<typeof FileEntityUpsertWithoutProfilesInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityUpdateWithoutProfilesInput, { nullable: true })
  @Type(() => FileEntityUpdateWithoutProfilesInput)
  update?: InstanceType<typeof FileEntityUpdateWithoutProfilesInput>;
}

@InputType()
export class FileEntityUpdateWithoutProfilesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestaurantsUpdateManyWithoutRestauMainImageNestedInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsUpdateManyWithoutRestauMainImageNestedInput>;
}

@InputType()
export class FileEntityUpdateWithoutRestaurantsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ProfileUpdateManyWithoutProfilePictureNestedInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileUpdateManyWithoutProfilePictureNestedInput>;
}

@InputType()
export class FileEntityUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestaurantsUpdateManyWithoutRestauMainImageNestedInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsUpdateManyWithoutRestauMainImageNestedInput>;
  @Field(() => ProfileUpdateManyWithoutProfilePictureNestedInput, { nullable: true })
  Profiles?: InstanceType<typeof ProfileUpdateManyWithoutProfilePictureNestedInput>;
}

@InputType()
export class FileEntityUpsertWithoutProfilesInput {
  @Field(() => FileEntityUpdateWithoutProfilesInput, { nullable: false })
  @Type(() => FileEntityUpdateWithoutProfilesInput)
  update!: InstanceType<typeof FileEntityUpdateWithoutProfilesInput>;
  @Field(() => FileEntityCreateWithoutProfilesInput, { nullable: false })
  @Type(() => FileEntityCreateWithoutProfilesInput)
  create!: InstanceType<typeof FileEntityCreateWithoutProfilesInput>;
}

@InputType()
export class FileEntityUpsertWithoutRestaurantsInput {
  @Field(() => FileEntityUpdateWithoutRestaurantsInput, { nullable: false })
  @Type(() => FileEntityUpdateWithoutRestaurantsInput)
  update!: InstanceType<typeof FileEntityUpdateWithoutRestaurantsInput>;
  @Field(() => FileEntityCreateWithoutRestaurantsInput, { nullable: false })
  @Type(() => FileEntityCreateWithoutRestaurantsInput)
  create!: InstanceType<typeof FileEntityCreateWithoutRestaurantsInput>;
}

@InputType()
export class FileEntityWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class FileEntityWhereInput {
  @Field(() => [FileEntityWhereInput], { nullable: true })
  AND?: Array<FileEntityWhereInput>;
  @Field(() => [FileEntityWhereInput], { nullable: true })
  OR?: Array<FileEntityWhereInput>;
  @Field(() => [FileEntityWhereInput], { nullable: true })
  NOT?: Array<FileEntityWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileUrl?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  key?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => RestaurantsListRelationFilter, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsListRelationFilter>;
  @Field(() => ProfileListRelationFilter, { nullable: true })
  Profiles?: InstanceType<typeof ProfileListRelationFilter>;
}

@ObjectType()
export class FileEntity {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => [Restaurants], { nullable: true })
  Restaurants?: Array<Restaurants>;
  @Field(() => [Profile], { nullable: true })
  Profiles?: Array<Profile>;
  @Field(() => FileEntityCount, { nullable: false })
  _count?: InstanceType<typeof FileEntityCount>;
}

@InputType()
export class FindFirstFileEntityArgs {
  @Field(() => FileEntityWhereInput, { nullable: true })
  @Type(() => FileEntityWhereInput)
  where?: InstanceType<typeof FileEntityWhereInput>;
  @Field(() => [FileEntityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileEntityOrderByWithRelationInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileEntityScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileEntityScalarFieldEnum>;
}

@InputType()
export class FindManyFileEntityArgs {
  @Field(() => FileEntityWhereInput, { nullable: true })
  @Type(() => FileEntityWhereInput)
  where?: InstanceType<typeof FileEntityWhereInput>;
  @Field(() => [FileEntityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileEntityOrderByWithRelationInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileEntityScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileEntityScalarFieldEnum>;
}

@InputType()
export class FindUniqueFileEntityArgs {
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class UpdateManyFileEntityArgs {
  @Field(() => FileEntityUpdateManyMutationInput, { nullable: false })
  @Type(() => FileEntityUpdateManyMutationInput)
  data!: InstanceType<typeof FileEntityUpdateManyMutationInput>;
  @Field(() => FileEntityWhereInput, { nullable: true })
  @Type(() => FileEntityWhereInput)
  where?: InstanceType<typeof FileEntityWhereInput>;
}

@InputType()
export class UpdateOneFileEntityArgs {
  @Field(() => FileEntityUpdateInput, { nullable: false })
  @Type(() => FileEntityUpdateInput)
  data!: InstanceType<typeof FileEntityUpdateInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class UpsertOneFileEntityArgs {
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityCreateInput, { nullable: false })
  @Type(() => FileEntityCreateInput)
  create!: InstanceType<typeof FileEntityCreateInput>;
  @Field(() => FileEntityUpdateInput, { nullable: false })
  @Type(() => FileEntityUpdateInput)
  update!: InstanceType<typeof FileEntityUpdateInput>;
}

@ObjectType()
export class AggregateImagesSecondary {
  @Field(() => ImagesSecondaryCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ImagesSecondaryCountAggregate>;
  @Field(() => ImagesSecondaryMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ImagesSecondaryMinAggregate>;
  @Field(() => ImagesSecondaryMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ImagesSecondaryMaxAggregate>;
}

@InputType()
export class CreateManyImagesSecondaryArgs {
  @Field(() => [ImagesSecondaryCreateManyInput], { nullable: false })
  @Type(() => ImagesSecondaryCreateManyInput)
  data!: Array<ImagesSecondaryCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneImagesSecondaryArgs {
  @Field(() => ImagesSecondaryCreateInput, { nullable: false })
  @Type(() => ImagesSecondaryCreateInput)
  data!: InstanceType<typeof ImagesSecondaryCreateInput>;
}

@InputType()
export class DeleteManyImagesSecondaryArgs {
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  @Type(() => ImagesSecondaryWhereInput)
  where?: InstanceType<typeof ImagesSecondaryWhereInput>;
}

@InputType()
export class DeleteOneImagesSecondaryArgs {
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
}

@InputType()
export class FindFirstImagesSecondaryArgs {
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  @Type(() => ImagesSecondaryWhereInput)
  where?: InstanceType<typeof ImagesSecondaryWhereInput>;
  @Field(() => [ImagesSecondaryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ImagesSecondaryOrderByWithRelationInput>;
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ImagesSecondaryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ImagesSecondaryScalarFieldEnum>;
}

@InputType()
export class FindManyImagesSecondaryArgs {
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  @Type(() => ImagesSecondaryWhereInput)
  where?: InstanceType<typeof ImagesSecondaryWhereInput>;
  @Field(() => [ImagesSecondaryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ImagesSecondaryOrderByWithRelationInput>;
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ImagesSecondaryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ImagesSecondaryScalarFieldEnum>;
}

@InputType()
export class FindUniqueImagesSecondaryArgs {
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
}

@InputType()
export class ImagesSecondaryAggregateArgs {
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  @Type(() => ImagesSecondaryWhereInput)
  where?: InstanceType<typeof ImagesSecondaryWhereInput>;
  @Field(() => [ImagesSecondaryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ImagesSecondaryOrderByWithRelationInput>;
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ImagesSecondaryCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ImagesSecondaryCountAggregateInput>;
  @Field(() => ImagesSecondaryMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ImagesSecondaryMinAggregateInput>;
  @Field(() => ImagesSecondaryMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ImagesSecondaryMaxAggregateInput>;
}

@InputType()
export class ImagesSecondaryCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  fileName?: true;
  @Field(() => Boolean, { nullable: true })
  fileUrl?: true;
  @Field(() => Boolean, { nullable: true })
  key?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  restaurantsId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ImagesSecondaryCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  fileName!: number;
  @Field(() => Int, { nullable: false })
  fileUrl!: number;
  @Field(() => Int, { nullable: false })
  key!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  restaurantsId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ImagesSecondaryCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantsId?: keyof typeof SortOrder;
}

@InputType()
export class ImagesSecondaryCreateManyRestaurantsInputEnvelope {
  @Field(() => [ImagesSecondaryCreateManyRestaurantsInput], { nullable: false })
  @Type(() => ImagesSecondaryCreateManyRestaurantsInput)
  data!: Array<ImagesSecondaryCreateManyRestaurantsInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ImagesSecondaryCreateManyRestaurantsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ImagesSecondaryCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  restaurantsId?: string;
}

@InputType()
export class ImagesSecondaryCreateNestedManyWithoutRestaurantsInput {
  @Field(() => [ImagesSecondaryCreateWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateWithoutRestaurantsInput)
  create?: Array<ImagesSecondaryCreateWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryCreateOrConnectWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateOrConnectWithoutRestaurantsInput)
  connectOrCreate?: Array<ImagesSecondaryCreateOrConnectWithoutRestaurantsInput>;
  @Field(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope, { nullable: true })
  @Type(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope)
  createMany?: InstanceType<typeof ImagesSecondaryCreateManyRestaurantsInputEnvelope>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  connect?: Array<ImagesSecondaryWhereUniqueInput>;
}

@InputType()
export class ImagesSecondaryCreateOrConnectWithoutRestaurantsInput {
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => ImagesSecondaryCreateWithoutRestaurantsInput, { nullable: false })
  @Type(() => ImagesSecondaryCreateWithoutRestaurantsInput)
  create!: InstanceType<typeof ImagesSecondaryCreateWithoutRestaurantsInput>;
}

@InputType()
export class ImagesSecondaryCreateWithoutRestaurantsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ImagesSecondaryCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestaurantsCreateNestedOneWithoutOtherImagesInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsCreateNestedOneWithoutOtherImagesInput>;
}

@InputType()
export class ImagesSecondaryGroupByArgs {
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  @Type(() => ImagesSecondaryWhereInput)
  where?: InstanceType<typeof ImagesSecondaryWhereInput>;
  @Field(() => [ImagesSecondaryOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ImagesSecondaryOrderByWithAggregationInput>;
  @Field(() => [ImagesSecondaryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ImagesSecondaryScalarFieldEnum>;
  @Field(() => ImagesSecondaryScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ImagesSecondaryScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ImagesSecondaryCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ImagesSecondaryCountAggregateInput>;
  @Field(() => ImagesSecondaryMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ImagesSecondaryMinAggregateInput>;
  @Field(() => ImagesSecondaryMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ImagesSecondaryMaxAggregateInput>;
}

@ObjectType()
export class ImagesSecondaryGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: true })
  restaurantsId?: string;
  @Field(() => ImagesSecondaryCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ImagesSecondaryCountAggregate>;
  @Field(() => ImagesSecondaryMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ImagesSecondaryMinAggregate>;
  @Field(() => ImagesSecondaryMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ImagesSecondaryMaxAggregate>;
}

@InputType()
export class ImagesSecondaryListRelationFilter {
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  every?: InstanceType<typeof ImagesSecondaryWhereInput>;
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  some?: InstanceType<typeof ImagesSecondaryWhereInput>;
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  none?: InstanceType<typeof ImagesSecondaryWhereInput>;
}

@InputType()
export class ImagesSecondaryMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  fileName?: true;
  @Field(() => Boolean, { nullable: true })
  fileUrl?: true;
  @Field(() => Boolean, { nullable: true })
  key?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  restaurantsId?: true;
}

@ObjectType()
export class ImagesSecondaryMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  fileName?: string;
  @Field(() => String, { nullable: true })
  fileUrl?: string;
  @Field(() => String, { nullable: true })
  key?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  restaurantsId?: string;
}

@InputType()
export class ImagesSecondaryMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantsId?: keyof typeof SortOrder;
}

@InputType()
export class ImagesSecondaryMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  fileName?: true;
  @Field(() => Boolean, { nullable: true })
  fileUrl?: true;
  @Field(() => Boolean, { nullable: true })
  key?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  restaurantsId?: true;
}

@ObjectType()
export class ImagesSecondaryMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  fileName?: string;
  @Field(() => String, { nullable: true })
  fileUrl?: string;
  @Field(() => String, { nullable: true })
  key?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  restaurantsId?: string;
}

@InputType()
export class ImagesSecondaryMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantsId?: keyof typeof SortOrder;
}

@InputType()
export class ImagesSecondaryOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class ImagesSecondaryOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restaurantsId?: keyof typeof SortOrder;
  @Field(() => ImagesSecondaryCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ImagesSecondaryCountOrderByAggregateInput>;
  @Field(() => ImagesSecondaryMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ImagesSecondaryMaxOrderByAggregateInput>;
  @Field(() => ImagesSecondaryMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ImagesSecondaryMinOrderByAggregateInput>;
}

@InputType()
export class ImagesSecondaryOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  key?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => RestaurantsOrderByWithRelationInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  restaurantsId?: keyof typeof SortOrder;
}

@InputType()
export class ImagesSecondaryScalarWhereWithAggregatesInput {
  @Field(() => [ImagesSecondaryScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ImagesSecondaryScalarWhereWithAggregatesInput>;
  @Field(() => [ImagesSecondaryScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ImagesSecondaryScalarWhereWithAggregatesInput>;
  @Field(() => [ImagesSecondaryScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ImagesSecondaryScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileUrl?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  key?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  restaurantsId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class ImagesSecondaryScalarWhereInput {
  @Field(() => [ImagesSecondaryScalarWhereInput], { nullable: true })
  AND?: Array<ImagesSecondaryScalarWhereInput>;
  @Field(() => [ImagesSecondaryScalarWhereInput], { nullable: true })
  OR?: Array<ImagesSecondaryScalarWhereInput>;
  @Field(() => [ImagesSecondaryScalarWhereInput], { nullable: true })
  NOT?: Array<ImagesSecondaryScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileUrl?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  key?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  restaurantsId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput {
  @Field(() => [ImagesSecondaryCreateWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateWithoutRestaurantsInput)
  create?: Array<ImagesSecondaryCreateWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryCreateOrConnectWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateOrConnectWithoutRestaurantsInput)
  connectOrCreate?: Array<ImagesSecondaryCreateOrConnectWithoutRestaurantsInput>;
  @Field(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope, { nullable: true })
  @Type(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope)
  createMany?: InstanceType<typeof ImagesSecondaryCreateManyRestaurantsInputEnvelope>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  connect?: Array<ImagesSecondaryWhereUniqueInput>;
}

@InputType()
export class ImagesSecondaryUncheckedCreateWithoutRestaurantsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ImagesSecondaryUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  restaurantsId?: string;
}

@InputType()
export class ImagesSecondaryUncheckedUpdateManyWithoutOtherImagesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput {
  @Field(() => [ImagesSecondaryCreateWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateWithoutRestaurantsInput)
  create?: Array<ImagesSecondaryCreateWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryCreateOrConnectWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateOrConnectWithoutRestaurantsInput)
  connectOrCreate?: Array<ImagesSecondaryCreateOrConnectWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput)
  upsert?: Array<ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput>;
  @Field(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope, { nullable: true })
  @Type(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope)
  createMany?: InstanceType<typeof ImagesSecondaryCreateManyRestaurantsInputEnvelope>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  set?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  disconnect?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  delete?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  connect?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput)
  update?: Array<ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput)
  updateMany?: Array<ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryScalarWhereInput], { nullable: true })
  @Type(() => ImagesSecondaryScalarWhereInput)
  deleteMany?: Array<ImagesSecondaryScalarWhereInput>;
}

@InputType()
export class ImagesSecondaryUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  restaurantsId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesSecondaryUncheckedUpdateWithoutRestaurantsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesSecondaryUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  restaurantsId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesSecondaryUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput {
  @Field(() => ImagesSecondaryScalarWhereInput, { nullable: false })
  @Type(() => ImagesSecondaryScalarWhereInput)
  where!: InstanceType<typeof ImagesSecondaryScalarWhereInput>;
  @Field(() => ImagesSecondaryUpdateManyMutationInput, { nullable: false })
  @Type(() => ImagesSecondaryUpdateManyMutationInput)
  data!: InstanceType<typeof ImagesSecondaryUpdateManyMutationInput>;
}

@InputType()
export class ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput {
  @Field(() => [ImagesSecondaryCreateWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateWithoutRestaurantsInput)
  create?: Array<ImagesSecondaryCreateWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryCreateOrConnectWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryCreateOrConnectWithoutRestaurantsInput)
  connectOrCreate?: Array<ImagesSecondaryCreateOrConnectWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput)
  upsert?: Array<ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput>;
  @Field(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope, { nullable: true })
  @Type(() => ImagesSecondaryCreateManyRestaurantsInputEnvelope)
  createMany?: InstanceType<typeof ImagesSecondaryCreateManyRestaurantsInputEnvelope>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  set?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  disconnect?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  delete?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryWhereUniqueInput], { nullable: true })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  connect?: Array<ImagesSecondaryWhereUniqueInput>;
  @Field(() => [ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput)
  update?: Array<ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput], { nullable: true })
  @Type(() => ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput)
  updateMany?: Array<ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput>;
  @Field(() => [ImagesSecondaryScalarWhereInput], { nullable: true })
  @Type(() => ImagesSecondaryScalarWhereInput)
  deleteMany?: Array<ImagesSecondaryScalarWhereInput>;
}

@InputType()
export class ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput {
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => ImagesSecondaryUpdateWithoutRestaurantsInput, { nullable: false })
  @Type(() => ImagesSecondaryUpdateWithoutRestaurantsInput)
  data!: InstanceType<typeof ImagesSecondaryUpdateWithoutRestaurantsInput>;
}

@InputType()
export class ImagesSecondaryUpdateWithoutRestaurantsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesSecondaryUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestaurantsUpdateOneWithoutOtherImagesNestedInput, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsUpdateOneWithoutOtherImagesNestedInput>;
}

@InputType()
export class ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput {
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => ImagesSecondaryUpdateWithoutRestaurantsInput, { nullable: false })
  @Type(() => ImagesSecondaryUpdateWithoutRestaurantsInput)
  update!: InstanceType<typeof ImagesSecondaryUpdateWithoutRestaurantsInput>;
  @Field(() => ImagesSecondaryCreateWithoutRestaurantsInput, { nullable: false })
  @Type(() => ImagesSecondaryCreateWithoutRestaurantsInput)
  create!: InstanceType<typeof ImagesSecondaryCreateWithoutRestaurantsInput>;
}

@InputType()
export class ImagesSecondaryWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class ImagesSecondaryWhereInput {
  @Field(() => [ImagesSecondaryWhereInput], { nullable: true })
  AND?: Array<ImagesSecondaryWhereInput>;
  @Field(() => [ImagesSecondaryWhereInput], { nullable: true })
  OR?: Array<ImagesSecondaryWhereInput>;
  @Field(() => [ImagesSecondaryWhereInput], { nullable: true })
  NOT?: Array<ImagesSecondaryWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileUrl?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  key?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => RestaurantsRelationFilter, { nullable: true })
  Restaurants?: InstanceType<typeof RestaurantsRelationFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  restaurantsId?: InstanceType<typeof StringNullableFilter>;
}

@ObjectType()
export class ImagesSecondary {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Restaurants, { nullable: true })
  Restaurants?: InstanceType<typeof Restaurants> | null;
  @Field(() => String, { nullable: true })
  restaurantsId!: string | null;
}

@InputType()
export class UpdateManyImagesSecondaryArgs {
  @Field(() => ImagesSecondaryUpdateManyMutationInput, { nullable: false })
  @Type(() => ImagesSecondaryUpdateManyMutationInput)
  data!: InstanceType<typeof ImagesSecondaryUpdateManyMutationInput>;
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  @Type(() => ImagesSecondaryWhereInput)
  where?: InstanceType<typeof ImagesSecondaryWhereInput>;
}

@InputType()
export class UpdateOneImagesSecondaryArgs {
  @Field(() => ImagesSecondaryUpdateInput, { nullable: false })
  @Type(() => ImagesSecondaryUpdateInput)
  data!: InstanceType<typeof ImagesSecondaryUpdateInput>;
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
}

@InputType()
export class UpsertOneImagesSecondaryArgs {
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => ImagesSecondaryCreateInput, { nullable: false })
  @Type(() => ImagesSecondaryCreateInput)
  create!: InstanceType<typeof ImagesSecondaryCreateInput>;
  @Field(() => ImagesSecondaryUpdateInput, { nullable: false })
  @Type(() => ImagesSecondaryUpdateInput)
  update!: InstanceType<typeof ImagesSecondaryUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
  @Field(() => Boolean, { nullable: true })
  set?: boolean;
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
  @Field(() => Role, { nullable: true })
  set?: keyof typeof Role;
}

@InputType()
export class EnumRoleFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRoleFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class FindFirstAdressesOrThrowArgs {
  @Field(() => AdressesWhereInput, { nullable: true })
  @Type(() => AdressesWhereInput)
  where?: InstanceType<typeof AdressesWhereInput>;
  @Field(() => [AdressesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdressesOrderByWithRelationInput>;
  @Field(() => AdressesWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdressesWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AdressesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AdressesScalarFieldEnum>;
}

@InputType()
export class FindFirstAuthUserOrThrowArgs {
  @Field(() => AuthUserWhereInput, { nullable: true })
  @Type(() => AuthUserWhereInput)
  where?: InstanceType<typeof AuthUserWhereInput>;
  @Field(() => [AuthUserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthUserOrderByWithRelationInput>;
  @Field(() => AuthUserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuthUserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuthUserScalarFieldEnum>;
}

@InputType()
export class FindFirstFileEntityOrThrowArgs {
  @Field(() => FileEntityWhereInput, { nullable: true })
  @Type(() => FileEntityWhereInput)
  where?: InstanceType<typeof FileEntityWhereInput>;
  @Field(() => [FileEntityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileEntityOrderByWithRelationInput>;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileEntityScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileEntityScalarFieldEnum>;
}

@InputType()
export class FindFirstImagesSecondaryOrThrowArgs {
  @Field(() => ImagesSecondaryWhereInput, { nullable: true })
  @Type(() => ImagesSecondaryWhereInput)
  where?: InstanceType<typeof ImagesSecondaryWhereInput>;
  @Field(() => [ImagesSecondaryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ImagesSecondaryOrderByWithRelationInput>;
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ImagesSecondaryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ImagesSecondaryScalarFieldEnum>;
}

@InputType()
export class FindFirstProfileOrThrowArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithRelationInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ProfileScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@InputType()
export class FindFirstRestauUsersOrThrowArgs {
  @Field(() => RestauUsersWhereInput, { nullable: true })
  @Type(() => RestauUsersWhereInput)
  where?: InstanceType<typeof RestauUsersWhereInput>;
  @Field(() => [RestauUsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestauUsersOrderByWithRelationInput>;
  @Field(() => RestauUsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RestauUsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RestauUsersScalarFieldEnum>;
}

@InputType()
export class FindFirstRestaurantsOrThrowArgs {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  @Type(() => RestaurantsWhereInput)
  where?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => [RestaurantsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestaurantsOrderByWithRelationInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RestaurantsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RestaurantsScalarFieldEnum>;
}

@InputType()
export class FindFirstUsersOrThrowArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@InputType()
export class FindUniqueAdressesOrThrowArgs {
  @Field(() => AdressesWhereUniqueInput, { nullable: false })
  @Type(() => AdressesWhereUniqueInput)
  where!: InstanceType<typeof AdressesWhereUniqueInput>;
}

@InputType()
export class FindUniqueAuthUserOrThrowArgs {
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
}

@InputType()
export class FindUniqueFileEntityOrThrowArgs {
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class FindUniqueImagesSecondaryOrThrowArgs {
  @Field(() => ImagesSecondaryWhereUniqueInput, { nullable: false })
  @Type(() => ImagesSecondaryWhereUniqueInput)
  where!: InstanceType<typeof ImagesSecondaryWhereUniqueInput>;
}

@InputType()
export class FindUniqueProfileOrThrowArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class FindUniqueRestauUsersOrThrowArgs {
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
}

@InputType()
export class FindUniqueRestaurantsOrThrowArgs {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
}

@InputType()
export class FindUniqueUsersOrThrowArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class NestedBoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumRoleFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRoleFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateProfile {
  @Field(() => ProfileCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ProfileCountAggregate>;
  @Field(() => ProfileMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ProfileMinAggregate>;
  @Field(() => ProfileMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ProfileMaxAggregate>;
}

@InputType()
export class CreateManyProfileArgs {
  @Field(() => [ProfileCreateManyInput], { nullable: false })
  @Type(() => ProfileCreateManyInput)
  data!: Array<ProfileCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneProfileArgs {
  @Field(() => ProfileCreateInput, { nullable: false })
  @Type(() => ProfileCreateInput)
  data!: InstanceType<typeof ProfileCreateInput>;
}

@InputType()
export class DeleteManyProfileArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: InstanceType<typeof ProfileWhereInput>;
}

@InputType()
export class DeleteOneProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class FindFirstProfileArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithRelationInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ProfileScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@InputType()
export class FindManyProfileArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithRelationInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ProfileScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@InputType()
export class FindUniqueProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileAggregateArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithRelationInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ProfileCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ProfileCountAggregateInput>;
  @Field(() => ProfileMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ProfileMinAggregateInput>;
  @Field(() => ProfileMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@InputType()
export class ProfileCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  profileId?: true;
  @Field(() => Boolean, { nullable: true })
  bio?: true;
  @Field(() => Boolean, { nullable: true })
  dateOfBirth?: true;
  @Field(() => Boolean, { nullable: true })
  placeOfBirth?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  fileEntityId?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ProfileCountAggregate {
  @Field(() => Int, { nullable: false })
  profileId!: number;
  @Field(() => Int, { nullable: false })
  bio!: number;
  @Field(() => Int, { nullable: false })
  dateOfBirth!: number;
  @Field(() => Int, { nullable: false })
  placeOfBirth!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  fileEntityId!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ProfileCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileCreateManyProfilePictureInputEnvelope {
  @Field(() => [ProfileCreateManyProfilePictureInput], { nullable: false })
  @Type(() => ProfileCreateManyProfilePictureInput)
  data!: Array<ProfileCreateManyProfilePictureInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ProfileCreateManyProfilePictureInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ProfileCreateManyInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ProfileCreateNestedManyWithoutProfilePictureInput {
  @Field(() => [ProfileCreateWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create?: Array<ProfileCreateWithoutProfilePictureInput>;
  @Field(() => [ProfileCreateOrConnectWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutProfilePictureInput)
  connectOrCreate?: Array<ProfileCreateOrConnectWithoutProfilePictureInput>;
  @Field(() => ProfileCreateManyProfilePictureInputEnvelope, { nullable: true })
  @Type(() => ProfileCreateManyProfilePictureInputEnvelope)
  createMany?: InstanceType<typeof ProfileCreateManyProfilePictureInputEnvelope>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: Array<ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileCreateNestedOneWithoutUserInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
  @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileCreateOrConnectWithoutProfilePictureInput {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileCreateWithoutProfilePictureInput, { nullable: false })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create!: InstanceType<typeof ProfileCreateWithoutProfilePictureInput>;
}

@InputType()
export class ProfileCreateOrConnectWithoutUserInput {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
  @Type(() => ProfileCreateWithoutUserInput)
  create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileCreateWithoutProfilePictureInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UsersCreateNestedOneWithoutProfileInput, { nullable: true })
  user?: InstanceType<typeof UsersCreateNestedOneWithoutProfileInput>;
}

@InputType()
export class ProfileCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FileEntityCreateNestedOneWithoutProfilesInput, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityCreateNestedOneWithoutProfilesInput>;
}

@InputType()
export class ProfileCreateInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FileEntityCreateNestedOneWithoutProfilesInput, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityCreateNestedOneWithoutProfilesInput>;
  @Field(() => UsersCreateNestedOneWithoutProfileInput, { nullable: true })
  user?: InstanceType<typeof UsersCreateNestedOneWithoutProfileInput>;
}

@InputType()
export class ProfileGroupByArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => [ProfileOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithAggregationInput>;
  @Field(() => [ProfileScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ProfileScalarFieldEnum>;
  @Field(() => ProfileScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ProfileScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ProfileCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ProfileCountAggregateInput>;
  @Field(() => ProfileMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ProfileMinAggregateInput>;
  @Field(() => ProfileMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@ObjectType()
export class ProfileGroupBy {
  @Field(() => String, { nullable: false })
  profileId!: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => ProfileCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ProfileCountAggregate>;
  @Field(() => ProfileMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ProfileMinAggregate>;
  @Field(() => ProfileMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ProfileMaxAggregate>;
}

@InputType()
export class ProfileListRelationFilter {
  @Field(() => ProfileWhereInput, { nullable: true })
  every?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => ProfileWhereInput, { nullable: true })
  some?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => ProfileWhereInput, { nullable: true })
  none?: InstanceType<typeof ProfileWhereInput>;
}

@InputType()
export class ProfileMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  profileId?: true;
  @Field(() => Boolean, { nullable: true })
  bio?: true;
  @Field(() => Boolean, { nullable: true })
  dateOfBirth?: true;
  @Field(() => Boolean, { nullable: true })
  placeOfBirth?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  fileEntityId?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
}

@ObjectType()
export class ProfileMaxAggregate {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ProfileMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  profileId?: true;
  @Field(() => Boolean, { nullable: true })
  bio?: true;
  @Field(() => Boolean, { nullable: true })
  dateOfBirth?: true;
  @Field(() => Boolean, { nullable: true })
  placeOfBirth?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  fileEntityId?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
}

@ObjectType()
export class ProfileMinAggregate {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ProfileMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class ProfileOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => ProfileCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ProfileCountOrderByAggregateInput>;
  @Field(() => ProfileMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ProfileMaxOrderByAggregateInput>;
  @Field(() => ProfileMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ProfileMinOrderByAggregateInput>;
}

@InputType()
export class ProfileOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeOfBirth?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
  @Field(() => FileEntityOrderByWithRelationInput, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityOrderByWithRelationInput>;
  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UsersOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileRelationFilter {
  @Field(() => ProfileWhereInput, { nullable: true })
  is?: InstanceType<typeof ProfileWhereInput>;
  @Field(() => ProfileWhereInput, { nullable: true })
  isNot?: InstanceType<typeof ProfileWhereInput>;
}

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ProfileScalarWhereWithAggregatesInput>;
  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ProfileScalarWhereWithAggregatesInput>;
  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ProfileScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  profileId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bio?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  dateOfBirth?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  placeOfBirth?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  fileEntityId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class ProfileScalarWhereInput {
  @Field(() => [ProfileScalarWhereInput], { nullable: true })
  AND?: Array<ProfileScalarWhereInput>;
  @Field(() => [ProfileScalarWhereInput], { nullable: true })
  OR?: Array<ProfileScalarWhereInput>;
  @Field(() => [ProfileScalarWhereInput], { nullable: true })
  NOT?: Array<ProfileScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  profileId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  bio?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  dateOfBirth?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  placeOfBirth?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  fileEntityId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  userId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class ProfileUncheckedCreateNestedManyWithoutProfilePictureInput {
  @Field(() => [ProfileCreateWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create?: Array<ProfileCreateWithoutProfilePictureInput>;
  @Field(() => [ProfileCreateOrConnectWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutProfilePictureInput)
  connectOrCreate?: Array<ProfileCreateOrConnectWithoutProfilePictureInput>;
  @Field(() => ProfileCreateManyProfilePictureInputEnvelope, { nullable: true })
  @Type(() => ProfileCreateManyProfilePictureInputEnvelope)
  createMany?: InstanceType<typeof ProfileCreateManyProfilePictureInputEnvelope>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: Array<ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileUncheckedCreateNestedOneWithoutUserInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
  @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileUncheckedCreateWithoutProfilePictureInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ProfileUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
}

@InputType()
export class ProfileUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  placeOfBirth?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ProfileUncheckedUpdateManyWithoutProfilePictureNestedInput {
  @Field(() => [ProfileCreateWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create?: Array<ProfileCreateWithoutProfilePictureInput>;
  @Field(() => [ProfileCreateOrConnectWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutProfilePictureInput)
  connectOrCreate?: Array<ProfileCreateOrConnectWithoutProfilePictureInput>;
  @Field(() => [ProfileUpsertWithWhereUniqueWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileUpsertWithWhereUniqueWithoutProfilePictureInput)
  upsert?: Array<ProfileUpsertWithWhereUniqueWithoutProfilePictureInput>;
  @Field(() => ProfileCreateManyProfilePictureInputEnvelope, { nullable: true })
  @Type(() => ProfileCreateManyProfilePictureInputEnvelope)
  createMany?: InstanceType<typeof ProfileCreateManyProfilePictureInputEnvelope>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  set?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  disconnect?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  delete?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileUpdateWithWhereUniqueWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileUpdateWithWhereUniqueWithoutProfilePictureInput)
  update?: Array<ProfileUpdateWithWhereUniqueWithoutProfilePictureInput>;
  @Field(() => [ProfileUpdateManyWithWhereWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileUpdateManyWithWhereWithoutProfilePictureInput)
  updateMany?: Array<ProfileUpdateManyWithWhereWithoutProfilePictureInput>;
  @Field(() => [ProfileScalarWhereInput], { nullable: true })
  @Type(() => ProfileScalarWhereInput)
  deleteMany?: Array<ProfileScalarWhereInput>;
}

@InputType()
export class ProfileUncheckedUpdateManyWithoutProfilesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateOneWithoutUserNestedInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
  @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
  @Field(() => ProfileUpsertWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpsertWithoutUserInput)
  upsert?: InstanceType<typeof ProfileUpsertWithoutUserInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileUpdateWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpdateWithoutUserInput)
  update?: InstanceType<typeof ProfileUpdateWithoutUserInput>;
}

@InputType()
export class ProfileUncheckedUpdateWithoutProfilePictureInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateManyWithWhereWithoutProfilePictureInput {
  @Field(() => ProfileScalarWhereInput, { nullable: false })
  @Type(() => ProfileScalarWhereInput)
  where!: InstanceType<typeof ProfileScalarWhereInput>;
  @Field(() => ProfileUpdateManyMutationInput, { nullable: false })
  @Type(() => ProfileUpdateManyMutationInput)
  data!: InstanceType<typeof ProfileUpdateManyMutationInput>;
}

@InputType()
export class ProfileUpdateManyWithoutProfilePictureNestedInput {
  @Field(() => [ProfileCreateWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create?: Array<ProfileCreateWithoutProfilePictureInput>;
  @Field(() => [ProfileCreateOrConnectWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutProfilePictureInput)
  connectOrCreate?: Array<ProfileCreateOrConnectWithoutProfilePictureInput>;
  @Field(() => [ProfileUpsertWithWhereUniqueWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileUpsertWithWhereUniqueWithoutProfilePictureInput)
  upsert?: Array<ProfileUpsertWithWhereUniqueWithoutProfilePictureInput>;
  @Field(() => ProfileCreateManyProfilePictureInputEnvelope, { nullable: true })
  @Type(() => ProfileCreateManyProfilePictureInputEnvelope)
  createMany?: InstanceType<typeof ProfileCreateManyProfilePictureInputEnvelope>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  set?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  disconnect?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  delete?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileWhereUniqueInput], { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: Array<ProfileWhereUniqueInput>;
  @Field(() => [ProfileUpdateWithWhereUniqueWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileUpdateWithWhereUniqueWithoutProfilePictureInput)
  update?: Array<ProfileUpdateWithWhereUniqueWithoutProfilePictureInput>;
  @Field(() => [ProfileUpdateManyWithWhereWithoutProfilePictureInput], { nullable: true })
  @Type(() => ProfileUpdateManyWithWhereWithoutProfilePictureInput)
  updateMany?: Array<ProfileUpdateManyWithWhereWithoutProfilePictureInput>;
  @Field(() => [ProfileScalarWhereInput], { nullable: true })
  @Type(() => ProfileScalarWhereInput)
  deleteMany?: Array<ProfileScalarWhereInput>;
}

@InputType()
export class ProfileUpdateOneWithoutUserNestedInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
  @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
  @Field(() => ProfileUpsertWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpsertWithoutUserInput)
  upsert?: InstanceType<typeof ProfileUpsertWithoutUserInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileUpdateWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpdateWithoutUserInput)
  update?: InstanceType<typeof ProfileUpdateWithoutUserInput>;
}

@InputType()
export class ProfileUpdateWithWhereUniqueWithoutProfilePictureInput {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileUpdateWithoutProfilePictureInput, { nullable: false })
  @Type(() => ProfileUpdateWithoutProfilePictureInput)
  data!: InstanceType<typeof ProfileUpdateWithoutProfilePictureInput>;
}

@InputType()
export class ProfileUpdateWithoutProfilePictureInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UsersUpdateOneWithoutProfileNestedInput, { nullable: true })
  user?: InstanceType<typeof UsersUpdateOneWithoutProfileNestedInput>;
}

@InputType()
export class ProfileUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FileEntityUpdateOneWithoutProfilesNestedInput, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityUpdateOneWithoutProfilesNestedInput>;
}

@InputType()
export class ProfileUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FileEntityUpdateOneWithoutProfilesNestedInput, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityUpdateOneWithoutProfilesNestedInput>;
  @Field(() => UsersUpdateOneWithoutProfileNestedInput, { nullable: true })
  user?: InstanceType<typeof UsersUpdateOneWithoutProfileNestedInput>;
}

@InputType()
export class ProfileUpsertWithWhereUniqueWithoutProfilePictureInput {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileUpdateWithoutProfilePictureInput, { nullable: false })
  @Type(() => ProfileUpdateWithoutProfilePictureInput)
  update!: InstanceType<typeof ProfileUpdateWithoutProfilePictureInput>;
  @Field(() => ProfileCreateWithoutProfilePictureInput, { nullable: false })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create!: InstanceType<typeof ProfileCreateWithoutProfilePictureInput>;
}

@InputType()
export class ProfileUpsertWithoutUserInput {
  @Field(() => ProfileUpdateWithoutUserInput, { nullable: false })
  @Type(() => ProfileUpdateWithoutUserInput)
  update!: InstanceType<typeof ProfileUpdateWithoutUserInput>;
  @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
  @Type(() => ProfileCreateWithoutUserInput)
  create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileWhereUniqueInput {
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ProfileWhereInput {
  @Field(() => [ProfileWhereInput], { nullable: true })
  AND?: Array<ProfileWhereInput>;
  @Field(() => [ProfileWhereInput], { nullable: true })
  OR?: Array<ProfileWhereInput>;
  @Field(() => [ProfileWhereInput], { nullable: true })
  NOT?: Array<ProfileWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  profileId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  bio?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  dateOfBirth?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  placeOfBirth?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  fileEntityId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => FileEntityRelationFilter, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityRelationFilter>;
  @Field(() => UsersRelationFilter, { nullable: true })
  user?: InstanceType<typeof UsersRelationFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  userId?: InstanceType<typeof StringNullableFilter>;
}

@ObjectType()
export class Profile {
  @Field(() => ID, { nullable: false })
  profileId!: string;
  @Field(() => String, { nullable: false })
  bio!: string;
  @Field(() => Date, { nullable: true })
  dateOfBirth!: Date | null;
  @Field(() => Date, { nullable: true })
  placeOfBirth!: Date | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => String, { nullable: true })
  fileEntityId!: string | null;
  @Field(() => FileEntity, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntity> | null;
  @Field(() => Users, { nullable: true })
  user?: InstanceType<typeof Users> | null;
  @Field(() => String, { nullable: true })
  userId!: string | null;
}

@InputType()
export class UpdateManyProfileArgs {
  @Field(() => ProfileUpdateManyMutationInput, { nullable: false })
  @Type(() => ProfileUpdateManyMutationInput)
  data!: InstanceType<typeof ProfileUpdateManyMutationInput>;
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: InstanceType<typeof ProfileWhereInput>;
}

@InputType()
export class UpdateOneProfileArgs {
  @Field(() => ProfileUpdateInput, { nullable: false })
  @Type(() => ProfileUpdateInput)
  data!: InstanceType<typeof ProfileUpdateInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class UpsertOneProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileCreateInput, { nullable: false })
  @Type(() => ProfileCreateInput)
  create!: InstanceType<typeof ProfileCreateInput>;
  @Field(() => ProfileUpdateInput, { nullable: false })
  @Type(() => ProfileUpdateInput)
  update!: InstanceType<typeof ProfileUpdateInput>;
}

@ObjectType()
export class AggregateRestauUsers {
  @Field(() => RestauUsersCountAggregate, { nullable: true })
  _count?: InstanceType<typeof RestauUsersCountAggregate>;
  @Field(() => RestauUsersMinAggregate, { nullable: true })
  _min?: InstanceType<typeof RestauUsersMinAggregate>;
  @Field(() => RestauUsersMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof RestauUsersMaxAggregate>;
}

@InputType()
export class CreateManyRestauUsersArgs {
  @Field(() => [RestauUsersCreateManyInput], { nullable: false })
  @Type(() => RestauUsersCreateManyInput)
  data!: Array<RestauUsersCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneRestauUsersArgs {
  @Field(() => RestauUsersCreateInput, { nullable: false })
  @Type(() => RestauUsersCreateInput)
  data!: InstanceType<typeof RestauUsersCreateInput>;
}

@InputType()
export class DeleteManyRestauUsersArgs {
  @Field(() => RestauUsersWhereInput, { nullable: true })
  @Type(() => RestauUsersWhereInput)
  where?: InstanceType<typeof RestauUsersWhereInput>;
}

@InputType()
export class DeleteOneRestauUsersArgs {
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
}

@InputType()
export class FindFirstRestauUsersArgs {
  @Field(() => RestauUsersWhereInput, { nullable: true })
  @Type(() => RestauUsersWhereInput)
  where?: InstanceType<typeof RestauUsersWhereInput>;
  @Field(() => [RestauUsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestauUsersOrderByWithRelationInput>;
  @Field(() => RestauUsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RestauUsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RestauUsersScalarFieldEnum>;
}

@InputType()
export class FindManyRestauUsersArgs {
  @Field(() => RestauUsersWhereInput, { nullable: true })
  @Type(() => RestauUsersWhereInput)
  where?: InstanceType<typeof RestauUsersWhereInput>;
  @Field(() => [RestauUsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestauUsersOrderByWithRelationInput>;
  @Field(() => RestauUsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RestauUsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RestauUsersScalarFieldEnum>;
}

@InputType()
export class FindUniqueRestauUsersArgs {
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
}

@InputType()
export class RestauUsersAggregateArgs {
  @Field(() => RestauUsersWhereInput, { nullable: true })
  @Type(() => RestauUsersWhereInput)
  where?: InstanceType<typeof RestauUsersWhereInput>;
  @Field(() => [RestauUsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestauUsersOrderByWithRelationInput>;
  @Field(() => RestauUsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => RestauUsersCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RestauUsersCountAggregateInput>;
  @Field(() => RestauUsersMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RestauUsersMinAggregateInput>;
  @Field(() => RestauUsersMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RestauUsersMaxAggregateInput>;
}

@InputType()
export class RestauUsersCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idRestauUser?: true;
  @Field(() => Boolean, { nullable: true })
  userName?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  userFullName?: true;
  @Field(() => Boolean, { nullable: true })
  restauId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class RestauUsersCountAggregate {
  @Field(() => Int, { nullable: false })
  idRestauUser!: number;
  @Field(() => Int, { nullable: false })
  userName!: number;
  @HideField()
  password!: number;
  @HideField()
  refreshToken!: number;
  @Field(() => Int, { nullable: false })
  userFullName!: number;
  @Field(() => Int, { nullable: false })
  restauId!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  role!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class RestauUsersCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idRestauUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userFullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class RestauUsersCreateManyRestaurantInputEnvelope {
  @Field(() => [RestauUsersCreateManyRestaurantInput], { nullable: false })
  @Type(() => RestauUsersCreateManyRestaurantInput)
  data!: Array<RestauUsersCreateManyRestaurantInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class RestauUsersCreateManyRestaurantInput {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersCreateManyInput {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => String, { nullable: false })
  restauId!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersCreateNestedManyWithoutRestaurantInput {
  @Field(() => [RestauUsersCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateWithoutRestaurantInput)
  create?: Array<RestauUsersCreateWithoutRestaurantInput>;
  @Field(() => [RestauUsersCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<RestauUsersCreateOrConnectWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => RestauUsersCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof RestauUsersCreateManyRestaurantInputEnvelope>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  connect?: Array<RestauUsersWhereUniqueInput>;
}

@InputType()
export class RestauUsersCreateOrConnectWithoutRestaurantInput {
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => RestauUsersCreateWithoutRestaurantInput, { nullable: false })
  @Type(() => RestauUsersCreateWithoutRestaurantInput)
  create!: InstanceType<typeof RestauUsersCreateWithoutRestaurantInput>;
}

@InputType()
export class RestauUsersCreateWithoutRestaurantInput {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersCreateInput {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestaurantsCreateNestedOneWithoutUsersInput, { nullable: false })
  restaurant!: InstanceType<typeof RestaurantsCreateNestedOneWithoutUsersInput>;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersGroupByArgs {
  @Field(() => RestauUsersWhereInput, { nullable: true })
  @Type(() => RestauUsersWhereInput)
  where?: InstanceType<typeof RestauUsersWhereInput>;
  @Field(() => [RestauUsersOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<RestauUsersOrderByWithAggregationInput>;
  @Field(() => [RestauUsersScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof RestauUsersScalarFieldEnum>;
  @Field(() => RestauUsersScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof RestauUsersScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => RestauUsersCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RestauUsersCountAggregateInput>;
  @Field(() => RestauUsersMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RestauUsersMinAggregateInput>;
  @Field(() => RestauUsersMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RestauUsersMaxAggregateInput>;
}

@ObjectType()
export class RestauUsersGroupBy {
  @Field(() => String, { nullable: false })
  idRestauUser!: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @HideField()
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => String, { nullable: false })
  restauId!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => Role, { nullable: false })
  role!: keyof typeof Role;
  @Field(() => RestauUsersCountAggregate, { nullable: true })
  _count?: InstanceType<typeof RestauUsersCountAggregate>;
  @Field(() => RestauUsersMinAggregate, { nullable: true })
  _min?: InstanceType<typeof RestauUsersMinAggregate>;
  @Field(() => RestauUsersMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof RestauUsersMaxAggregate>;
}

@InputType()
export class RestauUsersListRelationFilter {
  @Field(() => RestauUsersWhereInput, { nullable: true })
  every?: InstanceType<typeof RestauUsersWhereInput>;
  @Field(() => RestauUsersWhereInput, { nullable: true })
  some?: InstanceType<typeof RestauUsersWhereInput>;
  @Field(() => RestauUsersWhereInput, { nullable: true })
  none?: InstanceType<typeof RestauUsersWhereInput>;
}

@InputType()
export class RestauUsersMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idRestauUser?: true;
  @Field(() => Boolean, { nullable: true })
  userName?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  userFullName?: true;
  @Field(() => Boolean, { nullable: true })
  restauId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
}

@ObjectType()
export class RestauUsersMaxAggregate {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: true })
  userName?: string;
  @HideField()
  password?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  userFullName?: string;
  @Field(() => String, { nullable: true })
  restauId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idRestauUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userFullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class RestauUsersMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idRestauUser?: true;
  @Field(() => Boolean, { nullable: true })
  userName?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  userFullName?: true;
  @Field(() => Boolean, { nullable: true })
  restauId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
}

@ObjectType()
export class RestauUsersMinAggregate {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: true })
  userName?: string;
  @HideField()
  password?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  userFullName?: string;
  @Field(() => String, { nullable: true })
  restauId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idRestauUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userFullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class RestauUsersOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class RestauUsersOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  idRestauUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userFullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => RestauUsersCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RestauUsersCountOrderByAggregateInput>;
  @Field(() => RestauUsersMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RestauUsersMaxOrderByAggregateInput>;
  @Field(() => RestauUsersMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RestauUsersMinOrderByAggregateInput>;
}

@InputType()
export class RestauUsersOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  idRestauUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userFullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => RestaurantsOrderByWithRelationInput, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class RestauUsersScalarWhereWithAggregatesInput {
  @Field(() => [RestauUsersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<RestauUsersScalarWhereWithAggregatesInput>;
  @Field(() => [RestauUsersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<RestauUsersScalarWhereWithAggregatesInput>;
  @Field(() => [RestauUsersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<RestauUsersScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  idRestauUser?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userFullName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  restauId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
}

@InputType()
export class RestauUsersScalarWhereInput {
  @Field(() => [RestauUsersScalarWhereInput], { nullable: true })
  AND?: Array<RestauUsersScalarWhereInput>;
  @Field(() => [RestauUsersScalarWhereInput], { nullable: true })
  OR?: Array<RestauUsersScalarWhereInput>;
  @Field(() => [RestauUsersScalarWhereInput], { nullable: true })
  NOT?: Array<RestauUsersScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  userFullName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  restauId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => EnumRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleFilter>;
}

@InputType()
export class RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput {
  @Field(() => [RestauUsersCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateWithoutRestaurantInput)
  create?: Array<RestauUsersCreateWithoutRestaurantInput>;
  @Field(() => [RestauUsersCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<RestauUsersCreateOrConnectWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => RestauUsersCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof RestauUsersCreateManyRestaurantInputEnvelope>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  connect?: Array<RestauUsersWhereUniqueInput>;
}

@InputType()
export class RestauUsersUncheckedCreateWithoutRestaurantInput {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => String, { nullable: false })
  restauId!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput {
  @Field(() => [RestauUsersCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateWithoutRestaurantInput)
  create?: Array<RestauUsersCreateWithoutRestaurantInput>;
  @Field(() => [RestauUsersCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<RestauUsersCreateOrConnectWithoutRestaurantInput>;
  @Field(() => [RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput)
  upsert?: Array<RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => RestauUsersCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof RestauUsersCreateManyRestaurantInputEnvelope>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  set?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  disconnect?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  delete?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  connect?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput)
  update?: Array<RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => [RestauUsersUpdateManyWithWhereWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersUpdateManyWithWhereWithoutRestaurantInput)
  updateMany?: Array<RestauUsersUpdateManyWithWhereWithoutRestaurantInput>;
  @Field(() => [RestauUsersScalarWhereInput], { nullable: true })
  @Type(() => RestauUsersScalarWhereInput)
  deleteMany?: Array<RestauUsersScalarWhereInput>;
}

@InputType()
export class RestauUsersUncheckedUpdateManyWithoutUsersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userFullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class RestauUsersUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userFullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class RestauUsersUncheckedUpdateWithoutRestaurantInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userFullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class RestauUsersUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userFullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class RestauUsersUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userFullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class RestauUsersUpdateManyWithWhereWithoutRestaurantInput {
  @Field(() => RestauUsersScalarWhereInput, { nullable: false })
  @Type(() => RestauUsersScalarWhereInput)
  where!: InstanceType<typeof RestauUsersScalarWhereInput>;
  @Field(() => RestauUsersUpdateManyMutationInput, { nullable: false })
  @Type(() => RestauUsersUpdateManyMutationInput)
  data!: InstanceType<typeof RestauUsersUpdateManyMutationInput>;
}

@InputType()
export class RestauUsersUpdateManyWithoutRestaurantNestedInput {
  @Field(() => [RestauUsersCreateWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateWithoutRestaurantInput)
  create?: Array<RestauUsersCreateWithoutRestaurantInput>;
  @Field(() => [RestauUsersCreateOrConnectWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersCreateOrConnectWithoutRestaurantInput)
  connectOrCreate?: Array<RestauUsersCreateOrConnectWithoutRestaurantInput>;
  @Field(() => [RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput)
  upsert?: Array<RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateManyRestaurantInputEnvelope, { nullable: true })
  @Type(() => RestauUsersCreateManyRestaurantInputEnvelope)
  createMany?: InstanceType<typeof RestauUsersCreateManyRestaurantInputEnvelope>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  set?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  disconnect?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  delete?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersWhereUniqueInput], { nullable: true })
  @Type(() => RestauUsersWhereUniqueInput)
  connect?: Array<RestauUsersWhereUniqueInput>;
  @Field(() => [RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput)
  update?: Array<RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput>;
  @Field(() => [RestauUsersUpdateManyWithWhereWithoutRestaurantInput], { nullable: true })
  @Type(() => RestauUsersUpdateManyWithWhereWithoutRestaurantInput)
  updateMany?: Array<RestauUsersUpdateManyWithWhereWithoutRestaurantInput>;
  @Field(() => [RestauUsersScalarWhereInput], { nullable: true })
  @Type(() => RestauUsersScalarWhereInput)
  deleteMany?: Array<RestauUsersScalarWhereInput>;
}

@InputType()
export class RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput {
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => RestauUsersUpdateWithoutRestaurantInput, { nullable: false })
  @Type(() => RestauUsersUpdateWithoutRestaurantInput)
  data!: InstanceType<typeof RestauUsersUpdateWithoutRestaurantInput>;
}

@InputType()
export class RestauUsersUpdateWithoutRestaurantInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userFullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class RestauUsersUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userFullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestaurantsUpdateOneRequiredWithoutUsersNestedInput, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsUpdateOneRequiredWithoutUsersNestedInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput {
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => RestauUsersUpdateWithoutRestaurantInput, { nullable: false })
  @Type(() => RestauUsersUpdateWithoutRestaurantInput)
  update!: InstanceType<typeof RestauUsersUpdateWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateWithoutRestaurantInput, { nullable: false })
  @Type(() => RestauUsersCreateWithoutRestaurantInput)
  create!: InstanceType<typeof RestauUsersCreateWithoutRestaurantInput>;
}

@InputType()
export class RestauUsersWhereUniqueInput {
  @Field(() => String, { nullable: true })
  idRestauUser?: string;
}

@InputType()
export class RestauUsersWhereInput {
  @Field(() => [RestauUsersWhereInput], { nullable: true })
  AND?: Array<RestauUsersWhereInput>;
  @Field(() => [RestauUsersWhereInput], { nullable: true })
  OR?: Array<RestauUsersWhereInput>;
  @Field(() => [RestauUsersWhereInput], { nullable: true })
  NOT?: Array<RestauUsersWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idRestauUser?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  userFullName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  restauId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => RestaurantsRelationFilter, { nullable: true })
  restaurant?: InstanceType<typeof RestaurantsRelationFilter>;
  @Field(() => EnumRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleFilter>;
}

@ObjectType()
export class RestauUsers {
  @Field(() => ID, { nullable: false })
  idRestauUser!: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @HideField()
  password!: string;
  @HideField()
  refreshToken!: string | null;
  @Field(() => String, { nullable: false })
  userFullName!: string;
  @Field(() => String, { nullable: false })
  restauId!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Restaurants, { nullable: false })
  restaurant?: InstanceType<typeof Restaurants>;
  @Field(() => Role, { nullable: false, defaultValue: 'RestaurantUser' })
  role!: keyof typeof Role;
}

@InputType()
export class UpdateManyRestauUsersArgs {
  @Field(() => RestauUsersUpdateManyMutationInput, { nullable: false })
  @Type(() => RestauUsersUpdateManyMutationInput)
  data!: InstanceType<typeof RestauUsersUpdateManyMutationInput>;
  @Field(() => RestauUsersWhereInput, { nullable: true })
  @Type(() => RestauUsersWhereInput)
  where?: InstanceType<typeof RestauUsersWhereInput>;
}

@InputType()
export class UpdateOneRestauUsersArgs {
  @Field(() => RestauUsersUpdateInput, { nullable: false })
  @Type(() => RestauUsersUpdateInput)
  data!: InstanceType<typeof RestauUsersUpdateInput>;
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
}

@InputType()
export class UpsertOneRestauUsersArgs {
  @Field(() => RestauUsersWhereUniqueInput, { nullable: false })
  @Type(() => RestauUsersWhereUniqueInput)
  where!: InstanceType<typeof RestauUsersWhereUniqueInput>;
  @Field(() => RestauUsersCreateInput, { nullable: false })
  @Type(() => RestauUsersCreateInput)
  create!: InstanceType<typeof RestauUsersCreateInput>;
  @Field(() => RestauUsersUpdateInput, { nullable: false })
  @Type(() => RestauUsersUpdateInput)
  update!: InstanceType<typeof RestauUsersUpdateInput>;
}

@ObjectType()
export class AggregateRestaurants {
  @Field(() => RestaurantsCountAggregate, { nullable: true })
  _count?: InstanceType<typeof RestaurantsCountAggregate>;
  @Field(() => RestaurantsMinAggregate, { nullable: true })
  _min?: InstanceType<typeof RestaurantsMinAggregate>;
  @Field(() => RestaurantsMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof RestaurantsMaxAggregate>;
}

@InputType()
export class CreateManyRestaurantsArgs {
  @Field(() => [RestaurantsCreateManyInput], { nullable: false })
  @Type(() => RestaurantsCreateManyInput)
  data!: Array<RestaurantsCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneRestaurantsArgs {
  @Field(() => RestaurantsCreateInput, { nullable: false })
  @Type(() => RestaurantsCreateInput)
  data!: InstanceType<typeof RestaurantsCreateInput>;
}

@InputType()
export class DeleteManyRestaurantsArgs {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  @Type(() => RestaurantsWhereInput)
  where?: InstanceType<typeof RestaurantsWhereInput>;
}

@InputType()
export class DeleteOneRestaurantsArgs {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
}

@InputType()
export class FindFirstRestaurantsArgs {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  @Type(() => RestaurantsWhereInput)
  where?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => [RestaurantsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestaurantsOrderByWithRelationInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RestaurantsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RestaurantsScalarFieldEnum>;
}

@InputType()
export class FindManyRestaurantsArgs {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  @Type(() => RestaurantsWhereInput)
  where?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => [RestaurantsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestaurantsOrderByWithRelationInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RestaurantsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RestaurantsScalarFieldEnum>;
}

@InputType()
export class FindUniqueRestaurantsArgs {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
}

@InputType()
export class RestaurantsAggregateArgs {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  @Type(() => RestaurantsWhereInput)
  where?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => [RestaurantsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RestaurantsOrderByWithRelationInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => RestaurantsCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RestaurantsCountAggregateInput>;
  @Field(() => RestaurantsMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RestaurantsMinAggregateInput>;
  @Field(() => RestaurantsMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RestaurantsMaxAggregateInput>;
}

@InputType()
export class RestaurantsCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idRestaurant?: true;
  @Field(() => Boolean, { nullable: true })
  restauDescription?: true;
  @Field(() => Boolean, { nullable: true })
  restauName?: true;
  @Field(() => Boolean, { nullable: true })
  creationDate?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  fileEntityId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class RestaurantsCountAggregate {
  @Field(() => Int, { nullable: false })
  idRestaurant!: number;
  @Field(() => Int, { nullable: false })
  restauDescription!: number;
  @Field(() => Int, { nullable: false })
  restauName!: number;
  @Field(() => Int, { nullable: false })
  creationDate!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  fileEntityId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class RestaurantsCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idRestaurant?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauDescription?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  creationDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
}

@ObjectType()
export class RestaurantsCount {
  @Field(() => Int, { nullable: false })
  adresses?: number;
  @Field(() => Int, { nullable: false })
  users?: number;
  @Field(() => Int, { nullable: false })
  otherImages?: number;
}

@InputType()
export class RestaurantsCreateManyRestauMainImageInputEnvelope {
  @Field(() => [RestaurantsCreateManyRestauMainImageInput], { nullable: false })
  @Type(() => RestaurantsCreateManyRestauMainImageInput)
  data!: Array<RestaurantsCreateManyRestauMainImageInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class RestaurantsCreateManyRestauMainImageInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RestaurantsCreateManyInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  fileEntityId!: string;
}

@InputType()
export class RestaurantsCreateNestedManyWithoutRestauMainImageInput {
  @Field(() => [RestaurantsCreateWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateWithoutRestauMainImageInput)
  create?: Array<RestaurantsCreateWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsCreateOrConnectWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutRestauMainImageInput)
  connectOrCreate?: Array<RestaurantsCreateOrConnectWithoutRestauMainImageInput>;
  @Field(() => RestaurantsCreateManyRestauMainImageInputEnvelope, { nullable: true })
  @Type(() => RestaurantsCreateManyRestauMainImageInputEnvelope)
  createMany?: InstanceType<typeof RestaurantsCreateManyRestauMainImageInputEnvelope>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: Array<RestaurantsWhereUniqueInput>;
}

@InputType()
export class RestaurantsCreateNestedOneWithoutAdressesInput {
  @Field(() => RestaurantsCreateWithoutAdressesInput, { nullable: true })
  @Type(() => RestaurantsCreateWithoutAdressesInput)
  create?: InstanceType<typeof RestaurantsCreateWithoutAdressesInput>;
  @Field(() => RestaurantsCreateOrConnectWithoutAdressesInput, { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutAdressesInput)
  connectOrCreate?: InstanceType<typeof RestaurantsCreateOrConnectWithoutAdressesInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: InstanceType<typeof RestaurantsWhereUniqueInput>;
}

@InputType()
export class RestaurantsCreateNestedOneWithoutOtherImagesInput {
  @Field(() => RestaurantsCreateWithoutOtherImagesInput, { nullable: true })
  @Type(() => RestaurantsCreateWithoutOtherImagesInput)
  create?: InstanceType<typeof RestaurantsCreateWithoutOtherImagesInput>;
  @Field(() => RestaurantsCreateOrConnectWithoutOtherImagesInput, { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutOtherImagesInput)
  connectOrCreate?: InstanceType<typeof RestaurantsCreateOrConnectWithoutOtherImagesInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: InstanceType<typeof RestaurantsWhereUniqueInput>;
}

@InputType()
export class RestaurantsCreateNestedOneWithoutUsersInput {
  @Field(() => RestaurantsCreateWithoutUsersInput, { nullable: true })
  @Type(() => RestaurantsCreateWithoutUsersInput)
  create?: InstanceType<typeof RestaurantsCreateWithoutUsersInput>;
  @Field(() => RestaurantsCreateOrConnectWithoutUsersInput, { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutUsersInput)
  connectOrCreate?: InstanceType<typeof RestaurantsCreateOrConnectWithoutUsersInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: InstanceType<typeof RestaurantsWhereUniqueInput>;
}

@InputType()
export class RestaurantsCreateOrConnectWithoutAdressesInput {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsCreateWithoutAdressesInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutAdressesInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutAdressesInput>;
}

@InputType()
export class RestaurantsCreateOrConnectWithoutOtherImagesInput {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsCreateWithoutOtherImagesInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutOtherImagesInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutOtherImagesInput>;
}

@InputType()
export class RestaurantsCreateOrConnectWithoutRestauMainImageInput {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsCreateWithoutRestauMainImageInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutRestauMainImageInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutRestauMainImageInput>;
}

@InputType()
export class RestaurantsCreateOrConnectWithoutUsersInput {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsCreateWithoutUsersInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutUsersInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutUsersInput>;
}

@InputType()
export class RestaurantsCreateWithoutAdressesInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => FileEntityCreateNestedOneWithoutRestaurantsInput, { nullable: false })
  restauMainImage!: InstanceType<typeof FileEntityCreateNestedOneWithoutRestaurantsInput>;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestauUsersCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryCreateNestedManyWithoutRestaurantsInput>;
}

@InputType()
export class RestaurantsCreateWithoutOtherImagesInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => FileEntityCreateNestedOneWithoutRestaurantsInput, { nullable: false })
  restauMainImage!: InstanceType<typeof FileEntityCreateNestedOneWithoutRestaurantsInput>;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesCreateNestedManyWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersCreateNestedManyWithoutRestaurantInput>;
}

@InputType()
export class RestaurantsCreateWithoutRestauMainImageInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesCreateNestedManyWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryCreateNestedManyWithoutRestaurantsInput>;
}

@InputType()
export class RestaurantsCreateWithoutUsersInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => FileEntityCreateNestedOneWithoutRestaurantsInput, { nullable: false })
  restauMainImage!: InstanceType<typeof FileEntityCreateNestedOneWithoutRestaurantsInput>;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryCreateNestedManyWithoutRestaurantsInput>;
}

@InputType()
export class RestaurantsCreateInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => FileEntityCreateNestedOneWithoutRestaurantsInput, { nullable: false })
  restauMainImage!: InstanceType<typeof FileEntityCreateNestedOneWithoutRestaurantsInput>;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesCreateNestedManyWithoutRestaurantInput>;
  @Field(() => RestauUsersCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryCreateNestedManyWithoutRestaurantsInput>;
}

@InputType()
export class RestaurantsGroupByArgs {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  @Type(() => RestaurantsWhereInput)
  where?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => [RestaurantsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<RestaurantsOrderByWithAggregationInput>;
  @Field(() => [RestaurantsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof RestaurantsScalarFieldEnum>;
  @Field(() => RestaurantsScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof RestaurantsScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => RestaurantsCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RestaurantsCountAggregateInput>;
  @Field(() => RestaurantsMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RestaurantsMinAggregateInput>;
  @Field(() => RestaurantsMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RestaurantsMaxAggregateInput>;
}

@ObjectType()
export class RestaurantsGroupBy {
  @Field(() => String, { nullable: false })
  idRestaurant!: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: false })
  creationDate!: Date | string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: false })
  fileEntityId!: string;
  @Field(() => RestaurantsCountAggregate, { nullable: true })
  _count?: InstanceType<typeof RestaurantsCountAggregate>;
  @Field(() => RestaurantsMinAggregate, { nullable: true })
  _min?: InstanceType<typeof RestaurantsMinAggregate>;
  @Field(() => RestaurantsMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof RestaurantsMaxAggregate>;
}

@InputType()
export class RestaurantsListRelationFilter {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  every?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => RestaurantsWhereInput, { nullable: true })
  some?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => RestaurantsWhereInput, { nullable: true })
  none?: InstanceType<typeof RestaurantsWhereInput>;
}

@InputType()
export class RestaurantsMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idRestaurant?: true;
  @Field(() => Boolean, { nullable: true })
  restauDescription?: true;
  @Field(() => Boolean, { nullable: true })
  restauName?: true;
  @Field(() => Boolean, { nullable: true })
  creationDate?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  fileEntityId?: true;
}

@ObjectType()
export class RestaurantsMaxAggregate {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: true })
  restauDescription?: string;
  @Field(() => String, { nullable: true })
  restauName?: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
}

@InputType()
export class RestaurantsMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idRestaurant?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauDescription?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  creationDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
}

@InputType()
export class RestaurantsMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idRestaurant?: true;
  @Field(() => Boolean, { nullable: true })
  restauDescription?: true;
  @Field(() => Boolean, { nullable: true })
  restauName?: true;
  @Field(() => Boolean, { nullable: true })
  creationDate?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  fileEntityId?: true;
}

@ObjectType()
export class RestaurantsMinAggregate {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: true })
  restauDescription?: string;
  @Field(() => String, { nullable: true })
  restauName?: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  fileEntityId?: string;
}

@InputType()
export class RestaurantsMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idRestaurant?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauDescription?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  creationDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
}

@InputType()
export class RestaurantsOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class RestaurantsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  idRestaurant?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauDescription?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  creationDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
  @Field(() => RestaurantsCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RestaurantsCountOrderByAggregateInput>;
  @Field(() => RestaurantsMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RestaurantsMaxOrderByAggregateInput>;
  @Field(() => RestaurantsMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RestaurantsMinOrderByAggregateInput>;
}

@InputType()
export class RestaurantsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  idRestaurant?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauDescription?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  restauName?: keyof typeof SortOrder;
  @Field(() => FileEntityOrderByWithRelationInput, { nullable: true })
  restauMainImage?: InstanceType<typeof FileEntityOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  creationDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => AdressesOrderByRelationAggregateInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesOrderByRelationAggregateInput>;
  @Field(() => RestauUsersOrderByRelationAggregateInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersOrderByRelationAggregateInput>;
  @Field(() => ImagesSecondaryOrderByRelationAggregateInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryOrderByRelationAggregateInput>;
  @Field(() => SortOrder, { nullable: true })
  fileEntityId?: keyof typeof SortOrder;
}

@InputType()
export class RestaurantsRelationFilter {
  @Field(() => RestaurantsWhereInput, { nullable: true })
  is?: InstanceType<typeof RestaurantsWhereInput>;
  @Field(() => RestaurantsWhereInput, { nullable: true })
  isNot?: InstanceType<typeof RestaurantsWhereInput>;
}

@InputType()
export class RestaurantsScalarWhereWithAggregatesInput {
  @Field(() => [RestaurantsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<RestaurantsScalarWhereWithAggregatesInput>;
  @Field(() => [RestaurantsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<RestaurantsScalarWhereWithAggregatesInput>;
  @Field(() => [RestaurantsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<RestaurantsScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  idRestaurant?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  restauDescription?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  restauName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileEntityId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class RestaurantsScalarWhereInput {
  @Field(() => [RestaurantsScalarWhereInput], { nullable: true })
  AND?: Array<RestaurantsScalarWhereInput>;
  @Field(() => [RestaurantsScalarWhereInput], { nullable: true })
  OR?: Array<RestaurantsScalarWhereInput>;
  @Field(() => [RestaurantsScalarWhereInput], { nullable: true })
  NOT?: Array<RestaurantsScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  restauDescription?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  restauName?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileEntityId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class RestaurantsUncheckedCreateNestedManyWithoutRestauMainImageInput {
  @Field(() => [RestaurantsCreateWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateWithoutRestauMainImageInput)
  create?: Array<RestaurantsCreateWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsCreateOrConnectWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutRestauMainImageInput)
  connectOrCreate?: Array<RestaurantsCreateOrConnectWithoutRestauMainImageInput>;
  @Field(() => RestaurantsCreateManyRestauMainImageInputEnvelope, { nullable: true })
  @Type(() => RestaurantsCreateManyRestauMainImageInputEnvelope)
  createMany?: InstanceType<typeof RestaurantsCreateManyRestauMainImageInputEnvelope>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: Array<RestaurantsWhereUniqueInput>;
}

@InputType()
export class RestaurantsUncheckedCreateWithoutAdressesInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput>;
  @Field(() => String, { nullable: false })
  fileEntityId!: string;
}

@InputType()
export class RestaurantsUncheckedCreateWithoutOtherImagesInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => String, { nullable: false })
  fileEntityId!: string;
}

@InputType()
export class RestaurantsUncheckedCreateWithoutRestauMainImageInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput>;
}

@InputType()
export class RestaurantsUncheckedCreateWithoutUsersInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput>;
  @Field(() => String, { nullable: false })
  fileEntityId!: string;
}

@InputType()
export class RestaurantsUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => Date, { nullable: true })
  creationDate?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedCreateNestedManyWithoutRestaurantInput>;
  @Field(() => ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedCreateNestedManyWithoutRestaurantsInput>;
  @Field(() => String, { nullable: false })
  fileEntityId!: string;
}

@InputType()
export class RestaurantsUncheckedUpdateManyWithoutRestauMainImageNestedInput {
  @Field(() => [RestaurantsCreateWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateWithoutRestauMainImageInput)
  create?: Array<RestaurantsCreateWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsCreateOrConnectWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutRestauMainImageInput)
  connectOrCreate?: Array<RestaurantsCreateOrConnectWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput)
  upsert?: Array<RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput>;
  @Field(() => RestaurantsCreateManyRestauMainImageInputEnvelope, { nullable: true })
  @Type(() => RestaurantsCreateManyRestauMainImageInputEnvelope)
  createMany?: InstanceType<typeof RestaurantsCreateManyRestauMainImageInputEnvelope>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  set?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  disconnect?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  delete?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput)
  update?: Array<RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput)
  updateMany?: Array<RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsScalarWhereInput], { nullable: true })
  @Type(() => RestaurantsScalarWhereInput)
  deleteMany?: Array<RestaurantsScalarWhereInput>;
}

@InputType()
export class RestaurantsUncheckedUpdateManyWithoutRestaurantsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RestaurantsUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RestaurantsUncheckedUpdateWithoutAdressesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RestaurantsUncheckedUpdateWithoutOtherImagesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RestaurantsUncheckedUpdateWithoutRestauMainImageInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput>;
}

@InputType()
export class RestaurantsUncheckedUpdateWithoutUsersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RestaurantsUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUncheckedUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUncheckedUpdateManyWithoutRestaurantsNestedInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileEntityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RestaurantsUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput {
  @Field(() => RestaurantsScalarWhereInput, { nullable: false })
  @Type(() => RestaurantsScalarWhereInput)
  where!: InstanceType<typeof RestaurantsScalarWhereInput>;
  @Field(() => RestaurantsUpdateManyMutationInput, { nullable: false })
  @Type(() => RestaurantsUpdateManyMutationInput)
  data!: InstanceType<typeof RestaurantsUpdateManyMutationInput>;
}

@InputType()
export class RestaurantsUpdateManyWithoutRestauMainImageNestedInput {
  @Field(() => [RestaurantsCreateWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateWithoutRestauMainImageInput)
  create?: Array<RestaurantsCreateWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsCreateOrConnectWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutRestauMainImageInput)
  connectOrCreate?: Array<RestaurantsCreateOrConnectWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput)
  upsert?: Array<RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput>;
  @Field(() => RestaurantsCreateManyRestauMainImageInputEnvelope, { nullable: true })
  @Type(() => RestaurantsCreateManyRestauMainImageInputEnvelope)
  createMany?: InstanceType<typeof RestaurantsCreateManyRestauMainImageInputEnvelope>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  set?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  disconnect?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  delete?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsWhereUniqueInput], { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: Array<RestaurantsWhereUniqueInput>;
  @Field(() => [RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput)
  update?: Array<RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput], { nullable: true })
  @Type(() => RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput)
  updateMany?: Array<RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput>;
  @Field(() => [RestaurantsScalarWhereInput], { nullable: true })
  @Type(() => RestaurantsScalarWhereInput)
  deleteMany?: Array<RestaurantsScalarWhereInput>;
}

@InputType()
export class RestaurantsUpdateOneRequiredWithoutUsersNestedInput {
  @Field(() => RestaurantsCreateWithoutUsersInput, { nullable: true })
  @Type(() => RestaurantsCreateWithoutUsersInput)
  create?: InstanceType<typeof RestaurantsCreateWithoutUsersInput>;
  @Field(() => RestaurantsCreateOrConnectWithoutUsersInput, { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutUsersInput)
  connectOrCreate?: InstanceType<typeof RestaurantsCreateOrConnectWithoutUsersInput>;
  @Field(() => RestaurantsUpsertWithoutUsersInput, { nullable: true })
  @Type(() => RestaurantsUpsertWithoutUsersInput)
  upsert?: InstanceType<typeof RestaurantsUpsertWithoutUsersInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsUpdateWithoutUsersInput, { nullable: true })
  @Type(() => RestaurantsUpdateWithoutUsersInput)
  update?: InstanceType<typeof RestaurantsUpdateWithoutUsersInput>;
}

@InputType()
export class RestaurantsUpdateOneWithoutAdressesNestedInput {
  @Field(() => RestaurantsCreateWithoutAdressesInput, { nullable: true })
  @Type(() => RestaurantsCreateWithoutAdressesInput)
  create?: InstanceType<typeof RestaurantsCreateWithoutAdressesInput>;
  @Field(() => RestaurantsCreateOrConnectWithoutAdressesInput, { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutAdressesInput)
  connectOrCreate?: InstanceType<typeof RestaurantsCreateOrConnectWithoutAdressesInput>;
  @Field(() => RestaurantsUpsertWithoutAdressesInput, { nullable: true })
  @Type(() => RestaurantsUpsertWithoutAdressesInput)
  upsert?: InstanceType<typeof RestaurantsUpsertWithoutAdressesInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsUpdateWithoutAdressesInput, { nullable: true })
  @Type(() => RestaurantsUpdateWithoutAdressesInput)
  update?: InstanceType<typeof RestaurantsUpdateWithoutAdressesInput>;
}

@InputType()
export class RestaurantsUpdateOneWithoutOtherImagesNestedInput {
  @Field(() => RestaurantsCreateWithoutOtherImagesInput, { nullable: true })
  @Type(() => RestaurantsCreateWithoutOtherImagesInput)
  create?: InstanceType<typeof RestaurantsCreateWithoutOtherImagesInput>;
  @Field(() => RestaurantsCreateOrConnectWithoutOtherImagesInput, { nullable: true })
  @Type(() => RestaurantsCreateOrConnectWithoutOtherImagesInput)
  connectOrCreate?: InstanceType<typeof RestaurantsCreateOrConnectWithoutOtherImagesInput>;
  @Field(() => RestaurantsUpsertWithoutOtherImagesInput, { nullable: true })
  @Type(() => RestaurantsUpsertWithoutOtherImagesInput)
  upsert?: InstanceType<typeof RestaurantsUpsertWithoutOtherImagesInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: true })
  @Type(() => RestaurantsWhereUniqueInput)
  connect?: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsUpdateWithoutOtherImagesInput, { nullable: true })
  @Type(() => RestaurantsUpdateWithoutOtherImagesInput)
  update?: InstanceType<typeof RestaurantsUpdateWithoutOtherImagesInput>;
}

@InputType()
export class RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsUpdateWithoutRestauMainImageInput, { nullable: false })
  @Type(() => RestaurantsUpdateWithoutRestauMainImageInput)
  data!: InstanceType<typeof RestaurantsUpdateWithoutRestauMainImageInput>;
}

@InputType()
export class RestaurantsUpdateWithoutAdressesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput, { nullable: true })
  restauMainImage?: InstanceType<typeof FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => RestauUsersUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput>;
}

@InputType()
export class RestaurantsUpdateWithoutOtherImagesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput, { nullable: true })
  restauMainImage?: InstanceType<typeof FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => RestauUsersUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUpdateManyWithoutRestaurantNestedInput>;
}

@InputType()
export class RestaurantsUpdateWithoutRestauMainImageInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => RestauUsersUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput>;
}

@InputType()
export class RestaurantsUpdateWithoutUsersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput, { nullable: true })
  restauMainImage?: InstanceType<typeof FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput>;
}

@InputType()
export class RestaurantsUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  restauName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput, { nullable: true })
  restauMainImage?: InstanceType<typeof FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => RestauUsersUpdateManyWithoutRestaurantNestedInput, { nullable: true })
  users?: InstanceType<typeof RestauUsersUpdateManyWithoutRestaurantNestedInput>;
  @Field(() => ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput>;
}

@InputType()
export class RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsUpdateWithoutRestauMainImageInput, { nullable: false })
  @Type(() => RestaurantsUpdateWithoutRestauMainImageInput)
  update!: InstanceType<typeof RestaurantsUpdateWithoutRestauMainImageInput>;
  @Field(() => RestaurantsCreateWithoutRestauMainImageInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutRestauMainImageInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutRestauMainImageInput>;
}

@InputType()
export class RestaurantsUpsertWithoutAdressesInput {
  @Field(() => RestaurantsUpdateWithoutAdressesInput, { nullable: false })
  @Type(() => RestaurantsUpdateWithoutAdressesInput)
  update!: InstanceType<typeof RestaurantsUpdateWithoutAdressesInput>;
  @Field(() => RestaurantsCreateWithoutAdressesInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutAdressesInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutAdressesInput>;
}

@InputType()
export class RestaurantsUpsertWithoutOtherImagesInput {
  @Field(() => RestaurantsUpdateWithoutOtherImagesInput, { nullable: false })
  @Type(() => RestaurantsUpdateWithoutOtherImagesInput)
  update!: InstanceType<typeof RestaurantsUpdateWithoutOtherImagesInput>;
  @Field(() => RestaurantsCreateWithoutOtherImagesInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutOtherImagesInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutOtherImagesInput>;
}

@InputType()
export class RestaurantsUpsertWithoutUsersInput {
  @Field(() => RestaurantsUpdateWithoutUsersInput, { nullable: false })
  @Type(() => RestaurantsUpdateWithoutUsersInput)
  update!: InstanceType<typeof RestaurantsUpdateWithoutUsersInput>;
  @Field(() => RestaurantsCreateWithoutUsersInput, { nullable: false })
  @Type(() => RestaurantsCreateWithoutUsersInput)
  create!: InstanceType<typeof RestaurantsCreateWithoutUsersInput>;
}

@InputType()
export class RestaurantsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  idRestaurant?: string;
}

@InputType()
export class RestaurantsWhereInput {
  @Field(() => [RestaurantsWhereInput], { nullable: true })
  AND?: Array<RestaurantsWhereInput>;
  @Field(() => [RestaurantsWhereInput], { nullable: true })
  OR?: Array<RestaurantsWhereInput>;
  @Field(() => [RestaurantsWhereInput], { nullable: true })
  NOT?: Array<RestaurantsWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idRestaurant?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  restauDescription?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  restauName?: InstanceType<typeof StringFilter>;
  @Field(() => FileEntityRelationFilter, { nullable: true })
  restauMainImage?: InstanceType<typeof FileEntityRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  creationDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => AdressesListRelationFilter, { nullable: true })
  adresses?: InstanceType<typeof AdressesListRelationFilter>;
  @Field(() => RestauUsersListRelationFilter, { nullable: true })
  users?: InstanceType<typeof RestauUsersListRelationFilter>;
  @Field(() => ImagesSecondaryListRelationFilter, { nullable: true })
  otherImages?: InstanceType<typeof ImagesSecondaryListRelationFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileEntityId?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Restaurants {
  @Field(() => ID, { nullable: false })
  idRestaurant!: string;
  @Field(() => String, { nullable: false })
  restauDescription!: string;
  @Field(() => String, { nullable: false })
  restauName!: string;
  @Field(() => FileEntity, { nullable: false })
  restauMainImage?: InstanceType<typeof FileEntity>;
  @Field(() => Date, { nullable: false })
  creationDate!: Date;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => [Adresses], { nullable: true })
  adresses?: Array<Adresses>;
  @Field(() => [RestauUsers], { nullable: true })
  users?: Array<RestauUsers>;
  @Field(() => [ImagesSecondary], { nullable: true })
  otherImages?: Array<ImagesSecondary>;
  @Field(() => String, { nullable: false })
  fileEntityId!: string;
  @Field(() => RestaurantsCount, { nullable: false })
  _count?: InstanceType<typeof RestaurantsCount>;
}

@InputType()
export class UpdateManyRestaurantsArgs {
  @Field(() => RestaurantsUpdateManyMutationInput, { nullable: false })
  @Type(() => RestaurantsUpdateManyMutationInput)
  data!: InstanceType<typeof RestaurantsUpdateManyMutationInput>;
  @Field(() => RestaurantsWhereInput, { nullable: true })
  @Type(() => RestaurantsWhereInput)
  where?: InstanceType<typeof RestaurantsWhereInput>;
}

@InputType()
export class UpdateOneRestaurantsArgs {
  @Field(() => RestaurantsUpdateInput, { nullable: false })
  @Type(() => RestaurantsUpdateInput)
  data!: InstanceType<typeof RestaurantsUpdateInput>;
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
}

@InputType()
export class UpsertOneRestaurantsArgs {
  @Field(() => RestaurantsWhereUniqueInput, { nullable: false })
  @Type(() => RestaurantsWhereUniqueInput)
  where!: InstanceType<typeof RestaurantsWhereUniqueInput>;
  @Field(() => RestaurantsCreateInput, { nullable: false })
  @Type(() => RestaurantsCreateInput)
  create!: InstanceType<typeof RestaurantsCreateInput>;
  @Field(() => RestaurantsUpdateInput, { nullable: false })
  @Type(() => RestaurantsUpdateInput)
  update!: InstanceType<typeof RestaurantsUpdateInput>;
}

@ObjectType()
export class AggregateUsers {
  @Field(() => UsersCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregate>;
  @Field(() => UsersMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregate>;
  @Field(() => UsersMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregate>;
}

@InputType()
export class CreateManyUsersArgs {
  @Field(() => [UsersCreateManyInput], { nullable: false })
  @Type(() => UsersCreateManyInput)
  data!: Array<UsersCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneUsersArgs {
  @Field(() => UsersCreateInput, { nullable: false })
  @Type(() => UsersCreateInput)
  data!: InstanceType<typeof UsersCreateInput>;
}

@InputType()
export class DeleteManyUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
}

@InputType()
export class DeleteOneUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class FindFirstUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@InputType()
export class FindManyUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@InputType()
export class FindUniqueUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class UpdateManyUsersArgs {
  @Field(() => UsersUpdateManyMutationInput, { nullable: false })
  @Type(() => UsersUpdateManyMutationInput)
  data!: InstanceType<typeof UsersUpdateManyMutationInput>;
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
}

@InputType()
export class UpdateOneUsersArgs {
  @Field(() => UsersUpdateInput, { nullable: false })
  @Type(() => UsersUpdateInput)
  data!: InstanceType<typeof UsersUpdateInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class UpsertOneUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersCreateInput, { nullable: false })
  @Type(() => UsersCreateInput)
  create!: InstanceType<typeof UsersCreateInput>;
  @Field(() => UsersUpdateInput, { nullable: false })
  @Type(() => UsersUpdateInput)
  update!: InstanceType<typeof UsersUpdateInput>;
}

@InputType()
export class UsersAggregateArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UsersCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregateInput>;
  @Field(() => UsersMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregateInput>;
  @Field(() => UsersMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregateInput>;
}

@InputType()
export class UsersCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idUser?: true;
  @Field(() => Boolean, { nullable: true })
  firstName?: true;
  @Field(() => Boolean, { nullable: true })
  lastName?: true;
  @Field(() => Boolean, { nullable: true })
  userName?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UsersCountAggregate {
  @Field(() => Int, { nullable: false })
  idUser!: number;
  @Field(() => Int, { nullable: false })
  firstName!: number;
  @Field(() => Int, { nullable: false })
  lastName!: number;
  @Field(() => Int, { nullable: false })
  userName!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UsersCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UsersCount {
  @Field(() => Int, { nullable: false })
  adresses?: number;
}

@InputType()
export class UsersCreateManyInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UsersCreateNestedOneWithoutAdressesInput {
  @Field(() => UsersCreateWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateWithoutAdressesInput)
  create?: InstanceType<typeof UsersCreateWithoutAdressesInput>;
  @Field(() => UsersCreateOrConnectWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutAdressesInput)
  connectOrCreate?: InstanceType<typeof UsersCreateOrConnectWithoutAdressesInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class UsersCreateNestedOneWithoutProfileInput {
  @Field(() => UsersCreateWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateWithoutProfileInput)
  create?: InstanceType<typeof UsersCreateWithoutProfileInput>;
  @Field(() => UsersCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<typeof UsersCreateOrConnectWithoutProfileInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class UsersCreateOrConnectWithoutAdressesInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersCreateWithoutAdressesInput, { nullable: false })
  @Type(() => UsersCreateWithoutAdressesInput)
  create!: InstanceType<typeof UsersCreateWithoutAdressesInput>;
}

@InputType()
export class UsersCreateOrConnectWithoutProfileInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersCreateWithoutProfileInput, { nullable: false })
  @Type(() => UsersCreateWithoutProfileInput)
  create!: InstanceType<typeof UsersCreateWithoutProfileInput>;
}

@InputType()
export class UsersCreateWithoutAdressesInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ProfileCreateNestedOneWithoutUserInput, { nullable: true })
  profile?: InstanceType<typeof ProfileCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UsersCreateWithoutProfileInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesCreateNestedManyWithoutUserInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UsersCreateInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ProfileCreateNestedOneWithoutUserInput, { nullable: true })
  profile?: InstanceType<typeof ProfileCreateNestedOneWithoutUserInput>;
  @Field(() => AdressesCreateNestedManyWithoutUserInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UsersGroupByArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithAggregationInput>;
  @Field(() => [UsersScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UsersScalarFieldEnum>;
  @Field(() => UsersScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UsersScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UsersCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregateInput>;
  @Field(() => UsersMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregateInput>;
  @Field(() => UsersMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregateInput>;
}

@ObjectType()
export class UsersGroupBy {
  @Field(() => String, { nullable: false })
  idUser!: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => UsersCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregate>;
  @Field(() => UsersMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregate>;
  @Field(() => UsersMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregate>;
}

@InputType()
export class UsersMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idUser?: true;
  @Field(() => Boolean, { nullable: true })
  firstName?: true;
  @Field(() => Boolean, { nullable: true })
  lastName?: true;
  @Field(() => Boolean, { nullable: true })
  userName?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class UsersMaxAggregate {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: true })
  userName?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UsersMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idUser?: true;
  @Field(() => Boolean, { nullable: true })
  firstName?: true;
  @Field(() => Boolean, { nullable: true })
  lastName?: true;
  @Field(() => Boolean, { nullable: true })
  userName?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class UsersMinAggregate {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: true })
  userName?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UsersMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  idUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UsersCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UsersCountOrderByAggregateInput>;
  @Field(() => UsersMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UsersMaxOrderByAggregateInput>;
  @Field(() => UsersMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UsersMinOrderByAggregateInput>;
}

@InputType()
export class UsersOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  idUser?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => ProfileOrderByWithRelationInput, { nullable: true })
  profile?: InstanceType<typeof ProfileOrderByWithRelationInput>;
  @Field(() => AdressesOrderByRelationAggregateInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesOrderByRelationAggregateInput>;
}

@InputType()
export class UsersRelationFilter {
  @Field(() => UsersWhereInput, { nullable: true })
  is?: InstanceType<typeof UsersWhereInput>;
  @Field(() => UsersWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UsersWhereInput>;
}

@InputType()
export class UsersScalarWhereWithAggregatesInput {
  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UsersScalarWhereWithAggregatesInput>;
  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UsersScalarWhereWithAggregatesInput>;
  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UsersScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  idUser?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  firstName?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  lastName?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UsersUncheckedCreateWithoutAdressesInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
  profile?: InstanceType<typeof ProfileUncheckedCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UsersUncheckedCreateWithoutProfileInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AdressesUncheckedCreateNestedManyWithoutUserInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UsersUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
  profile?: InstanceType<typeof ProfileUncheckedCreateNestedOneWithoutUserInput>;
  @Field(() => AdressesUncheckedCreateNestedManyWithoutUserInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UsersUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUncheckedUpdateWithoutAdressesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
  profile?: InstanceType<typeof ProfileUncheckedUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UsersUncheckedUpdateWithoutProfileInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UsersUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
  profile?: InstanceType<typeof ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  @Field(() => AdressesUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UsersUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUpdateOneWithoutAdressesNestedInput {
  @Field(() => UsersCreateWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateWithoutAdressesInput)
  create?: InstanceType<typeof UsersCreateWithoutAdressesInput>;
  @Field(() => UsersCreateOrConnectWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutAdressesInput)
  connectOrCreate?: InstanceType<typeof UsersCreateOrConnectWithoutAdressesInput>;
  @Field(() => UsersUpsertWithoutAdressesInput, { nullable: true })
  @Type(() => UsersUpsertWithoutAdressesInput)
  upsert?: InstanceType<typeof UsersUpsertWithoutAdressesInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersUpdateWithoutAdressesInput, { nullable: true })
  @Type(() => UsersUpdateWithoutAdressesInput)
  update?: InstanceType<typeof UsersUpdateWithoutAdressesInput>;
}

@InputType()
export class UsersUpdateOneWithoutProfileNestedInput {
  @Field(() => UsersCreateWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateWithoutProfileInput)
  create?: InstanceType<typeof UsersCreateWithoutProfileInput>;
  @Field(() => UsersCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<typeof UsersCreateOrConnectWithoutProfileInput>;
  @Field(() => UsersUpsertWithoutProfileInput, { nullable: true })
  @Type(() => UsersUpsertWithoutProfileInput)
  upsert?: InstanceType<typeof UsersUpsertWithoutProfileInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersUpdateWithoutProfileInput, { nullable: true })
  @Type(() => UsersUpdateWithoutProfileInput)
  update?: InstanceType<typeof UsersUpdateWithoutProfileInput>;
}

@InputType()
export class UsersUpdateWithoutAdressesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
  profile?: InstanceType<typeof ProfileUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UsersUpdateWithoutProfileInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AdressesUpdateManyWithoutUserNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UsersUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idUser?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
  profile?: InstanceType<typeof ProfileUpdateOneWithoutUserNestedInput>;
  @Field(() => AdressesUpdateManyWithoutUserNestedInput, { nullable: true })
  adresses?: InstanceType<typeof AdressesUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UsersUpsertWithoutAdressesInput {
  @Field(() => UsersUpdateWithoutAdressesInput, { nullable: false })
  @Type(() => UsersUpdateWithoutAdressesInput)
  update!: InstanceType<typeof UsersUpdateWithoutAdressesInput>;
  @Field(() => UsersCreateWithoutAdressesInput, { nullable: false })
  @Type(() => UsersCreateWithoutAdressesInput)
  create!: InstanceType<typeof UsersCreateWithoutAdressesInput>;
}

@InputType()
export class UsersUpsertWithoutProfileInput {
  @Field(() => UsersUpdateWithoutProfileInput, { nullable: false })
  @Type(() => UsersUpdateWithoutProfileInput)
  update!: InstanceType<typeof UsersUpdateWithoutProfileInput>;
  @Field(() => UsersCreateWithoutProfileInput, { nullable: false })
  @Type(() => UsersCreateWithoutProfileInput)
  create!: InstanceType<typeof UsersCreateWithoutProfileInput>;
}

@InputType()
export class UsersWhereUniqueInput {
  @Field(() => String, { nullable: true })
  idUser?: string;
}

@InputType()
export class UsersWhereInput {
  @Field(() => [UsersWhereInput], { nullable: true })
  AND?: Array<UsersWhereInput>;
  @Field(() => [UsersWhereInput], { nullable: true })
  OR?: Array<UsersWhereInput>;
  @Field(() => [UsersWhereInput], { nullable: true })
  NOT?: Array<UsersWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idUser?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  firstName?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  lastName?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  userName?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => ProfileRelationFilter, { nullable: true })
  profile?: InstanceType<typeof ProfileRelationFilter>;
  @Field(() => AdressesListRelationFilter, { nullable: true })
  adresses?: InstanceType<typeof AdressesListRelationFilter>;
}

@ObjectType()
export class Users {
  @Field(() => ID, { nullable: false })
  idUser!: string;
  @Field(() => String, { nullable: true })
  firstName!: string | null;
  @Field(() => String, { nullable: true })
  lastName!: string | null;
  @Field(() => String, { nullable: false })
  userName!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Profile, { nullable: true })
  profile?: InstanceType<typeof Profile> | null;
  @Field(() => [Adresses], { nullable: true })
  adresses?: Array<Adresses>;
  @Field(() => UsersCount, { nullable: false })
  _count?: InstanceType<typeof UsersCount>;
}
