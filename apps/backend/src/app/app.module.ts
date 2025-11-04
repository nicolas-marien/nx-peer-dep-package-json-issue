import { Module } from '@nestjs/common';
// import { NxEslintDepCheckPeerLoggerModule } from '@nx-eslint-dep-check-peer/logger';
import { BuildableLoggerModule } from '@nx-eslint-dep-check-peer/buildable-logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // imports: [NxEslintDepCheckPeerLoggerModule],
  imports: [BuildableLoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
