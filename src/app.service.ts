import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const nodeEnv = this.configService.get<string>('NODE_ENV');
    if (nodeEnv === 'development') {
      return 'This is the development environment message!';
    } else if (nodeEnv === 'production') {
      return 'This is the production environment message!';
    } else {
      return 'This is the default environment message!';
    }
  }
}
