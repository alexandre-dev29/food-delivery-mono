import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
  idUser = 'idUser',
  firstName = 'firstName',
  lastName = 'lastName',
  userName = 'userName',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  profileId = 'profileId',
}

export enum UserAdressesScalarFieldEnum {
  idAdresse = 'idAdresse',
  userId = 'userId',
  adressName = 'adressName',
  longitude = 'longitude',
  latitude = 'latitude',
  elevation = 'elevation',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum RoleScalarFieldEnum {
  roleId = 'roleId',
  userRole = 'userRole',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum ProfileScalarFieldEnum {
  profileId = 'profileId',
  bio = 'bio',
  dateOfBirth = 'dateOfBirth',
  placeOfBirth = 'placeOfBirth',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
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

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum FileEntityScalarFieldEnum {
  id = 'id',
  fileName = 'fileName',
  fileUrl = 'fileUrl',
  key = 'key',
  profileId = 'profileId',
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
  roleRoleId = 'roleRoleId',
  isPhoneConfirmed = 'isPhoneConfirmed',
}

registerEnumType(AuthUserScalarFieldEnum, {
  name: 'AuthUserScalarFieldEnum',
  description: undefined,
});
registerEnumType(FileEntityScalarFieldEnum, {
  name: 'FileEntityScalarFieldEnum',
  description: undefined,
});
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(ProfileScalarFieldEnum, {
  name: 'ProfileScalarFieldEnum',
  description: undefined,
});
registerEnumType(RoleScalarFieldEnum, {
  name: 'RoleScalarFieldEnum',
  description: undefined,
});
registerEnumType(UserAdressesScalarFieldEnum, {
  name: 'UserAdressesScalarFieldEnum',
  description: undefined,
});
registerEnumType(UsersScalarFieldEnum, {
  name: 'UsersScalarFieldEnum',
  description: undefined,
});

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
  @Field(() => Boolean, { nullable: true })
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  roleRoleId?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
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
  @Field(() => Int, { nullable: false })
  refreshToken!: number;
  @Field(() => Int, { nullable: false })
  phoneNumber!: number;
  @Field(() => Int, { nullable: false })
  password!: number;
  @Field(() => Int, { nullable: false })
  username!: number;
  @Field(() => Int, { nullable: false })
  roleRoleId!: number;
  @Field(() => Int, { nullable: false })
  isPhoneConfirmed!: number;
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
  @Field(() => SortOrder, { nullable: true })
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  roleRoleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
}

@InputType()
export class AuthUserCreateManyRoleInputEnvelope {
  @Field(() => [AuthUserCreateManyRoleInput], { nullable: false })
  @Type(() => AuthUserCreateManyRoleInput)
  data!: Array<AuthUserCreateManyRoleInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AuthUserCreateManyRoleInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
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
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: true })
  roleRoleId?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
}

@InputType()
export class AuthUserCreateNestedManyWithoutRoleInput {
  @Field(() => [AuthUserCreateWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateWithoutRoleInput)
  create?: Array<AuthUserCreateWithoutRoleInput>;
  @Field(() => [AuthUserCreateOrConnectWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateOrConnectWithoutRoleInput)
  connectOrCreate?: Array<AuthUserCreateOrConnectWithoutRoleInput>;
  @Field(() => AuthUserCreateManyRoleInputEnvelope, { nullable: true })
  @Type(() => AuthUserCreateManyRoleInputEnvelope)
  createMany?: InstanceType<typeof AuthUserCreateManyRoleInputEnvelope>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  connect?: Array<AuthUserWhereUniqueInput>;
}

@InputType()
export class AuthUserCreateOrConnectWithoutRoleInput {
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => AuthUserCreateWithoutRoleInput, { nullable: false })
  @Type(() => AuthUserCreateWithoutRoleInput)
  create!: InstanceType<typeof AuthUserCreateWithoutRoleInput>;
}

@InputType()
export class AuthUserCreateWithoutRoleInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
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
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => RoleCreateNestedOneWithoutAuthUserInput, { nullable: true })
  Role?: InstanceType<typeof RoleCreateNestedOneWithoutAuthUserInput>;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
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
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: true })
  roleRoleId?: string;
  @Field(() => Boolean, { nullable: false })
  isPhoneConfirmed!: boolean;
  @Field(() => AuthUserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AuthUserCountAggregate>;
  @Field(() => AuthUserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AuthUserMinAggregate>;
  @Field(() => AuthUserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AuthUserMaxAggregate>;
}

@InputType()
export class AuthUserListRelationFilter {
  @Field(() => AuthUserWhereInput, { nullable: true })
  every?: InstanceType<typeof AuthUserWhereInput>;
  @Field(() => AuthUserWhereInput, { nullable: true })
  some?: InstanceType<typeof AuthUserWhereInput>;
  @Field(() => AuthUserWhereInput, { nullable: true })
  none?: InstanceType<typeof AuthUserWhereInput>;
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
  @Field(() => Boolean, { nullable: true })
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  roleRoleId?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
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
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => String, { nullable: true })
  roleRoleId?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
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
  @Field(() => SortOrder, { nullable: true })
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  roleRoleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
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
  @Field(() => Boolean, { nullable: true })
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  roleRoleId?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
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
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => String, { nullable: true })
  roleRoleId?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
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
  @Field(() => SortOrder, { nullable: true })
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  roleRoleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
}

@InputType()
export class AuthUserOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
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
  @Field(() => SortOrder, { nullable: true })
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  roleRoleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
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
  @Field(() => SortOrder, { nullable: true })
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => RoleOrderByWithRelationInput, { nullable: true })
  Role?: InstanceType<typeof RoleOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  roleRoleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
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
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  refreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  username?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  roleRoleId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolWithAggregatesFilter>;
}

@InputType()
export class AuthUserScalarWhereInput {
  @Field(() => [AuthUserScalarWhereInput], { nullable: true })
  AND?: Array<AuthUserScalarWhereInput>;
  @Field(() => [AuthUserScalarWhereInput], { nullable: true })
  OR?: Array<AuthUserScalarWhereInput>;
  @Field(() => [AuthUserScalarWhereInput], { nullable: true })
  NOT?: Array<AuthUserScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  refreshToken?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  username?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  roleRoleId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => BoolFilter, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class AuthUserUncheckedCreateNestedManyWithoutRoleInput {
  @Field(() => [AuthUserCreateWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateWithoutRoleInput)
  create?: Array<AuthUserCreateWithoutRoleInput>;
  @Field(() => [AuthUserCreateOrConnectWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateOrConnectWithoutRoleInput)
  connectOrCreate?: Array<AuthUserCreateOrConnectWithoutRoleInput>;
  @Field(() => AuthUserCreateManyRoleInputEnvelope, { nullable: true })
  @Type(() => AuthUserCreateManyRoleInputEnvelope)
  createMany?: InstanceType<typeof AuthUserCreateManyRoleInputEnvelope>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  connect?: Array<AuthUserWhereUniqueInput>;
}

@InputType()
export class AuthUserUncheckedCreateWithoutRoleInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
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
  @Field(() => String, { nullable: true })
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: true })
  roleRoleId?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
}

