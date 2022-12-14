import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), YoutubeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
