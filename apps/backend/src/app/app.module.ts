import { Module } from '@nestjs/common';
import { NxEslintDepCheckPeerLoggerModule } from '@nx-eslint-dep-check-peer/logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NxEslintDepCheckPeerLoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
