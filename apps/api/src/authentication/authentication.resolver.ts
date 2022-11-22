import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { AuthUser, CreateOneAuthUserArgs, UpdateOneAuthUserArgs } from '@food-delivery-mono/data-access';
import { CreateUserInput } from './Dto/auth-user.dto';
import { LoginResponse } from '@food-delivery-mono/shared-types';
import { UseGuards } from '@nestjs/common';
import { AccessGuard, UseAbility } from 'nest-casl';
import { AuthSecurityActions, MainAuthGuardGuard } from '@food-delivery-mono/app-security';

@Resolver(() => AuthUser)
export class AuthenticationResolver {
  constructor(private readonly authService: AuthenticationService) {}

  @Mutation(() => AuthUser)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(AuthSecurityActions.manage, AuthUser)
  createAuth(@Args('createAuthInput') createAuthInput: CreateOneAuthUserArgs) {
    return this.authService.create(createAuthInput);
  }

  @Query(() => [AuthUser], { name: 'getAllAuths' })
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(AuthSecurityActions.readAll, AuthUser)
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => AuthUser, { name: 'getOneAuth' })
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(AuthSecurityActions.readOne, AuthUser)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.authService.findOne(id);
  }

  @Mutation(() => AuthUser)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(AuthSecurityActions.manage, AuthUser)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateOneAuthUserArgs) {
    return this.authService.update(updateAuthInput);
  }

  @Mutation(() => AuthUser)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(AuthSecurityActions.manage, AuthUser)
  removeAuth(@Args('id', { type: () => String }) id: string) {
    return this.authService.remove(id);
  }

  @Mutation(() => AuthUser, { name: 'signUp' })
  registerUser(
    @Args('registerUserInputs', { type: () => CreateUserInput })
    { password, phoneNumber, username }: CreateUserInput
  ) {
    return this.authService.registerUser({
      phoneNumber,
      username,
      password,
    });
  }

  @Mutation(() => LoginResponse, { name: 'loginUser' })
  loginUser(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('password', { type: () => String }) password: string,
    @Context() context: any
  ) {
    console.log(context);
    return this.authService.loginUser(phoneNumber, password, context.reply);
  }

  @Mutation(() => Boolean, { name: 'confirmPhoneNumber' })
  confirmPhoneNumber(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('otpCode', { type: () => String }) otpCode: string
  ) {
    return this.authService.confirmPhoneNumber(phoneNumber, otpCode);
  }

  @Mutation(() => Boolean, { name: 'confirmOtpForForgot' })
  confirmOtpForForgot(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('otpCode', { type: () => String }) otpCode: string
  ) {
    return this.authService.confirmOtpForForgot(phoneNumber, otpCode);
  }

  @Mutation(() => Boolean, { name: 'changePassword' })
  changePassword(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('newPassword', { type: () => String }) newPassword: string
  ) {
    return this.authService.changeUserPassword(phoneNumber, newPassword);
  }

  @Mutation(() => Boolean, { name: 'startForgotPassword' })
  forgotPasswordStart(@Args('phoneNumber', { type: () => String }) phoneNumber: string) {
    return this.authService.askingForOtpCode(phoneNumber);
  }

  @Mutation(() => Boolean, { name: 'askingForOtpCode' })
  askingForOtpCode(@Args('phoneNumber', { type: () => String }) phoneNumber: string) {
    return this.authService.askingForOtpCode(phoneNumber);
  }

  @Mutation(() => Boolean, { name: 'refreshToken' })
  refreshToken(@Args('oldRefreshToken', { type: () => String }) refreshToken: string) {
    return this.authService.refreshUserRefreshToken(refreshToken);
  }
}
