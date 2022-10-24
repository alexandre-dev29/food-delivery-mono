import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioOperationService {
  private readonly client: Twilio;

  constructor(private configService: ConfigService) {
    this.client = new Twilio(
      this.configService.get<string>('TWILIO_ACCOUNT_SID'),
      this.configService.get<string>('TWILIO_AUTH_TOKEN')
    );
  }

  async SendOtpVerificationCode(phoneNumber: string): Promise<any> {
    return this.client.verify
      .services(this.configService.get('TWILIO_VERIFICATION_SERVICE_SID'))
      .verifications.create({
        to: phoneNumber,
        channel: 'sms',
      });
  }

  async checkTheVerificationCode(
    phoneNumber: string,
    optCode: string
  ): Promise<any> {
    return this.client.verify
      .services(this.configService.get('TWILIO_VERIFICATION_SERVICE_SID'))
      .verificationChecks.create({ to: phoneNumber, code: optCode });
  }
}
