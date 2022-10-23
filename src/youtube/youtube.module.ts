import { Module } from '@nestjs/common';
import { ScrapingService } from './scraping/scraping.service';
import { ApiService } from './api/api.service';
import { DbService } from './db/db.service';
import { ScheduleService } from './schedule/schedule.service';
import { DomainService } from './domain/domain.service';
import { PrismaService } from '@/prisma.service';

@Module({
  providers: [
    ScrapingService,
    ApiService,
    DbService,
    ScheduleService,
    DomainService,
    PrismaService,
  ],
})
export class YoutubeModule {}
