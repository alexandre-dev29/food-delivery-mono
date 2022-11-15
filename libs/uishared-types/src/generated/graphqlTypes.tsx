import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  LoginResponse: any;
  Upload: any;
};

export type Adresses = {
  __typename?: 'Adresses';
  adressName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  elevation?: Maybe<Scalars['String']>;
  idAdresse: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  restaurant?: Maybe<Restaurants>;
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['String']>;
};

export type AdressesCountAggregate = {
  __typename?: 'AdressesCountAggregate';
  _all: Scalars['Int'];
  adressName: Scalars['Int'];
  createdAt: Scalars['Int'];
  elevation: Scalars['Int'];
  idAdresse: Scalars['Int'];
  latitude: Scalars['Int'];
  longitude: Scalars['Int'];
  restaurantId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AdressesCreateManyRestaurantInput = {
  adressName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  elevation?: InputMaybe<Scalars['String']>;
  idAdresse?: InputMaybe<Scalars['String']>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type AdressesCreateManyRestaurantInputEnvelope = {
  data: Array<AdressesCreateManyRestaurantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AdressesCreateManyUserInput = {
  adressName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  elevation?: InputMaybe<Scalars['String']>;
  idAdresse?: InputMaybe<Scalars['String']>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  restaurantId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AdressesCreateManyUserInputEnvelope = {
  data: Array<AdressesCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AdressesCreateNestedManyWithoutRestaurantInput = {
  connect?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdressesCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<AdressesCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<AdressesCreateManyRestaurantInputEnvelope>;
};

export type AdressesCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdressesCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AdressesCreateWithoutUserInput>>;
  createMany?: InputMaybe<AdressesCreateManyUserInputEnvelope>;
};

export type AdressesCreateOrConnectWithoutRestaurantInput = {
  create: AdressesCreateWithoutRestaurantInput;
  where: AdressesWhereUniqueInput;
};

export type AdressesCreateOrConnectWithoutUserInput = {
  create: AdressesCreateWithoutUserInput;
  where: AdressesWhereUniqueInput;
};

export type AdressesCreateWithoutRestaurantInput = {
  adressName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  elevation?: InputMaybe<Scalars['String']>;
  idAdresse?: InputMaybe<Scalars['String']>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UsersCreateNestedOneWithoutAdressesInput>;
};

export type AdressesCreateWithoutUserInput = {
  adressName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  elevation?: InputMaybe<Scalars['String']>;
  idAdresse?: InputMaybe<Scalars['String']>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  restaurant?: InputMaybe<RestaurantsCreateNestedOneWithoutAdressesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AdressesListRelationFilter = {
  every?: InputMaybe<AdressesWhereInput>;
  none?: InputMaybe<AdressesWhereInput>;
  some?: InputMaybe<AdressesWhereInput>;
};

export type AdressesMaxAggregate = {
  __typename?: 'AdressesMaxAggregate';
  adressName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  elevation?: Maybe<Scalars['String']>;
  idAdresse?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type AdressesMinAggregate = {
  __typename?: 'AdressesMinAggregate';
  adressName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  elevation?: Maybe<Scalars['String']>;
  idAdresse?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type AdressesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdressesScalarWhereInput = {
  AND?: InputMaybe<Array<AdressesScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdressesScalarWhereInput>>;
  OR?: InputMaybe<Array<AdressesScalarWhereInput>>;
  adressName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  elevation?: InputMaybe<StringNullableFilter>;
  idAdresse?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<StringFilter>;
  restaurantId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type AdressesUpdateManyMutationInput = {
  adressName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elevation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idAdresse?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdressesUpdateManyWithWhereWithoutRestaurantInput = {
  data: AdressesUpdateManyMutationInput;
  where: AdressesScalarWhereInput;
};

export type AdressesUpdateManyWithWhereWithoutUserInput = {
  data: AdressesUpdateManyMutationInput;
  where: AdressesScalarWhereInput;
};

export type AdressesUpdateManyWithoutRestaurantNestedInput = {
  connect?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdressesCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<AdressesCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<AdressesCreateManyRestaurantInputEnvelope>;
  delete?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdressesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  set?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  update?: InputMaybe<Array<AdressesUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: InputMaybe<Array<AdressesUpdateManyWithWhereWithoutRestaurantInput>>;
  upsert?: InputMaybe<Array<AdressesUpsertWithWhereUniqueWithoutRestaurantInput>>;
};

export type AdressesUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdressesCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AdressesCreateWithoutUserInput>>;
  createMany?: InputMaybe<AdressesCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdressesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  set?: InputMaybe<Array<AdressesWhereUniqueInput>>;
  update?: InputMaybe<Array<AdressesUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AdressesUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AdressesUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AdressesUpdateWithWhereUniqueWithoutRestaurantInput = {
  data: AdressesUpdateWithoutRestaurantInput;
  where: AdressesWhereUniqueInput;
};

export type AdressesUpdateWithWhereUniqueWithoutUserInput = {
  data: AdressesUpdateWithoutUserInput;
  where: AdressesWhereUniqueInput;
};

export type AdressesUpdateWithoutRestaurantInput = {
  adressName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elevation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idAdresse?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UsersUpdateOneWithoutAdressesNestedInput>;
};

export type AdressesUpdateWithoutUserInput = {
  adressName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elevation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idAdresse?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<StringFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantsUpdateOneWithoutAdressesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdressesUpsertWithWhereUniqueWithoutRestaurantInput = {
  create: AdressesCreateWithoutRestaurantInput;
  update: AdressesUpdateWithoutRestaurantInput;
  where: AdressesWhereUniqueInput;
};

export type AdressesUpsertWithWhereUniqueWithoutUserInput = {
  create: AdressesCreateWithoutUserInput;
  update: AdressesUpdateWithoutUserInput;
  where: AdressesWhereUniqueInput;
};

export type AdressesWhereInput = {
  AND?: InputMaybe<Array<AdressesWhereInput>>;
  NOT?: InputMaybe<Array<AdressesWhereInput>>;
  OR?: InputMaybe<Array<AdressesWhereInput>>;
  adressName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  elevation?: InputMaybe<StringNullableFilter>;
  idAdresse?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<StringFilter>;
  restaurant?: InputMaybe<RestaurantsRelationFilter>;
  restaurantId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UsersRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type AdressesWhereUniqueInput = {
  idAdresse?: InputMaybe<Scalars['String']>;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isPhoneConfirmed: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type AuthUserCountAggregate = {
  __typename?: 'AuthUserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isPhoneConfirmed: Scalars['Int'];
  phoneNumber: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  username: Scalars['Int'];
};

export type AuthUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPhoneConfirmed?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type AuthUserMaxAggregate = {
  __typename?: 'AuthUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isPhoneConfirmed?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type AuthUserMinAggregate = {
  __typename?: 'AuthUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isPhoneConfirmed?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type AuthUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPhoneConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AuthUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type CreateOneAuthUserArgs = {
  data: AuthUserCreateInput;
};

export type CreateOneProfileArgs = {
  data: ProfileCreateInput;
};

export type CreateOneUsersArgs = {
  data: UsersCreateInput;
};

export type CreateUserInput = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  username: Scalars['String'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DeleteOneRestauUsersArgs = {
  where: RestauUsersWhereUniqueInput;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type FileEntity = {
  __typename?: 'FileEntity';
  Profiles?: Maybe<Array<Profile>>;
  Restaurants?: Maybe<Array<Restaurants>>;
  _count: FileEntityCount;
  createdAt: Scalars['DateTime'];
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
  id: Scalars['ID'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FileEntityCount = {
  __typename?: 'FileEntityCount';
  Profiles: Scalars['Int'];
  Restaurants: Scalars['Int'];
};

export type FileEntityCountAggregate = {
  __typename?: 'FileEntityCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  fileName: Scalars['Int'];
  fileUrl: Scalars['Int'];
  id: Scalars['Int'];
  key: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FileEntityCreateNestedOneWithoutProfilesInput = {
  connect?: InputMaybe<FileEntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileEntityCreateOrConnectWithoutProfilesInput>;
  create?: InputMaybe<FileEntityCreateWithoutProfilesInput>;
};

export type FileEntityCreateNestedOneWithoutRestaurantsInput = {
  connect?: InputMaybe<FileEntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileEntityCreateOrConnectWithoutRestaurantsInput>;
  create?: InputMaybe<FileEntityCreateWithoutRestaurantsInput>;
};

export type FileEntityCreateOrConnectWithoutProfilesInput = {
  create: FileEntityCreateWithoutProfilesInput;
  where: FileEntityWhereUniqueInput;
};

export type FileEntityCreateOrConnectWithoutRestaurantsInput = {
  create: FileEntityCreateWithoutRestaurantsInput;
  where: FileEntityWhereUniqueInput;
};

export type FileEntityCreateWithoutProfilesInput = {
  Restaurants?: InputMaybe<RestaurantsCreateNestedManyWithoutRestauMainImageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileEntityCreateWithoutRestaurantsInput = {
  Profiles?: InputMaybe<ProfileCreateNestedManyWithoutProfilePictureInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileEntityMaxAggregate = {
  __typename?: 'FileEntityMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileEntityMinAggregate = {
  __typename?: 'FileEntityMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileEntityOrderByWithRelationInput = {
  Profiles?: InputMaybe<ProfileOrderByRelationAggregateInput>;
  Restaurants?: InputMaybe<RestaurantsOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  fileName?: InputMaybe<SortOrder>;
  fileUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileEntityRelationFilter = {
  is?: InputMaybe<FileEntityWhereInput>;
  isNot?: InputMaybe<FileEntityWhereInput>;
};

export type FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput = {
  connect?: InputMaybe<FileEntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileEntityCreateOrConnectWithoutRestaurantsInput>;
  create?: InputMaybe<FileEntityCreateWithoutRestaurantsInput>;
  update?: InputMaybe<FileEntityUpdateWithoutRestaurantsInput>;
  upsert?: InputMaybe<FileEntityUpsertWithoutRestaurantsInput>;
};

export type FileEntityUpdateOneWithoutProfilesNestedInput = {
  connect?: InputMaybe<FileEntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileEntityCreateOrConnectWithoutProfilesInput>;
  create?: InputMaybe<FileEntityCreateWithoutProfilesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FileEntityUpdateWithoutProfilesInput>;
  upsert?: InputMaybe<FileEntityUpsertWithoutProfilesInput>;
};

export type FileEntityUpdateWithoutProfilesInput = {
  Restaurants?: InputMaybe<RestaurantsUpdateManyWithoutRestauMainImageNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileName?: InputMaybe<StringFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileEntityUpdateWithoutRestaurantsInput = {
  Profiles?: InputMaybe<ProfileUpdateManyWithoutProfilePictureNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileName?: InputMaybe<StringFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileEntityUpsertWithoutProfilesInput = {
  create: FileEntityCreateWithoutProfilesInput;
  update: FileEntityUpdateWithoutProfilesInput;
};

export type FileEntityUpsertWithoutRestaurantsInput = {
  create: FileEntityCreateWithoutRestaurantsInput;
  update: FileEntityUpdateWithoutRestaurantsInput;
};

export type FileEntityWhereInput = {
  AND?: InputMaybe<Array<FileEntityWhereInput>>;
  NOT?: InputMaybe<Array<FileEntityWhereInput>>;
  OR?: InputMaybe<Array<FileEntityWhereInput>>;
  Profiles?: InputMaybe<ProfileListRelationFilter>;
  Restaurants?: InputMaybe<RestaurantsListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileName?: InputMaybe<StringFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FileEntityWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FindFirstRestauUsersArgs = {
  cursor?: InputMaybe<RestauUsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<RestauUsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RestauUsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RestauUsersWhereInput>;
};

export type FindManyRestauUsersArgs = {
  cursor?: InputMaybe<RestauUsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<RestauUsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RestauUsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RestauUsersWhereInput>;
};

export type ImagesSecondary = {
  __typename?: 'ImagesSecondary';
  Restaurants?: Maybe<Restaurants>;
  createdAt: Scalars['DateTime'];
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
  id: Scalars['ID'];
  key: Scalars['String'];
  restaurantsId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ImagesSecondaryCountAggregate = {
  __typename?: 'ImagesSecondaryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  fileName: Scalars['Int'];
  fileUrl: Scalars['Int'];
  id: Scalars['Int'];
  key: Scalars['Int'];
  restaurantsId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ImagesSecondaryCreateManyRestaurantsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ImagesSecondaryCreateManyRestaurantsInputEnvelope = {
  data: Array<ImagesSecondaryCreateManyRestaurantsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ImagesSecondaryCreateNestedManyWithoutRestaurantsInput = {
  connect?: InputMaybe<Array<ImagesSecondaryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImagesSecondaryCreateOrConnectWithoutRestaurantsInput>>;
  create?: InputMaybe<Array<ImagesSecondaryCreateWithoutRestaurantsInput>>;
  createMany?: InputMaybe<ImagesSecondaryCreateManyRestaurantsInputEnvelope>;
};

export type ImagesSecondaryCreateOrConnectWithoutRestaurantsInput = {
  create: ImagesSecondaryCreateWithoutRestaurantsInput;
  where: ImagesSecondaryWhereUniqueInput;
};

export type ImagesSecondaryCreateWithoutRestaurantsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ImagesSecondaryListRelationFilter = {
  every?: InputMaybe<ImagesSecondaryWhereInput>;
  none?: InputMaybe<ImagesSecondaryWhereInput>;
  some?: InputMaybe<ImagesSecondaryWhereInput>;
};

export type ImagesSecondaryMaxAggregate = {
  __typename?: 'ImagesSecondaryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  restaurantsId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImagesSecondaryMinAggregate = {
  __typename?: 'ImagesSecondaryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  restaurantsId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImagesSecondaryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ImagesSecondaryScalarWhereInput = {
  AND?: InputMaybe<Array<ImagesSecondaryScalarWhereInput>>;
  NOT?: InputMaybe<Array<ImagesSecondaryScalarWhereInput>>;
  OR?: InputMaybe<Array<ImagesSecondaryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileName?: InputMaybe<StringFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  restaurantsId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ImagesSecondaryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileName?: InputMaybe<StringFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput = {
  data: ImagesSecondaryUpdateManyMutationInput;
  where: ImagesSecondaryScalarWhereInput;
};

export type ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput = {
  connect?: InputMaybe<Array<ImagesSecondaryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImagesSecondaryCreateOrConnectWithoutRestaurantsInput>>;
  create?: InputMaybe<Array<ImagesSecondaryCreateWithoutRestaurantsInput>>;
  createMany?: InputMaybe<ImagesSecondaryCreateManyRestaurantsInputEnvelope>;
  delete?: InputMaybe<Array<ImagesSecondaryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ImagesSecondaryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ImagesSecondaryWhereUniqueInput>>;
  set?: InputMaybe<Array<ImagesSecondaryWhereUniqueInput>>;
  update?: InputMaybe<Array<ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput>>;
  updateMany?: InputMaybe<Array<ImagesSecondaryUpdateManyWithWhereWithoutRestaurantsInput>>;
  upsert?: InputMaybe<Array<ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput>>;
};

export type ImagesSecondaryUpdateWithWhereUniqueWithoutRestaurantsInput = {
  data: ImagesSecondaryUpdateWithoutRestaurantsInput;
  where: ImagesSecondaryWhereUniqueInput;
};

export type ImagesSecondaryUpdateWithoutRestaurantsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileName?: InputMaybe<StringFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ImagesSecondaryUpsertWithWhereUniqueWithoutRestaurantsInput = {
  create: ImagesSecondaryCreateWithoutRestaurantsInput;
  update: ImagesSecondaryUpdateWithoutRestaurantsInput;
  where: ImagesSecondaryWhereUniqueInput;
};

export type ImagesSecondaryWhereInput = {
  AND?: InputMaybe<Array<ImagesSecondaryWhereInput>>;
  NOT?: InputMaybe<Array<ImagesSecondaryWhereInput>>;
  OR?: InputMaybe<Array<ImagesSecondaryWhereInput>>;
  Restaurants?: InputMaybe<RestaurantsRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileName?: InputMaybe<StringFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  restaurantsId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ImagesSecondaryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  askingForOtpCode: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  changeRestauUserPassword: RestauUsers;
  confirmOtpForForgot: Scalars['Boolean'];
  confirmPhoneNumber: Scalars['Boolean'];
  createAuth: AuthUser;
  createProfile: Profile;
  createRestauUser: RestauUsers;
  createUser: Users;
  loginRestauUser: Scalars['LoginResponse'];
  loginUser: Scalars['LoginResponse'];
  refreshToken: Scalars['Boolean'];
  removeAuth: AuthUser;
  removeProfile: Profile;
  removeRestauUser: RestauUsers;
  removeUser: Users;
  signUp: AuthUser;
  startForgotPassword: Scalars['Boolean'];
  updateAuth: AuthUser;
  updatePhotoProfile: Scalars['Boolean'];
  updateProfile: Profile;
  updateRestauUser: RestauUsers;
  updateUser: Users;
};

export type MutationAskingForOtpCodeArgs = {
  phoneNumber: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationChangeRestauUserPasswordArgs = {
  newPassword: Scalars['String'];
  userName: Scalars['String'];
};

export type MutationConfirmOtpForForgotArgs = {
  otpCode: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationConfirmPhoneNumberArgs = {
  otpCode: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationCreateAuthArgs = {
  createAuthInput: CreateOneAuthUserArgs;
};

export type MutationCreateProfileArgs = {
  createProfileInput: CreateOneProfileArgs;
};

export type MutationCreateRestauUserArgs = {
  password: Scalars['String'];
  role: Role;
  userFullName: Scalars['String'];
  userName: Scalars['String'];
};

export type MutationCreateUserArgs = {
  createUserInput: CreateOneUsersArgs;
};

export type MutationLoginRestauUserArgs = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type MutationLoginUserArgs = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MutationRefreshTokenArgs = {
  oldRefreshToken: Scalars['String'];
};

export type MutationRemoveAuthArgs = {
  id: Scalars['String'];
};

export type MutationRemoveProfileArgs = {
  profileId: Scalars['String'];
};

export type MutationRemoveRestauUserArgs = {
  deleteArgs: DeleteOneRestauUsersArgs;
};

export type MutationRemoveUserArgs = {
  userId: Scalars['String'];
};

export type MutationSignUpArgs = {
  registerUserInputs: CreateUserInput;
};

export type MutationStartForgotPasswordArgs = {
  phoneNumber: Scalars['String'];
};

export type MutationUpdateAuthArgs = {
  updateAuthInput: UpdateOneAuthUserArgs;
};

export type MutationUpdatePhotoProfileArgs = {
  myFile: Scalars['Upload'];
};

export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateOneProfileArgs;
};

export type MutationUpdateRestauUserArgs = {
  updateRestauUserInput: UpdateOneRestauUsersArgs;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateOneUsersArgs;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  fileEntityId?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['DateTime']>;
  profileId: Scalars['ID'];
  profilePicture?: Maybe<FileEntity>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileCountAggregate = {
  __typename?: 'ProfileCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  createdAt: Scalars['Int'];
  dateOfBirth: Scalars['Int'];
  fileEntityId: Scalars['Int'];
  placeOfBirth: Scalars['Int'];
  profileId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProfileCreateInput = {
  bio: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  placeOfBirth?: InputMaybe<Scalars['DateTime']>;
  profileId?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<FileEntityCreateNestedOneWithoutProfilesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UsersCreateNestedOneWithoutProfileInput>;
};

export type ProfileCreateManyProfilePictureInput = {
  bio: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  placeOfBirth?: InputMaybe<Scalars['DateTime']>;
  profileId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type ProfileCreateManyProfilePictureInputEnvelope = {
  data: Array<ProfileCreateManyProfilePictureInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProfileCreateNestedManyWithoutProfilePictureInput = {
  connect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProfileCreateOrConnectWithoutProfilePictureInput>>;
  create?: InputMaybe<Array<ProfileCreateWithoutProfilePictureInput>>;
  createMany?: InputMaybe<ProfileCreateManyProfilePictureInputEnvelope>;
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutProfilePictureInput = {
  create: ProfileCreateWithoutProfilePictureInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutProfilePictureInput = {
  bio: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  placeOfBirth?: InputMaybe<Scalars['DateTime']>;
  profileId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UsersCreateNestedOneWithoutProfileInput>;
};

export type ProfileCreateWithoutUserInput = {
  bio: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  placeOfBirth?: InputMaybe<Scalars['DateTime']>;
  profileId?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<FileEntityCreateNestedOneWithoutProfilesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProfileListRelationFilter = {
  every?: InputMaybe<ProfileWhereInput>;
  none?: InputMaybe<ProfileWhereInput>;
  some?: InputMaybe<ProfileWhereInput>;
};

export type ProfileMaxAggregate = {
  __typename?: 'ProfileMaxAggregate';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  fileEntityId?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['DateTime']>;
  profileId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileMinAggregate = {
  __typename?: 'ProfileMinAggregate';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  fileEntityId?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['DateTime']>;
  profileId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProfileRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export type ProfileScalarWhereInput = {
  AND?: InputMaybe<Array<ProfileScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProfileScalarWhereInput>>;
  OR?: InputMaybe<Array<ProfileScalarWhereInput>>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  fileEntityId?: InputMaybe<StringNullableFilter>;
  placeOfBirth?: InputMaybe<DateTimeNullableFilter>;
  profileId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type ProfileUpdateInput = {
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  placeOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  profileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<FileEntityUpdateOneWithoutProfilesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UsersUpdateOneWithoutProfileNestedInput>;
};

export type ProfileUpdateManyMutationInput = {
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  placeOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  profileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProfileUpdateManyWithWhereWithoutProfilePictureInput = {
  data: ProfileUpdateManyMutationInput;
  where: ProfileScalarWhereInput;
};

export type ProfileUpdateManyWithoutProfilePictureNestedInput = {
  connect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProfileCreateOrConnectWithoutProfilePictureInput>>;
  create?: InputMaybe<Array<ProfileCreateWithoutProfilePictureInput>>;
  createMany?: InputMaybe<ProfileCreateManyProfilePictureInputEnvelope>;
  delete?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProfileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  set?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  update?: InputMaybe<Array<ProfileUpdateWithWhereUniqueWithoutProfilePictureInput>>;
  updateMany?: InputMaybe<Array<ProfileUpdateManyWithWhereWithoutProfilePictureInput>>;
  upsert?: InputMaybe<Array<ProfileUpsertWithWhereUniqueWithoutProfilePictureInput>>;
};

export type ProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProfileUpdateWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithWhereUniqueWithoutProfilePictureInput = {
  data: ProfileUpdateWithoutProfilePictureInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileUpdateWithoutProfilePictureInput = {
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  placeOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  profileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UsersUpdateOneWithoutProfileNestedInput>;
};

export type ProfileUpdateWithoutUserInput = {
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  placeOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  profileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<FileEntityUpdateOneWithoutProfilesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithWhereUniqueWithoutProfilePictureInput = {
  create: ProfileCreateWithoutProfilePictureInput;
  update: ProfileUpdateWithoutProfilePictureInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  fileEntityId?: InputMaybe<StringNullableFilter>;
  placeOfBirth?: InputMaybe<DateTimeNullableFilter>;
  profileId?: InputMaybe<StringFilter>;
  profilePicture?: InputMaybe<FileEntityRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UsersRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type ProfileWhereUniqueInput = {
  fileEntityId?: InputMaybe<Scalars['String']>;
  profileId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  FindAllRestauUsers: Array<RestauUsers>;
  FindOneRestauUser: RestauUsers;
  getAllAuths: Array<AuthUser>;
  getOneAuth: AuthUser;
  profile: Profile;
  profiles: Array<Profile>;
  user: Users;
  users: Array<Users>;
};

export type QueryFindAllRestauUsersArgs = {
  findAllArgs: FindManyRestauUsersArgs;
};

export type QueryFindOneRestauUserArgs = {
  findOneArgs: FindFirstRestauUsersArgs;
};

export type QueryGetOneAuthArgs = {
  id: Scalars['String'];
};

export type QueryProfileArgs = {
  profileId: Scalars['String'];
};

export type QueryUserArgs = {
  userId: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RestauUsers = {
  __typename?: 'RestauUsers';
  createdAt: Scalars['DateTime'];
  idRestauUser: Scalars['ID'];
  restauId: Scalars['String'];
  restaurant: Restaurants;
  role: Role;
  updatedAt: Scalars['DateTime'];
  userFullName: Scalars['String'];
  userName: Scalars['String'];
};

export type RestauUsersCountAggregate = {
  __typename?: 'RestauUsersCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  idRestauUser: Scalars['Int'];
  restauId: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userFullName: Scalars['Int'];
  userName: Scalars['Int'];
};

export type RestauUsersCreateManyRestaurantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  idRestauUser?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userFullName: Scalars['String'];
  userName: Scalars['String'];
};

export type RestauUsersCreateManyRestaurantInputEnvelope = {
  data: Array<RestauUsersCreateManyRestaurantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RestauUsersCreateNestedManyWithoutRestaurantInput = {
  connect?: InputMaybe<Array<RestauUsersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RestauUsersCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<RestauUsersCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<RestauUsersCreateManyRestaurantInputEnvelope>;
};

export type RestauUsersCreateOrConnectWithoutRestaurantInput = {
  create: RestauUsersCreateWithoutRestaurantInput;
  where: RestauUsersWhereUniqueInput;
};

export type RestauUsersCreateWithoutRestaurantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  idRestauUser?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userFullName: Scalars['String'];
  userName: Scalars['String'];
};

export type RestauUsersListRelationFilter = {
  every?: InputMaybe<RestauUsersWhereInput>;
  none?: InputMaybe<RestauUsersWhereInput>;
  some?: InputMaybe<RestauUsersWhereInput>;
};

export type RestauUsersMaxAggregate = {
  __typename?: 'RestauUsersMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  idRestauUser?: Maybe<Scalars['String']>;
  restauId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userFullName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type RestauUsersMinAggregate = {
  __typename?: 'RestauUsersMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  idRestauUser?: Maybe<Scalars['String']>;
  restauId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userFullName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type RestauUsersOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RestauUsersOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  idRestauUser?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  restauId?: InputMaybe<SortOrder>;
  restaurant?: InputMaybe<RestaurantsOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userFullName?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export enum RestauUsersScalarFieldEnum {
  CreatedAt = 'createdAt',
  IdRestauUser = 'idRestauUser',
  Password = 'password',
  RefreshToken = 'refreshToken',
  RestauId = 'restauId',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  UserFullName = 'userFullName',
  UserName = 'userName',
}

export type RestauUsersScalarWhereInput = {
  AND?: InputMaybe<Array<RestauUsersScalarWhereInput>>;
  NOT?: InputMaybe<Array<RestauUsersScalarWhereInput>>;
  OR?: InputMaybe<Array<RestauUsersScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  idRestauUser?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  restauId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userFullName?: InputMaybe<StringFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type RestauUsersUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  idRestauUser?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantsUpdateOneRequiredWithoutUsersNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RestauUsersUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  idRestauUser?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RestauUsersUpdateManyWithWhereWithoutRestaurantInput = {
  data: RestauUsersUpdateManyMutationInput;
  where: RestauUsersScalarWhereInput;
};

export type RestauUsersUpdateManyWithoutRestaurantNestedInput = {
  connect?: InputMaybe<Array<RestauUsersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RestauUsersCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<RestauUsersCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<RestauUsersCreateManyRestaurantInputEnvelope>;
  delete?: InputMaybe<Array<RestauUsersWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RestauUsersScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RestauUsersWhereUniqueInput>>;
  set?: InputMaybe<Array<RestauUsersWhereUniqueInput>>;
  update?: InputMaybe<Array<RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: InputMaybe<Array<RestauUsersUpdateManyWithWhereWithoutRestaurantInput>>;
  upsert?: InputMaybe<Array<RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput>>;
};

export type RestauUsersUpdateWithWhereUniqueWithoutRestaurantInput = {
  data: RestauUsersUpdateWithoutRestaurantInput;
  where: RestauUsersWhereUniqueInput;
};

export type RestauUsersUpdateWithoutRestaurantInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  idRestauUser?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userFullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RestauUsersUpsertWithWhereUniqueWithoutRestaurantInput = {
  create: RestauUsersCreateWithoutRestaurantInput;
  update: RestauUsersUpdateWithoutRestaurantInput;
  where: RestauUsersWhereUniqueInput;
};

export type RestauUsersWhereInput = {
  AND?: InputMaybe<Array<RestauUsersWhereInput>>;
  NOT?: InputMaybe<Array<RestauUsersWhereInput>>;
  OR?: InputMaybe<Array<RestauUsersWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  idRestauUser?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  restauId?: InputMaybe<StringFilter>;
  restaurant?: InputMaybe<RestaurantsRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userFullName?: InputMaybe<StringFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type RestauUsersWhereUniqueInput = {
  idRestauUser?: InputMaybe<Scalars['String']>;
};

export type Restaurants = {
  __typename?: 'Restaurants';
  _count: RestaurantsCount;
  adresses?: Maybe<Array<Adresses>>;
  createdAt: Scalars['DateTime'];
  creationDate: Scalars['DateTime'];
  fileEntityId: Scalars['String'];
  idRestaurant: Scalars['ID'];
  otherImages?: Maybe<Array<ImagesSecondary>>;
  restauDescription: Scalars['String'];
  restauMainImage: FileEntity;
  restauName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<RestauUsers>>;
};

export type RestaurantsCount = {
  __typename?: 'RestaurantsCount';
  adresses: Scalars['Int'];
  otherImages: Scalars['Int'];
  users: Scalars['Int'];
};

export type RestaurantsCountAggregate = {
  __typename?: 'RestaurantsCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  creationDate: Scalars['Int'];
  fileEntityId: Scalars['Int'];
  idRestaurant: Scalars['Int'];
  restauDescription: Scalars['Int'];
  restauName: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type RestaurantsCreateManyRestauMainImageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creationDate?: InputMaybe<Scalars['DateTime']>;
  idRestaurant?: InputMaybe<Scalars['String']>;
  restauDescription: Scalars['String'];
  restauName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RestaurantsCreateManyRestauMainImageInputEnvelope = {
  data: Array<RestaurantsCreateManyRestauMainImageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RestaurantsCreateNestedManyWithoutRestauMainImageInput = {
  connect?: InputMaybe<Array<RestaurantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RestaurantsCreateOrConnectWithoutRestauMainImageInput>>;
  create?: InputMaybe<Array<RestaurantsCreateWithoutRestauMainImageInput>>;
  createMany?: InputMaybe<RestaurantsCreateManyRestauMainImageInputEnvelope>;
};

export type RestaurantsCreateNestedOneWithoutAdressesInput = {
  connect?: InputMaybe<RestaurantsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantsCreateOrConnectWithoutAdressesInput>;
  create?: InputMaybe<RestaurantsCreateWithoutAdressesInput>;
};

export type RestaurantsCreateOrConnectWithoutAdressesInput = {
  create: RestaurantsCreateWithoutAdressesInput;
  where: RestaurantsWhereUniqueInput;
};

export type RestaurantsCreateOrConnectWithoutRestauMainImageInput = {
  create: RestaurantsCreateWithoutRestauMainImageInput;
  where: RestaurantsWhereUniqueInput;
};

export type RestaurantsCreateOrConnectWithoutUsersInput = {
  create: RestaurantsCreateWithoutUsersInput;
  where: RestaurantsWhereUniqueInput;
};

export type RestaurantsCreateWithoutAdressesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creationDate?: InputMaybe<Scalars['DateTime']>;
  idRestaurant?: InputMaybe<Scalars['String']>;
  otherImages?: InputMaybe<ImagesSecondaryCreateNestedManyWithoutRestaurantsInput>;
  restauDescription: Scalars['String'];
  restauMainImage: FileEntityCreateNestedOneWithoutRestaurantsInput;
  restauName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<RestauUsersCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantsCreateWithoutRestauMainImageInput = {
  adresses?: InputMaybe<AdressesCreateNestedManyWithoutRestaurantInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creationDate?: InputMaybe<Scalars['DateTime']>;
  idRestaurant?: InputMaybe<Scalars['String']>;
  otherImages?: InputMaybe<ImagesSecondaryCreateNestedManyWithoutRestaurantsInput>;
  restauDescription: Scalars['String'];
  restauName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<RestauUsersCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantsCreateWithoutUsersInput = {
  adresses?: InputMaybe<AdressesCreateNestedManyWithoutRestaurantInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creationDate?: InputMaybe<Scalars['DateTime']>;
  idRestaurant?: InputMaybe<Scalars['String']>;
  otherImages?: InputMaybe<ImagesSecondaryCreateNestedManyWithoutRestaurantsInput>;
  restauDescription: Scalars['String'];
  restauMainImage: FileEntityCreateNestedOneWithoutRestaurantsInput;
  restauName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RestaurantsListRelationFilter = {
  every?: InputMaybe<RestaurantsWhereInput>;
  none?: InputMaybe<RestaurantsWhereInput>;
  some?: InputMaybe<RestaurantsWhereInput>;
};

export type RestaurantsMaxAggregate = {
  __typename?: 'RestaurantsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creationDate?: Maybe<Scalars['DateTime']>;
  fileEntityId?: Maybe<Scalars['String']>;
  idRestaurant?: Maybe<Scalars['String']>;
  restauDescription?: Maybe<Scalars['String']>;
  restauName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RestaurantsMinAggregate = {
  __typename?: 'RestaurantsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creationDate?: Maybe<Scalars['DateTime']>;
  fileEntityId?: Maybe<Scalars['String']>;
  idRestaurant?: Maybe<Scalars['String']>;
  restauDescription?: Maybe<Scalars['String']>;
  restauName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RestaurantsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RestaurantsOrderByWithRelationInput = {
  adresses?: InputMaybe<AdressesOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  creationDate?: InputMaybe<SortOrder>;
  fileEntityId?: InputMaybe<SortOrder>;
  idRestaurant?: InputMaybe<SortOrder>;
  otherImages?: InputMaybe<ImagesSecondaryOrderByRelationAggregateInput>;
  restauDescription?: InputMaybe<SortOrder>;
  restauMainImage?: InputMaybe<FileEntityOrderByWithRelationInput>;
  restauName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<RestauUsersOrderByRelationAggregateInput>;
};

export type RestaurantsRelationFilter = {
  is?: InputMaybe<RestaurantsWhereInput>;
  isNot?: InputMaybe<RestaurantsWhereInput>;
};

export type RestaurantsScalarWhereInput = {
  AND?: InputMaybe<Array<RestaurantsScalarWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantsScalarWhereInput>>;
  OR?: InputMaybe<Array<RestaurantsScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creationDate?: InputMaybe<DateTimeFilter>;
  fileEntityId?: InputMaybe<StringFilter>;
  idRestaurant?: InputMaybe<StringFilter>;
  restauDescription?: InputMaybe<StringFilter>;
  restauName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RestaurantsUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creationDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  idRestaurant?: InputMaybe<StringFieldUpdateOperationsInput>;
  restauDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  restauName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput = {
  data: RestaurantsUpdateManyMutationInput;
  where: RestaurantsScalarWhereInput;
};

export type RestaurantsUpdateManyWithoutRestauMainImageNestedInput = {
  connect?: InputMaybe<Array<RestaurantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RestaurantsCreateOrConnectWithoutRestauMainImageInput>>;
  create?: InputMaybe<Array<RestaurantsCreateWithoutRestauMainImageInput>>;
  createMany?: InputMaybe<RestaurantsCreateManyRestauMainImageInputEnvelope>;
  delete?: InputMaybe<Array<RestaurantsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RestaurantsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RestaurantsWhereUniqueInput>>;
  set?: InputMaybe<Array<RestaurantsWhereUniqueInput>>;
  update?: InputMaybe<Array<RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput>>;
  updateMany?: InputMaybe<Array<RestaurantsUpdateManyWithWhereWithoutRestauMainImageInput>>;
  upsert?: InputMaybe<Array<RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput>>;
};

export type RestaurantsUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<RestaurantsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantsCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RestaurantsCreateWithoutUsersInput>;
  update?: InputMaybe<RestaurantsUpdateWithoutUsersInput>;
  upsert?: InputMaybe<RestaurantsUpsertWithoutUsersInput>;
};

export type RestaurantsUpdateOneWithoutAdressesNestedInput = {
  connect?: InputMaybe<RestaurantsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantsCreateOrConnectWithoutAdressesInput>;
  create?: InputMaybe<RestaurantsCreateWithoutAdressesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<RestaurantsUpdateWithoutAdressesInput>;
  upsert?: InputMaybe<RestaurantsUpsertWithoutAdressesInput>;
};

export type RestaurantsUpdateWithWhereUniqueWithoutRestauMainImageInput = {
  data: RestaurantsUpdateWithoutRestauMainImageInput;
  where: RestaurantsWhereUniqueInput;
};

export type RestaurantsUpdateWithoutAdressesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creationDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  idRestaurant?: InputMaybe<StringFieldUpdateOperationsInput>;
  otherImages?: InputMaybe<ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput>;
  restauDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  restauMainImage?: InputMaybe<FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput>;
  restauName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<RestauUsersUpdateManyWithoutRestaurantNestedInput>;
};

export type RestaurantsUpdateWithoutRestauMainImageInput = {
  adresses?: InputMaybe<AdressesUpdateManyWithoutRestaurantNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creationDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  idRestaurant?: InputMaybe<StringFieldUpdateOperationsInput>;
  otherImages?: InputMaybe<ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput>;
  restauDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  restauName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<RestauUsersUpdateManyWithoutRestaurantNestedInput>;
};

export type RestaurantsUpdateWithoutUsersInput = {
  adresses?: InputMaybe<AdressesUpdateManyWithoutRestaurantNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creationDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  idRestaurant?: InputMaybe<StringFieldUpdateOperationsInput>;
  otherImages?: InputMaybe<ImagesSecondaryUpdateManyWithoutRestaurantsNestedInput>;
  restauDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  restauMainImage?: InputMaybe<FileEntityUpdateOneRequiredWithoutRestaurantsNestedInput>;
  restauName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RestaurantsUpsertWithWhereUniqueWithoutRestauMainImageInput = {
  create: RestaurantsCreateWithoutRestauMainImageInput;
  update: RestaurantsUpdateWithoutRestauMainImageInput;
  where: RestaurantsWhereUniqueInput;
};

export type RestaurantsUpsertWithoutAdressesInput = {
  create: RestaurantsCreateWithoutAdressesInput;
  update: RestaurantsUpdateWithoutAdressesInput;
};

export type RestaurantsUpsertWithoutUsersInput = {
  create: RestaurantsCreateWithoutUsersInput;
  update: RestaurantsUpdateWithoutUsersInput;
};

export type RestaurantsWhereInput = {
  AND?: InputMaybe<Array<RestaurantsWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantsWhereInput>>;
  OR?: InputMaybe<Array<RestaurantsWhereInput>>;
  adresses?: InputMaybe<AdressesListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creationDate?: InputMaybe<DateTimeFilter>;
  fileEntityId?: InputMaybe<StringFilter>;
  idRestaurant?: InputMaybe<StringFilter>;
  otherImages?: InputMaybe<ImagesSecondaryListRelationFilter>;
  restauDescription?: InputMaybe<StringFilter>;
  restauMainImage?: InputMaybe<FileEntityRelationFilter>;
  restauName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<RestauUsersListRelationFilter>;
};

export type RestaurantsWhereUniqueInput = {
  idRestaurant?: InputMaybe<Scalars['String']>;
};

export enum Role {
  RestaurantAdmin = 'RestaurantAdmin',
  RestaurantUser = 'RestaurantUser',
  SuperAdmin = 'SuperAdmin',
  User = 'User',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UpdateOneAuthUserArgs = {
  data: AuthUserUpdateInput;
  where: AuthUserWhereUniqueInput;
};

export type UpdateOneProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};

export type UpdateOneRestauUsersArgs = {
  data: RestauUsersUpdateInput;
  where: RestauUsersWhereUniqueInput;
};

export type UpdateOneUsersArgs = {
  data: UsersUpdateInput;
  where: UsersWhereUniqueInput;
};

export type Users = {
  __typename?: 'Users';
  _count: UsersCount;
  adresses?: Maybe<Array<Adresses>>;
  createdAt: Scalars['DateTime'];
  firstName?: Maybe<Scalars['String']>;
  idUser: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  updatedAt: Scalars['DateTime'];
  userName: Scalars['String'];
};

export type UsersCount = {
  __typename?: 'UsersCount';
  adresses: Scalars['Int'];
};

export type UsersCountAggregate = {
  __typename?: 'UsersCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  idUser: Scalars['Int'];
  lastName: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userName: Scalars['Int'];
};

export type UsersCreateInput = {
  adresses?: InputMaybe<AdressesCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  idUser?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userName: Scalars['String'];
};

export type UsersCreateNestedOneWithoutAdressesInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutAdressesInput>;
  create?: InputMaybe<UsersCreateWithoutAdressesInput>;
};

export type UsersCreateNestedOneWithoutProfileInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UsersCreateWithoutProfileInput>;
};

export type UsersCreateOrConnectWithoutAdressesInput = {
  create: UsersCreateWithoutAdressesInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutProfileInput = {
  create: UsersCreateWithoutProfileInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateWithoutAdressesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  idUser?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userName: Scalars['String'];
};

export type UsersCreateWithoutProfileInput = {
  adresses?: InputMaybe<AdressesCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  idUser?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userName: Scalars['String'];
};

export type UsersMaxAggregate = {
  __typename?: 'UsersMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  idUser?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
};

export type UsersMinAggregate = {
  __typename?: 'UsersMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  idUser?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
};

export type UsersRelationFilter = {
  is?: InputMaybe<UsersWhereInput>;
  isNot?: InputMaybe<UsersWhereInput>;
};

export type UsersUpdateInput = {
  adresses?: InputMaybe<AdressesUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idUser?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpdateOneWithoutAdressesNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutAdressesInput>;
  create?: InputMaybe<UsersCreateWithoutAdressesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UsersUpdateWithoutAdressesInput>;
  upsert?: InputMaybe<UsersUpsertWithoutAdressesInput>;
};

export type UsersUpdateOneWithoutProfileNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UsersCreateWithoutProfileInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UsersUpdateWithoutProfileInput>;
  upsert?: InputMaybe<UsersUpsertWithoutProfileInput>;
};

export type UsersUpdateWithoutAdressesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idUser?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpdateWithoutProfileInput = {
  adresses?: InputMaybe<AdressesUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idUser?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpsertWithoutAdressesInput = {
  create: UsersCreateWithoutAdressesInput;
  update: UsersUpdateWithoutAdressesInput;
};

export type UsersUpsertWithoutProfileInput = {
  create: UsersCreateWithoutProfileInput;
  update: UsersUpdateWithoutProfileInput;
};

export type UsersWhereInput = {
  AND?: InputMaybe<Array<UsersWhereInput>>;
  NOT?: InputMaybe<Array<UsersWhereInput>>;
  OR?: InputMaybe<Array<UsersWhereInput>>;
  adresses?: InputMaybe<AdressesListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  idUser?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type UsersWhereUniqueInput = {
  idUser?: InputMaybe<Scalars['String']>;
};

export type LoginRestaurantUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginRestaurantUserMutation = { __typename?: 'Mutation'; loginRestauUser: any };

export type CreateRestaurantUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  userFullName: Scalars['String'];
  userRole: Role;
}>;

export type CreateRestaurantUserMutation = {
  __typename?: 'Mutation';
  createRestauUser: {
    __typename?: 'RestauUsers';
    idRestauUser: string;
    userFullName: string;
    userName: string;
    restaurant: {
      __typename?: 'Restaurants';
      idRestaurant: string;
      restauName: string;
      restauDescription: string;
      createdAt: any;
      updatedAt: any;
    };
  };
};

export type RestaurantUserFragmentFragment = {
  __typename?: 'RestauUsers';
  idRestauUser: string;
  userName: string;
  userFullName: string;
  role: Role;
  createdAt: any;
  updatedAt: any;
  restauId: string;
  restaurant: {
    __typename?: 'Restaurants';
    idRestaurant: string;
    restauName: string;
    restauDescription: string;
    createdAt: any;
    updatedAt: any;
  };
};

export type LoginUserMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginUserMutation = { __typename?: 'Mutation'; loginUser: any };

export type RegisterUserMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;

export type RegisterUserMutation = {
  __typename?: 'Mutation';
  signUp: { __typename?: 'AuthUser'; id: string; phoneNumber: string; isPhoneConfirmed: boolean; role: Role };
};

export type RestaurantFragmentFragment = {
  __typename?: 'Restaurants';
  idRestaurant: string;
  restauName: string;
  restauDescription: string;
  createdAt: any;
  updatedAt: any;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  users: Array<{ __typename?: 'Users'; firstName?: string | null; lastName?: string | null; updatedAt: any }>;
};

export const RestaurantFragmentFragmentDoc = gql`
  fragment RestaurantFragment on Restaurants {
    idRestaurant
    restauName
    restauDescription
    createdAt
    updatedAt
  }
`;
export const RestaurantUserFragmentFragmentDoc = gql`
  fragment RestaurantUserFragment on RestauUsers {
    idRestauUser
    userName
    userFullName
    role
    createdAt
    updatedAt
    restauId
    restaurant {
      ...RestaurantFragment
    }
  }
  ${RestaurantFragmentFragmentDoc}
`;
export const LoginRestaurantUserDocument = gql`
  mutation LoginRestaurantUser($username: String!, $password: String!) {
    loginRestauUser(userName: $username, password: $password)
  }
`;
export type LoginRestaurantUserMutationFn = Apollo.MutationFunction<
  LoginRestaurantUserMutation,
  LoginRestaurantUserMutationVariables
>;

/**
 * __useLoginRestaurantUserMutation__
 *
 * To run a mutation, you first call `useLoginRestaurantUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginRestaurantUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginRestaurantUserMutation, { data, loading, error }] = useLoginRestaurantUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginRestaurantUserMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginRestaurantUserMutation, LoginRestaurantUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginRestaurantUserMutation, LoginRestaurantUserMutationVariables>(
    LoginRestaurantUserDocument,
    options
  );
}

export type LoginRestaurantUserMutationHookResult = ReturnType<typeof useLoginRestaurantUserMutation>;
export type LoginRestaurantUserMutationResult = Apollo.MutationResult<LoginRestaurantUserMutation>;
export type LoginRestaurantUserMutationOptions = Apollo.BaseMutationOptions<
  LoginRestaurantUserMutation,
  LoginRestaurantUserMutationVariables
>;
export const CreateRestaurantUserDocument = gql`
  mutation CreateRestaurantUser($username: String!, $password: String!, $userFullName: String!, $userRole: Role!) {
    createRestauUser(userName: $username, password: $password, userFullName: $userFullName, role: $userRole) {
      idRestauUser
      userFullName
      userName
      restaurant {
        ...RestaurantFragment
      }
    }
  }
  ${RestaurantFragmentFragmentDoc}
`;
export type CreateRestaurantUserMutationFn = Apollo.MutationFunction<
  CreateRestaurantUserMutation,
  CreateRestaurantUserMutationVariables
>;

/**
 * __useCreateRestaurantUserMutation__
 *
 * To run a mutation, you first call `useCreateRestaurantUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRestaurantUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRestaurantUserMutation, { data, loading, error }] = useCreateRestaurantUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      userFullName: // value for 'userFullName'
 *      userRole: // value for 'userRole'
 *   },
 * });
 */
export function useCreateRestaurantUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateRestaurantUserMutation, CreateRestaurantUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateRestaurantUserMutation, CreateRestaurantUserMutationVariables>(
    CreateRestaurantUserDocument,
    options
  );
}

export type CreateRestaurantUserMutationHookResult = ReturnType<typeof useCreateRestaurantUserMutation>;
export type CreateRestaurantUserMutationResult = Apollo.MutationResult<CreateRestaurantUserMutation>;
export type CreateRestaurantUserMutationOptions = Apollo.BaseMutationOptions<
  CreateRestaurantUserMutation,
  CreateRestaurantUserMutationVariables
>;
export const LoginUserDocument = gql`
  mutation LoginUser($phoneNumber: String!, $password: String!) {
    loginUser(phoneNumber: $phoneNumber, password: $password)
  }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
}

export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = gql`
  mutation RegisterUser($phoneNumber: String!, $password: String!, $username: String!) {
    signUp(registerUserInputs: { username: $username, password: $password, phoneNumber: $phoneNumber }) {
      id
      phoneNumber
      isPhoneConfirmed
      role
    }
  }
`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterUserMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
}

export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    users {
      firstName
      lastName
      updatedAt
    }
  }
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}

export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}

export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
