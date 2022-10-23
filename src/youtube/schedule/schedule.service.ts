import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { DomainService } from '../domain/domain.service';

// 広告を取得する動画のID
const SOURCE_VIDEO_ID = process.env.SOURCE_VIDEO_ID;

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);
  constructor(private readonly domainService: DomainService) {}

  @Cron('*/10 * * * * *')
  async scheduleForDomainOfFetchAndSaveYouTubeAdsData() {
    this.logger.debug('Started "fetchAndSaveYouTubeAdsData"');
    await this.domainService.fetchAndSaveYouTubeAdsData(SOURCE_VIDEO_ID);
    this.logger.debug('Finished "fetchAndSaveYouTubeAdsData"');
  }
}