@InputType()
export class AuthUserUncheckedUpdateManyWithoutAuthUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserUncheckedUpdateManyWithoutRoleNestedInput {
  @Field(() => [AuthUserCreateWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateWithoutRoleInput)
  create?: Array<AuthUserCreateWithoutRoleInput>;
  @Field(() => [AuthUserCreateOrConnectWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateOrConnectWithoutRoleInput)
  connectOrCreate?: Array<AuthUserCreateOrConnectWithoutRoleInput>;
  @Field(() => [AuthUserUpsertWithWhereUniqueWithoutRoleInput], {
    nullable: true,
  })
  @Type(() => AuthUserUpsertWithWhereUniqueWithoutRoleInput)
  upsert?: Array<AuthUserUpsertWithWhereUniqueWithoutRoleInput>;
  @Field(() => AuthUserCreateManyRoleInputEnvelope, { nullable: true })
  @Type(() => AuthUserCreateManyRoleInputEnvelope)
  createMany?: InstanceType<typeof AuthUserCreateManyRoleInputEnvelope>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  set?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  disconnect?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  delete?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  connect?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true,
  })
  @Type(() => AuthUserUpdateWithWhereUniqueWithoutRoleInput)
  update?: Array<AuthUserUpdateWithWhereUniqueWithoutRoleInput>;
  @Field(() => [AuthUserUpdateManyWithWhereWithoutRoleInput], {
    nullable: true,
  })
  @Type(() => AuthUserUpdateManyWithWhereWithoutRoleInput)
  updateMany?: Array<AuthUserUpdateManyWithWhereWithoutRoleInput>;
  @Field(() => [AuthUserScalarWhereInput], { nullable: true })
  @Type(() => AuthUserScalarWhereInput)
  deleteMany?: Array<AuthUserScalarWhereInput>;
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
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  roleRoleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserUncheckedUpdateWithoutRoleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
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
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  roleRoleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
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
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserUpdateManyWithWhereWithoutRoleInput {
  @Field(() => AuthUserScalarWhereInput, { nullable: false })
  @Type(() => AuthUserScalarWhereInput)
  where!: InstanceType<typeof AuthUserScalarWhereInput>;
  @Field(() => AuthUserUpdateManyMutationInput, { nullable: false })
  @Type(() => AuthUserUpdateManyMutationInput)
  data!: InstanceType<typeof AuthUserUpdateManyMutationInput>;
}

@InputType()
export class AuthUserUpdateManyWithoutRoleNestedInput {
  @Field(() => [AuthUserCreateWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateWithoutRoleInput)
  create?: Array<AuthUserCreateWithoutRoleInput>;
  @Field(() => [AuthUserCreateOrConnectWithoutRoleInput], { nullable: true })
  @Type(() => AuthUserCreateOrConnectWithoutRoleInput)
  connectOrCreate?: Array<AuthUserCreateOrConnectWithoutRoleInput>;
  @Field(() => [AuthUserUpsertWithWhereUniqueWithoutRoleInput], {
    nullable: true,
  })
  @Type(() => AuthUserUpsertWithWhereUniqueWithoutRoleInput)
  upsert?: Array<AuthUserUpsertWithWhereUniqueWithoutRoleInput>;
  @Field(() => AuthUserCreateManyRoleInputEnvelope, { nullable: true })
  @Type(() => AuthUserCreateManyRoleInputEnvelope)
  createMany?: InstanceType<typeof AuthUserCreateManyRoleInputEnvelope>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  set?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  disconnect?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  delete?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserWhereUniqueInput], { nullable: true })
  @Type(() => AuthUserWhereUniqueInput)
  connect?: Array<AuthUserWhereUniqueInput>;
  @Field(() => [AuthUserUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true,
  })
  @Type(() => AuthUserUpdateWithWhereUniqueWithoutRoleInput)
  update?: Array<AuthUserUpdateWithWhereUniqueWithoutRoleInput>;
  @Field(() => [AuthUserUpdateManyWithWhereWithoutRoleInput], {
    nullable: true,
  })
  @Type(() => AuthUserUpdateManyWithWhereWithoutRoleInput)
  updateMany?: Array<AuthUserUpdateManyWithWhereWithoutRoleInput>;
  @Field(() => [AuthUserScalarWhereInput], { nullable: true })
  @Type(() => AuthUserScalarWhereInput)
  deleteMany?: Array<AuthUserScalarWhereInput>;
}

@InputType()
export class AuthUserUpdateWithWhereUniqueWithoutRoleInput {
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => AuthUserUpdateWithoutRoleInput, { nullable: false })
  @Type(() => AuthUserUpdateWithoutRoleInput)
  data!: InstanceType<typeof AuthUserUpdateWithoutRoleInput>;
}

@InputType()
export class AuthUserUpdateWithoutRoleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
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
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => RoleUpdateOneWithoutAuthUserNestedInput, { nullable: true })
  Role?: InstanceType<typeof RoleUpdateOneWithoutAuthUserNestedInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class AuthUserUpsertWithWhereUniqueWithoutRoleInput {
  @Field(() => AuthUserWhereUniqueInput, { nullable: false })
  @Type(() => AuthUserWhereUniqueInput)
  where!: InstanceType<typeof AuthUserWhereUniqueInput>;
  @Field(() => AuthUserUpdateWithoutRoleInput, { nullable: false })
  @Type(() => AuthUserUpdateWithoutRoleInput)
  update!: InstanceType<typeof AuthUserUpdateWithoutRoleInput>;
  @Field(() => AuthUserCreateWithoutRoleInput, { nullable: false })
  @Type(() => AuthUserCreateWithoutRoleInput)
  create!: InstanceType<typeof AuthUserCreateWithoutRoleInput>;
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
  @Field(() => StringNullableFilter, { nullable: true })
  refreshToken?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  username?: InstanceType<typeof StringFilter>;
  @Field(() => RoleRelationFilter, { nullable: true })
  Role?: InstanceType<typeof RoleRelationFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  roleRoleId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => BoolFilter, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFilter>;
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
  @Field(() => String, { nullable: true })
  refreshToken!: string | null;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => Role, { nullable: true })
  Role?: InstanceType<typeof Role> | null;
  @Field(() => String, { nullable: true })
  roleRoleId!: string | null;
  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isPhoneConfirmed!: boolean;
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
  profileId?: true;
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
  profileId!: number;
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
  profileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
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
  @Field(() => String, { nullable: false })
  profileId!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class FileEntityCreateNestedOneWithoutProfileInput {
  @Field(() => FileEntityCreateWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutProfileInput)
  create?: InstanceType<typeof FileEntityCreateWithoutProfileInput>;
  @Field(() => FileEntityCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<
    typeof FileEntityCreateOrConnectWithoutProfileInput
  >;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class FileEntityCreateOrConnectWithoutProfileInput {
  @Field(() => FileEntityWhereUniqueInput, { nullable: false })
  @Type(() => FileEntityWhereUniqueInput)
  where!: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityCreateWithoutProfileInput, { nullable: false })
  @Type(() => FileEntityCreateWithoutProfileInput)
  create!: InstanceType<typeof FileEntityCreateWithoutProfileInput>;
}

@InputType()
export class FileEntityCreateWithoutProfileInput {
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
export class FileEntityCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => ProfileCreateNestedOneWithoutProfilePictureInput, {
    nullable: false,
  })
  profile!: InstanceType<
    typeof ProfileCreateNestedOneWithoutProfilePictureInput
  >;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
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
  @Field(() => String, { nullable: false })
  profileId!: string;
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
  profileId?: true;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  profileId?: keyof typeof SortOrder;
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
  profileId?: true;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  profileId?: keyof typeof SortOrder;
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
  profileId?: keyof typeof SortOrder;
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
  profileId?: keyof typeof SortOrder;
  @Field(() => ProfileOrderByWithRelationInput, { nullable: true })
  profile?: InstanceType<typeof ProfileOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
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
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  profileId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class FileEntityUncheckedCreateNestedOneWithoutProfileInput {
  @Field(() => FileEntityCreateWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutProfileInput)
  create?: InstanceType<typeof FileEntityCreateWithoutProfileInput>;
  @Field(() => FileEntityCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<
    typeof FileEntityCreateOrConnectWithoutProfileInput
  >;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
}

@InputType()
export class FileEntityUncheckedCreateWithoutProfileInput {
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
export class FileEntityUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  fileName!: string;
  @Field(() => String, { nullable: false })
  fileUrl!: string;
  @Field(() => String, { nullable: false })
  key!: string;
  @Field(() => String, { nullable: false })
  profileId!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
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
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileEntityUncheckedUpdateOneWithoutProfileNestedInput {
  @Field(() => FileEntityCreateWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutProfileInput)
  create?: InstanceType<typeof FileEntityCreateWithoutProfileInput>;
  @Field(() => FileEntityCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<
    typeof FileEntityCreateOrConnectWithoutProfileInput
  >;
  @Field(() => FileEntityUpsertWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityUpsertWithoutProfileInput)
  upsert?: InstanceType<typeof FileEntityUpsertWithoutProfileInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityUpdateWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityUpdateWithoutProfileInput)
  update?: InstanceType<typeof FileEntityUpdateWithoutProfileInput>;
}

@InputType()
export class FileEntityUncheckedUpdateWithoutProfileInput {
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
export class FileEntityUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
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
export class FileEntityUpdateOneWithoutProfileNestedInput {
  @Field(() => FileEntityCreateWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateWithoutProfileInput)
  create?: InstanceType<typeof FileEntityCreateWithoutProfileInput>;
  @Field(() => FileEntityCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<
    typeof FileEntityCreateOrConnectWithoutProfileInput
  >;
  @Field(() => FileEntityUpsertWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityUpsertWithoutProfileInput)
  upsert?: InstanceType<typeof FileEntityUpsertWithoutProfileInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => FileEntityWhereUniqueInput, { nullable: true })
  @Type(() => FileEntityWhereUniqueInput)
  connect?: InstanceType<typeof FileEntityWhereUniqueInput>;
  @Field(() => FileEntityUpdateWithoutProfileInput, { nullable: true })
  @Type(() => FileEntityUpdateWithoutProfileInput)
  update?: InstanceType<typeof FileEntityUpdateWithoutProfileInput>;
}

@InputType()
export class FileEntityUpdateWithoutProfileInput {
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
export class FileEntityUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => ProfileUpdateOneRequiredWithoutProfilePictureNestedInput, {
    nullable: true,
  })
  profile?: InstanceType<
    typeof ProfileUpdateOneRequiredWithoutProfilePictureNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileEntityUpsertWithoutProfileInput {
  @Field(() => FileEntityUpdateWithoutProfileInput, { nullable: false })
  @Type(() => FileEntityUpdateWithoutProfileInput)
  update!: InstanceType<typeof FileEntityUpdateWithoutProfileInput>;
  @Field(() => FileEntityCreateWithoutProfileInput, { nullable: false })
  @Type(() => FileEntityCreateWithoutProfileInput)
  create!: InstanceType<typeof FileEntityCreateWithoutProfileInput>;
}

@InputType()
export class FileEntityWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  @Field(() => StringFilter, { nullable: true })
  profileId?: InstanceType<typeof StringFilter>;
  @Field(() => ProfileRelationFilter, { nullable: true })
  profile?: InstanceType<typeof ProfileRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
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
  @Field(() => String, { nullable: false })
  profileId!: string;
  @Field(() => Profile, { nullable: false })
  profile?: InstanceType<typeof Profile>;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
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
}

@InputType()
export class ProfileCreateNestedOneWithoutProfilePictureInput {
  @Field(() => ProfileCreateWithoutProfilePictureInput, { nullable: true })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create?: InstanceType<typeof ProfileCreateWithoutProfilePictureInput>;
  @Field(() => ProfileCreateOrConnectWithoutProfilePictureInput, {
    nullable: true,
  })
  @Type(() => ProfileCreateOrConnectWithoutProfilePictureInput)
  connectOrCreate?: InstanceType<
    typeof ProfileCreateOrConnectWithoutProfilePictureInput
  >;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: InstanceType<typeof ProfileWhereUniqueInput>;
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
  @Field(() => FileEntityCreateNestedOneWithoutProfileInput, { nullable: true })
  profilePicture?: InstanceType<
    typeof FileEntityCreateNestedOneWithoutProfileInput
  >;
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
  @Field(() => UsersCreateNestedOneWithoutProfileInput, { nullable: true })
  user?: InstanceType<typeof UsersCreateNestedOneWithoutProfileInput>;
  @Field(() => FileEntityCreateNestedOneWithoutProfileInput, { nullable: true })
  profilePicture?: InstanceType<
    typeof FileEntityCreateNestedOneWithoutProfileInput
  >;
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
  @Field(() => ProfileCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ProfileCountAggregate>;
  @Field(() => ProfileMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ProfileMinAggregate>;
  @Field(() => ProfileMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ProfileMaxAggregate>;
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
  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UsersOrderByWithRelationInput>;
  @Field(() => FileEntityOrderByWithRelationInput, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityOrderByWithRelationInput>;
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
  @Field(() => UsersUncheckedCreateNestedOneWithoutProfileInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UsersUncheckedCreateNestedOneWithoutProfileInput>;
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
  @Field(() => FileEntityUncheckedCreateNestedOneWithoutProfileInput, {
    nullable: true,
  })
  profilePicture?: InstanceType<
    typeof FileEntityUncheckedCreateNestedOneWithoutProfileInput
  >;
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
  @Field(() => UsersUncheckedCreateNestedOneWithoutProfileInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UsersUncheckedCreateNestedOneWithoutProfileInput>;
  @Field(() => FileEntityUncheckedCreateNestedOneWithoutProfileInput, {
    nullable: true,
  })
  profilePicture?: InstanceType<
    typeof FileEntityUncheckedCreateNestedOneWithoutProfileInput
  >;
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
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
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
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UsersUncheckedUpdateOneWithoutProfileNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UsersUncheckedUpdateOneWithoutProfileNestedInput>;
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
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FileEntityUncheckedUpdateOneWithoutProfileNestedInput, {
    nullable: true,
  })
  profilePicture?: InstanceType<
    typeof FileEntityUncheckedUpdateOneWithoutProfileNestedInput
  >;
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
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UsersUncheckedUpdateOneWithoutProfileNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UsersUncheckedUpdateOneWithoutProfileNestedInput>;
  @Field(() => FileEntityUncheckedUpdateOneWithoutProfileNestedInput, {
    nullable: true,
  })
  profilePicture?: InstanceType<
    typeof FileEntityUncheckedUpdateOneWithoutProfileNestedInput
  >;
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
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateOneRequiredWithoutProfilePictureNestedInput {
  @Field(() => ProfileCreateWithoutProfilePictureInput, { nullable: true })
  @Type(() => ProfileCreateWithoutProfilePictureInput)
  create?: InstanceType<typeof ProfileCreateWithoutProfilePictureInput>;
  @Field(() => ProfileCreateOrConnectWithoutProfilePictureInput, {
    nullable: true,
  })
  @Type(() => ProfileCreateOrConnectWithoutProfilePictureInput)
  connectOrCreate?: InstanceType<
    typeof ProfileCreateOrConnectWithoutProfilePictureInput
  >;
  @Field(() => ProfileUpsertWithoutProfilePictureInput, { nullable: true })
  @Type(() => ProfileUpsertWithoutProfilePictureInput)
  upsert?: InstanceType<typeof ProfileUpsertWithoutProfilePictureInput>;
  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: InstanceType<typeof ProfileWhereUniqueInput>;
  @Field(() => ProfileUpdateWithoutProfilePictureInput, { nullable: true })
  @Type(() => ProfileUpdateWithoutProfilePictureInput)
  update?: InstanceType<typeof ProfileUpdateWithoutProfilePictureInput>;
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
export class ProfileUpdateWithoutProfilePictureInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
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
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FileEntityUpdateOneWithoutProfileNestedInput, { nullable: true })
  profilePicture?: InstanceType<
    typeof FileEntityUpdateOneWithoutProfileNestedInput
  >;
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
  placeOfBirth?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UsersUpdateOneWithoutProfileNestedInput, { nullable: true })
  user?: InstanceType<typeof UsersUpdateOneWithoutProfileNestedInput>;
  @Field(() => FileEntityUpdateOneWithoutProfileNestedInput, { nullable: true })
  profilePicture?: InstanceType<
    typeof FileEntityUpdateOneWithoutProfileNestedInput
  >;
}

@InputType()
export class ProfileUpsertWithoutProfilePictureInput {
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
  @Field(() => UsersRelationFilter, { nullable: true })
  user?: InstanceType<typeof UsersRelationFilter>;
  @Field(() => FileEntityRelationFilter, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntityRelationFilter>;
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
  @Field(() => Users, { nullable: true })
  user?: InstanceType<typeof Users> | null;
  @Field(() => FileEntity, { nullable: true })
  profilePicture?: InstanceType<typeof FileEntity> | null;
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
export class AggregateRole {
  @Field(() => RoleCountAggregate, { nullable: true })
  _count?: InstanceType<typeof RoleCountAggregate>;
  @Field(() => RoleMinAggregate, { nullable: true })
  _min?: InstanceType<typeof RoleMinAggregate>;
  @Field(() => RoleMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof RoleMaxAggregate>;
}

@InputType()
export class CreateManyRoleArgs {
  @Field(() => [RoleCreateManyInput], { nullable: false })
  @Type(() => RoleCreateManyInput)
  data!: Array<RoleCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneRoleArgs {
  @Field(() => RoleCreateInput, { nullable: false })
  @Type(() => RoleCreateInput)
  data!: InstanceType<typeof RoleCreateInput>;
}

@InputType()
export class DeleteManyRoleArgs {
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: InstanceType<typeof RoleWhereInput>;
}

@InputType()
export class DeleteOneRoleArgs {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: InstanceType<typeof RoleWhereUniqueInput>;
}

@InputType()
export class FindFirstRoleArgs {
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: InstanceType<typeof RoleWhereInput>;
  @Field(() => [RoleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RoleOrderByWithRelationInput>;
  @Field(() => RoleWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RoleWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RoleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RoleScalarFieldEnum>;
}

@InputType()
export class FindManyRoleArgs {
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: InstanceType<typeof RoleWhereInput>;
  @Field(() => [RoleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RoleOrderByWithRelationInput>;
  @Field(() => RoleWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RoleWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RoleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RoleScalarFieldEnum>;
}

@InputType()
export class FindUniqueRoleArgs {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: InstanceType<typeof RoleWhereUniqueInput>;
}

@InputType()
export class RoleAggregateArgs {
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: InstanceType<typeof RoleWhereInput>;
  @Field(() => [RoleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RoleOrderByWithRelationInput>;
  @Field(() => RoleWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof RoleWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => RoleCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RoleCountAggregateInput>;
  @Field(() => RoleMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RoleMinAggregateInput>;
  @Field(() => RoleMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RoleMaxAggregateInput>;
}

@InputType()
export class RoleCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  roleId?: true;
  @Field(() => Boolean, { nullable: true })
  userRole?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class RoleCountAggregate {
  @Field(() => Int, { nullable: false })
  roleId!: number;
  @Field(() => Int, { nullable: false })
  userRole!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class RoleCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  roleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userRole?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class RoleCount {
  @Field(() => Int, { nullable: false })
  AuthUser?: number;
}

@InputType()
export class RoleCreateManyInput {
  @Field(() => String, { nullable: true })
  roleId?: string;
  @Field(() => String, { nullable: false })
  userRole!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RoleCreateNestedOneWithoutAuthUserInput {
  @Field(() => RoleCreateWithoutAuthUserInput, { nullable: true })
  @Type(() => RoleCreateWithoutAuthUserInput)
  create?: InstanceType<typeof RoleCreateWithoutAuthUserInput>;
  @Field(() => RoleCreateOrConnectWithoutAuthUserInput, { nullable: true })
  @Type(() => RoleCreateOrConnectWithoutAuthUserInput)
  connectOrCreate?: InstanceType<
    typeof RoleCreateOrConnectWithoutAuthUserInput
  >;
  @Field(() => RoleWhereUniqueInput, { nullable: true })
  @Type(() => RoleWhereUniqueInput)
  connect?: InstanceType<typeof RoleWhereUniqueInput>;
}

@InputType()
export class RoleCreateOrConnectWithoutAuthUserInput {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: InstanceType<typeof RoleWhereUniqueInput>;
  @Field(() => RoleCreateWithoutAuthUserInput, { nullable: false })
  @Type(() => RoleCreateWithoutAuthUserInput)
  create!: InstanceType<typeof RoleCreateWithoutAuthUserInput>;
}

@InputType()
export class RoleCreateWithoutAuthUserInput {
  @Field(() => String, { nullable: true })
  roleId?: string;
  @Field(() => String, { nullable: false })
  userRole!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RoleCreateInput {
  @Field(() => String, { nullable: true })
  roleId?: string;
  @Field(() => String, { nullable: false })
  userRole!: string;
  @Field(() => AuthUserCreateNestedManyWithoutRoleInput, { nullable: true })
  AuthUser?: InstanceType<typeof AuthUserCreateNestedManyWithoutRoleInput>;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RoleGroupByArgs {
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: InstanceType<typeof RoleWhereInput>;
  @Field(() => [RoleOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<RoleOrderByWithAggregationInput>;
  @Field(() => [RoleScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof RoleScalarFieldEnum>;
  @Field(() => RoleScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof RoleScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => RoleCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RoleCountAggregateInput>;
  @Field(() => RoleMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RoleMinAggregateInput>;
  @Field(() => RoleMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RoleMaxAggregateInput>;
}

@ObjectType()
export class RoleGroupBy {
  @Field(() => String, { nullable: false })
  roleId!: string;
  @Field(() => String, { nullable: false })
  userRole!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => RoleCountAggregate, { nullable: true })
  _count?: InstanceType<typeof RoleCountAggregate>;
  @Field(() => RoleMinAggregate, { nullable: true })
  _min?: InstanceType<typeof RoleMinAggregate>;
  @Field(() => RoleMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof RoleMaxAggregate>;
}

@InputType()
export class RoleMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  roleId?: true;
  @Field(() => Boolean, { nullable: true })
  userRole?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class RoleMaxAggregate {
  @Field(() => String, { nullable: true })
  roleId?: string;
  @Field(() => String, { nullable: true })
  userRole?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RoleMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  roleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userRole?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class RoleMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  roleId?: true;
  @Field(() => Boolean, { nullable: true })
  userRole?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class RoleMinAggregate {
  @Field(() => String, { nullable: true })
  roleId?: string;
  @Field(() => String, { nullable: true })
  userRole?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RoleMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  roleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userRole?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class RoleOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  roleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userRole?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => RoleCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof RoleCountOrderByAggregateInput>;
  @Field(() => RoleMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof RoleMaxOrderByAggregateInput>;
  @Field(() => RoleMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof RoleMinOrderByAggregateInput>;
}

@InputType()
export class RoleOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  roleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userRole?: keyof typeof SortOrder;
  @Field(() => AuthUserOrderByRelationAggregateInput, { nullable: true })
  AuthUser?: InstanceType<typeof AuthUserOrderByRelationAggregateInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class RoleRelationFilter {
  @Field(() => RoleWhereInput, { nullable: true })
  is?: InstanceType<typeof RoleWhereInput>;
  @Field(() => RoleWhereInput, { nullable: true })
  isNot?: InstanceType<typeof RoleWhereInput>;
}

@InputType()
export class RoleScalarWhereWithAggregatesInput {
  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<RoleScalarWhereWithAggregatesInput>;
  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<RoleScalarWhereWithAggregatesInput>;
  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<RoleScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  roleId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userRole?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class RoleUncheckedCreateWithoutAuthUserInput {
  @Field(() => String, { nullable: true })
  roleId?: string;
  @Field(() => String, { nullable: false })
  userRole!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RoleUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  roleId?: string;
  @Field(() => String, { nullable: false })
  userRole!: string;
  @Field(() => AuthUserUncheckedCreateNestedManyWithoutRoleInput, {
    nullable: true,
  })
  AuthUser?: InstanceType<
    typeof AuthUserUncheckedCreateNestedManyWithoutRoleInput
  >;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class RoleUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  roleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userRole?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUncheckedUpdateWithoutAuthUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  roleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userRole?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  roleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userRole?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => AuthUserUncheckedUpdateManyWithoutRoleNestedInput, {
    nullable: true,
  })
  AuthUser?: InstanceType<
    typeof AuthUserUncheckedUpdateManyWithoutRoleNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  roleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userRole?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUpdateOneWithoutAuthUserNestedInput {
  @Field(() => RoleCreateWithoutAuthUserInput, { nullable: true })
  @Type(() => RoleCreateWithoutAuthUserInput)
  create?: InstanceType<typeof RoleCreateWithoutAuthUserInput>;
  @Field(() => RoleCreateOrConnectWithoutAuthUserInput, { nullable: true })
  @Type(() => RoleCreateOrConnectWithoutAuthUserInput)
  connectOrCreate?: InstanceType<
    typeof RoleCreateOrConnectWithoutAuthUserInput
  >;
  @Field(() => RoleUpsertWithoutAuthUserInput, { nullable: true })
  @Type(() => RoleUpsertWithoutAuthUserInput)
  upsert?: InstanceType<typeof RoleUpsertWithoutAuthUserInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => RoleWhereUniqueInput, { nullable: true })
  @Type(() => RoleWhereUniqueInput)
  connect?: InstanceType<typeof RoleWhereUniqueInput>;
  @Field(() => RoleUpdateWithoutAuthUserInput, { nullable: true })
  @Type(() => RoleUpdateWithoutAuthUserInput)
  update?: InstanceType<typeof RoleUpdateWithoutAuthUserInput>;
}

@InputType()
export class RoleUpdateWithoutAuthUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  roleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userRole?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  roleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userRole?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => AuthUserUpdateManyWithoutRoleNestedInput, { nullable: true })
  AuthUser?: InstanceType<typeof AuthUserUpdateManyWithoutRoleNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RoleUpsertWithoutAuthUserInput {
  @Field(() => RoleUpdateWithoutAuthUserInput, { nullable: false })
  @Type(() => RoleUpdateWithoutAuthUserInput)
  update!: InstanceType<typeof RoleUpdateWithoutAuthUserInput>;
  @Field(() => RoleCreateWithoutAuthUserInput, { nullable: false })
  @Type(() => RoleCreateWithoutAuthUserInput)
  create!: InstanceType<typeof RoleCreateWithoutAuthUserInput>;
}

@InputType()
export class RoleWhereUniqueInput {
  @Field(() => String, { nullable: true })
  roleId?: string;
}

@InputType()
export class RoleWhereInput {
  @Field(() => [RoleWhereInput], { nullable: true })
  AND?: Array<RoleWhereInput>;
  @Field(() => [RoleWhereInput], { nullable: true })
  OR?: Array<RoleWhereInput>;
  @Field(() => [RoleWhereInput], { nullable: true })
  NOT?: Array<RoleWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  roleId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userRole?: InstanceType<typeof StringFilter>;
  @Field(() => AuthUserListRelationFilter, { nullable: true })
  AuthUser?: InstanceType<typeof AuthUserListRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Role {
  @Field(() => ID, { nullable: false })
  roleId!: string;
  @Field(() => String, { nullable: false })
  userRole!: string;
  @Field(() => [AuthUser], { nullable: true })
  AuthUser?: Array<AuthUser>;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => RoleCount, { nullable: false })
  _count?: InstanceType<typeof RoleCount>;
}

@InputType()
export class UpdateManyRoleArgs {
  @Field(() => RoleUpdateManyMutationInput, { nullable: false })
  @Type(() => RoleUpdateManyMutationInput)
  data!: InstanceType<typeof RoleUpdateManyMutationInput>;
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: InstanceType<typeof RoleWhereInput>;
}

@InputType()
export class UpdateOneRoleArgs {
  @Field(() => RoleUpdateInput, { nullable: false })
  @Type(() => RoleUpdateInput)
  data!: InstanceType<typeof RoleUpdateInput>;
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: InstanceType<typeof RoleWhereUniqueInput>;
}

@InputType()
export class UpsertOneRoleArgs {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: InstanceType<typeof RoleWhereUniqueInput>;
  @Field(() => RoleCreateInput, { nullable: false })
  @Type(() => RoleCreateInput)
  create!: InstanceType<typeof RoleCreateInput>;
  @Field(() => RoleUpdateInput, { nullable: false })
  @Type(() => RoleUpdateInput)
  update!: InstanceType<typeof RoleUpdateInput>;
}

@ObjectType()
export class AggregateUserAdresses {
  @Field(() => UserAdressesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserAdressesCountAggregate>;
  @Field(() => UserAdressesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserAdressesMinAggregate>;
  @Field(() => UserAdressesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserAdressesMaxAggregate>;
}

@InputType()
export class CreateManyUserAdressesArgs {
  @Field(() => [UserAdressesCreateManyInput], { nullable: false })
  @Type(() => UserAdressesCreateManyInput)
  data!: Array<UserAdressesCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneUserAdressesArgs {
  @Field(() => UserAdressesCreateInput, { nullable: false })
  @Type(() => UserAdressesCreateInput)
  data!: InstanceType<typeof UserAdressesCreateInput>;
}

@InputType()
export class DeleteManyUserAdressesArgs {
  @Field(() => UserAdressesWhereInput, { nullable: true })
  @Type(() => UserAdressesWhereInput)
  where?: InstanceType<typeof UserAdressesWhereInput>;
}

@InputType()
export class DeleteOneUserAdressesArgs {
  @Field(() => UserAdressesWhereUniqueInput, { nullable: false })
  @Type(() => UserAdressesWhereUniqueInput)
  where!: InstanceType<typeof UserAdressesWhereUniqueInput>;
}

@InputType()
export class FindFirstUserAdressesArgs {
  @Field(() => UserAdressesWhereInput, { nullable: true })
  @Type(() => UserAdressesWhereInput)
  where?: InstanceType<typeof UserAdressesWhereInput>;
  @Field(() => [UserAdressesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserAdressesOrderByWithRelationInput>;
  @Field(() => UserAdressesWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserAdressesWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserAdressesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserAdressesScalarFieldEnum>;
}

@InputType()
export class FindManyUserAdressesArgs {
  @Field(() => UserAdressesWhereInput, { nullable: true })
  @Type(() => UserAdressesWhereInput)
  where?: InstanceType<typeof UserAdressesWhereInput>;
  @Field(() => [UserAdressesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserAdressesOrderByWithRelationInput>;
  @Field(() => UserAdressesWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserAdressesWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserAdressesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserAdressesScalarFieldEnum>;
}

@InputType()
export class FindUniqueUserAdressesArgs {
  @Field(() => UserAdressesWhereUniqueInput, { nullable: false })
  @Type(() => UserAdressesWhereUniqueInput)
  where!: InstanceType<typeof UserAdressesWhereUniqueInput>;
}

@InputType()
export class UpdateManyUserAdressesArgs {
  @Field(() => UserAdressesUpdateManyMutationInput, { nullable: false })
  @Type(() => UserAdressesUpdateManyMutationInput)
  data!: InstanceType<typeof UserAdressesUpdateManyMutationInput>;
  @Field(() => UserAdressesWhereInput, { nullable: true })
  @Type(() => UserAdressesWhereInput)
  where?: InstanceType<typeof UserAdressesWhereInput>;
}

@InputType()
export class UpdateOneUserAdressesArgs {
  @Field(() => UserAdressesUpdateInput, { nullable: false })
  @Type(() => UserAdressesUpdateInput)
  data!: InstanceType<typeof UserAdressesUpdateInput>;
  @Field(() => UserAdressesWhereUniqueInput, { nullable: false })
  @Type(() => UserAdressesWhereUniqueInput)
  where!: InstanceType<typeof UserAdressesWhereUniqueInput>;
}

@InputType()
export class UpsertOneUserAdressesArgs {
  @Field(() => UserAdressesWhereUniqueInput, { nullable: false })
  @Type(() => UserAdressesWhereUniqueInput)
  where!: InstanceType<typeof UserAdressesWhereUniqueInput>;
  @Field(() => UserAdressesCreateInput, { nullable: false })
  @Type(() => UserAdressesCreateInput)
  create!: InstanceType<typeof UserAdressesCreateInput>;
  @Field(() => UserAdressesUpdateInput, { nullable: false })
  @Type(() => UserAdressesUpdateInput)
  update!: InstanceType<typeof UserAdressesUpdateInput>;
}

@InputType()
export class UserAdressesAggregateArgs {
  @Field(() => UserAdressesWhereInput, { nullable: true })
  @Type(() => UserAdressesWhereInput)
  where?: InstanceType<typeof UserAdressesWhereInput>;
  @Field(() => [UserAdressesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserAdressesOrderByWithRelationInput>;
  @Field(() => UserAdressesWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserAdressesWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserAdressesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserAdressesCountAggregateInput>;
  @Field(() => UserAdressesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserAdressesMinAggregateInput>;
  @Field(() => UserAdressesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserAdressesMaxAggregateInput>;
}

@InputType()
export class UserAdressesCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idAdresse?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
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
export class UserAdressesCountAggregate {
  @Field(() => Int, { nullable: false })
  idAdresse!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
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
export class UserAdressesCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
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
export class UserAdressesCreateManyUserInputEnvelope {
  @Field(() => [UserAdressesCreateManyUserInput], { nullable: false })
  @Type(() => UserAdressesCreateManyUserInput)
  data!: Array<UserAdressesCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class UserAdressesCreateManyUserInput {
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
}

@InputType()
export class UserAdressesCreateManyInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
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
export class UserAdressesCreateNestedManyWithoutUserInput {
  @Field(() => [UserAdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => UserAdressesCreateWithoutUserInput)
  create?: Array<UserAdressesCreateWithoutUserInput>;
  @Field(() => [UserAdressesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserAdressesCreateOrConnectWithoutUserInput>;
  @Field(() => UserAdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserAdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserAdressesCreateManyUserInputEnvelope>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  connect?: Array<UserAdressesWhereUniqueInput>;
}

@InputType()
export class UserAdressesCreateOrConnectWithoutUserInput {
  @Field(() => UserAdressesWhereUniqueInput, { nullable: false })
  @Type(() => UserAdressesWhereUniqueInput)
  where!: InstanceType<typeof UserAdressesWhereUniqueInput>;
  @Field(() => UserAdressesCreateWithoutUserInput, { nullable: false })
  @Type(() => UserAdressesCreateWithoutUserInput)
  create!: InstanceType<typeof UserAdressesCreateWithoutUserInput>;
}

@InputType()
export class UserAdressesCreateWithoutUserInput {
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
}

@InputType()
export class UserAdressesCreateInput {
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
  @Field(() => UsersCreateNestedOneWithoutAdressesInput, { nullable: false })
  user!: InstanceType<typeof UsersCreateNestedOneWithoutAdressesInput>;
}

@InputType()
export class UserAdressesGroupByArgs {
  @Field(() => UserAdressesWhereInput, { nullable: true })
  @Type(() => UserAdressesWhereInput)
  where?: InstanceType<typeof UserAdressesWhereInput>;
  @Field(() => [UserAdressesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserAdressesOrderByWithAggregationInput>;
  @Field(() => [UserAdressesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserAdressesScalarFieldEnum>;
  @Field(() => UserAdressesScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UserAdressesScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserAdressesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserAdressesCountAggregateInput>;
  @Field(() => UserAdressesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserAdressesMinAggregateInput>;
  @Field(() => UserAdressesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserAdressesMaxAggregateInput>;
}

@ObjectType()
export class UserAdressesGroupBy {
  @Field(() => String, { nullable: false })
  idAdresse!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
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
  @Field(() => UserAdressesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserAdressesCountAggregate>;
  @Field(() => UserAdressesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserAdressesMinAggregate>;
  @Field(() => UserAdressesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserAdressesMaxAggregate>;
}

@InputType()
export class UserAdressesListRelationFilter {
  @Field(() => UserAdressesWhereInput, { nullable: true })
  every?: InstanceType<typeof UserAdressesWhereInput>;
  @Field(() => UserAdressesWhereInput, { nullable: true })
  some?: InstanceType<typeof UserAdressesWhereInput>;
  @Field(() => UserAdressesWhereInput, { nullable: true })
  none?: InstanceType<typeof UserAdressesWhereInput>;
}

@InputType()
export class UserAdressesMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idAdresse?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
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
export class UserAdressesMaxAggregate {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
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
export class UserAdressesMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
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
export class UserAdressesMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  idAdresse?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
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
export class UserAdressesMinAggregate {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
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
export class UserAdressesMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
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
export class UserAdressesOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class UserAdressesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
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
  @Field(() => UserAdressesCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserAdressesCountOrderByAggregateInput>;
  @Field(() => UserAdressesMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserAdressesMaxOrderByAggregateInput>;
  @Field(() => UserAdressesMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserAdressesMinOrderByAggregateInput>;
}

@InputType()
export class UserAdressesOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  idAdresse?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
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
}

@InputType()
export class UserAdressesScalarWhereWithAggregatesInput {
  @Field(() => [UserAdressesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserAdressesScalarWhereWithAggregatesInput>;
  @Field(() => [UserAdressesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserAdressesScalarWhereWithAggregatesInput>;
  @Field(() => [UserAdressesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserAdressesScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  idAdresse?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
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
export class UserAdressesScalarWhereInput {
  @Field(() => [UserAdressesScalarWhereInput], { nullable: true })
  AND?: Array<UserAdressesScalarWhereInput>;
  @Field(() => [UserAdressesScalarWhereInput], { nullable: true })
  OR?: Array<UserAdressesScalarWhereInput>;
  @Field(() => [UserAdressesScalarWhereInput], { nullable: true })
  NOT?: Array<UserAdressesScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idAdresse?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
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
export class UserAdressesUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [UserAdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => UserAdressesCreateWithoutUserInput)
  create?: Array<UserAdressesCreateWithoutUserInput>;
  @Field(() => [UserAdressesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserAdressesCreateOrConnectWithoutUserInput>;
  @Field(() => UserAdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserAdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserAdressesCreateManyUserInputEnvelope>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  connect?: Array<UserAdressesWhereUniqueInput>;
}

@InputType()
export class UserAdressesUncheckedCreateWithoutUserInput {
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
}

@InputType()
export class UserAdressesUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
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
export class UserAdressesUncheckedUpdateManyWithoutAdressesInput {
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
export class UserAdressesUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [UserAdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => UserAdressesCreateWithoutUserInput)
  create?: Array<UserAdressesCreateWithoutUserInput>;
  @Field(() => [UserAdressesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserAdressesCreateOrConnectWithoutUserInput>;
  @Field(() => [UserAdressesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<UserAdressesUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => UserAdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserAdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserAdressesCreateManyUserInputEnvelope>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  set?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  disconnect?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  delete?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  connect?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<UserAdressesUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [UserAdressesUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<UserAdressesUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [UserAdressesScalarWhereInput], { nullable: true })
  @Type(() => UserAdressesScalarWhereInput)
  deleteMany?: Array<UserAdressesScalarWhereInput>;
}

@InputType()
export class UserAdressesUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
export class UserAdressesUncheckedUpdateWithoutUserInput {
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
export class UserAdressesUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idAdresse?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
export class UserAdressesUpdateManyMutationInput {
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
export class UserAdressesUpdateManyWithWhereWithoutUserInput {
  @Field(() => UserAdressesScalarWhereInput, { nullable: false })
  @Type(() => UserAdressesScalarWhereInput)
  where!: InstanceType<typeof UserAdressesScalarWhereInput>;
  @Field(() => UserAdressesUpdateManyMutationInput, { nullable: false })
  @Type(() => UserAdressesUpdateManyMutationInput)
  data!: InstanceType<typeof UserAdressesUpdateManyMutationInput>;
}

@InputType()
export class UserAdressesUpdateManyWithoutUserNestedInput {
  @Field(() => [UserAdressesCreateWithoutUserInput], { nullable: true })
  @Type(() => UserAdressesCreateWithoutUserInput)
  create?: Array<UserAdressesCreateWithoutUserInput>;
  @Field(() => [UserAdressesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserAdressesCreateOrConnectWithoutUserInput>;
  @Field(() => [UserAdressesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<UserAdressesUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => UserAdressesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserAdressesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserAdressesCreateManyUserInputEnvelope>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  set?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  disconnect?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  delete?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesWhereUniqueInput], { nullable: true })
  @Type(() => UserAdressesWhereUniqueInput)
  connect?: Array<UserAdressesWhereUniqueInput>;
  @Field(() => [UserAdressesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<UserAdressesUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [UserAdressesUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserAdressesUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<UserAdressesUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [UserAdressesScalarWhereInput], { nullable: true })
  @Type(() => UserAdressesScalarWhereInput)
  deleteMany?: Array<UserAdressesScalarWhereInput>;
}

@InputType()
export class UserAdressesUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => UserAdressesWhereUniqueInput, { nullable: false })
  @Type(() => UserAdressesWhereUniqueInput)
  where!: InstanceType<typeof UserAdressesWhereUniqueInput>;
  @Field(() => UserAdressesUpdateWithoutUserInput, { nullable: false })
  @Type(() => UserAdressesUpdateWithoutUserInput)
  data!: InstanceType<typeof UserAdressesUpdateWithoutUserInput>;
}

@InputType()
export class UserAdressesUpdateWithoutUserInput {
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
export class UserAdressesUpdateInput {
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
  @Field(() => UsersUpdateOneRequiredWithoutAdressesNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UsersUpdateOneRequiredWithoutAdressesNestedInput>;
}

@InputType()
export class UserAdressesUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => UserAdressesWhereUniqueInput, { nullable: false })
  @Type(() => UserAdressesWhereUniqueInput)
  where!: InstanceType<typeof UserAdressesWhereUniqueInput>;
  @Field(() => UserAdressesUpdateWithoutUserInput, { nullable: false })
  @Type(() => UserAdressesUpdateWithoutUserInput)
  update!: InstanceType<typeof UserAdressesUpdateWithoutUserInput>;
  @Field(() => UserAdressesCreateWithoutUserInput, { nullable: false })
  @Type(() => UserAdressesCreateWithoutUserInput)
  create!: InstanceType<typeof UserAdressesCreateWithoutUserInput>;
}

@InputType()
export class UserAdressesWhereUniqueInput {
  @Field(() => String, { nullable: true })
  idAdresse?: string;
}

@InputType()
export class UserAdressesWhereInput {
  @Field(() => [UserAdressesWhereInput], { nullable: true })
  AND?: Array<UserAdressesWhereInput>;
  @Field(() => [UserAdressesWhereInput], { nullable: true })
  OR?: Array<UserAdressesWhereInput>;
  @Field(() => [UserAdressesWhereInput], { nullable: true })
  NOT?: Array<UserAdressesWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  idAdresse?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
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
}

@ObjectType()
export class UserAdresses {
  @Field(() => ID, { nullable: false })
  idAdresse!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
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
  @Field(() => Users, { nullable: false })
  user?: InstanceType<typeof Users>;
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
  profileId?: true;
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
  profileId!: number;
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
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
}

@InputType()
export class UsersCreateNestedOneWithoutAdressesInput {
  @Field(() => UsersCreateWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateWithoutAdressesInput)
  create?: InstanceType<typeof UsersCreateWithoutAdressesInput>;
  @Field(() => UsersCreateOrConnectWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutAdressesInput)
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutAdressesInput
  >;
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
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutProfileInput
  >;
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
  @Field(() => UserAdressesCreateNestedManyWithoutUserInput, { nullable: true })
  adresses?: InstanceType<typeof UserAdressesCreateNestedManyWithoutUserInput>;
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
  @Field(() => UserAdressesCreateNestedManyWithoutUserInput, { nullable: true })
  adresses?: InstanceType<typeof UserAdressesCreateNestedManyWithoutUserInput>;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  @Field(() => Boolean, { nullable: true })
  profileId?: true;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
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
  @Field(() => Boolean, { nullable: true })
  profileId?: true;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
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
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
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
  @Field(() => SortOrder, { nullable: true })
  profileId?: keyof typeof SortOrder;
  @Field(() => UserAdressesOrderByRelationAggregateInput, { nullable: true })
  adresses?: InstanceType<typeof UserAdressesOrderByRelationAggregateInput>;
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
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  profileId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class UsersUncheckedCreateNestedOneWithoutProfileInput {
  @Field(() => UsersCreateWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateWithoutProfileInput)
  create?: InstanceType<typeof UsersCreateWithoutProfileInput>;
  @Field(() => UsersCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutProfileInput
  >;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: InstanceType<typeof UsersWhereUniqueInput>;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  @Field(() => UserAdressesUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  adresses?: InstanceType<
    typeof UserAdressesUncheckedCreateNestedManyWithoutUserInput
  >;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
  @Field(() => UserAdressesUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  adresses?: InstanceType<
    typeof UserAdressesUncheckedCreateNestedManyWithoutUserInput
  >;
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
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUncheckedUpdateOneWithoutProfileNestedInput {
  @Field(() => UsersCreateWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateWithoutProfileInput)
  create?: InstanceType<typeof UsersCreateWithoutProfileInput>;
  @Field(() => UsersCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutProfileInput)
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutProfileInput
  >;
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
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
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
  @Field(() => UserAdressesUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  adresses?: InstanceType<
    typeof UserAdressesUncheckedUpdateManyWithoutUserNestedInput
  >;
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
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  profileId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => UserAdressesUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  adresses?: InstanceType<
    typeof UserAdressesUncheckedUpdateManyWithoutUserNestedInput
  >;
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
export class UsersUpdateOneRequiredWithoutAdressesNestedInput {
  @Field(() => UsersCreateWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateWithoutAdressesInput)
  create?: InstanceType<typeof UsersCreateWithoutAdressesInput>;
  @Field(() => UsersCreateOrConnectWithoutAdressesInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutAdressesInput)
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutAdressesInput
  >;
  @Field(() => UsersUpsertWithoutAdressesInput, { nullable: true })
  @Type(() => UsersUpsertWithoutAdressesInput)
  upsert?: InstanceType<typeof UsersUpsertWithoutAdressesInput>;
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
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutProfileInput
  >;
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
  @Field(() => UserAdressesUpdateManyWithoutUserNestedInput, { nullable: true })
  adresses?: InstanceType<typeof UserAdressesUpdateManyWithoutUserNestedInput>;
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
  @Field(() => UserAdressesUpdateManyWithoutUserNestedInput, { nullable: true })
  adresses?: InstanceType<typeof UserAdressesUpdateManyWithoutUserNestedInput>;
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
  @Field(() => String, { nullable: true })
  profileId?: string;
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
  @Field(() => StringNullableFilter, { nullable: true })
  profileId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => UserAdressesListRelationFilter, { nullable: true })
  adresses?: InstanceType<typeof UserAdressesListRelationFilter>;
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
  @Field(() => String, { nullable: true })
  profileId!: string | null;
  @Field(() => [UserAdresses], { nullable: true })
  adresses?: Array<UserAdresses>;
  @Field(() => UsersCount, { nullable: false })
  _count?: InstanceType<typeof UsersCount>;
}
