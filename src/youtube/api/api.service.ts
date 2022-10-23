import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { VideoData, ResponseFormat } from './interfaces/types';

@Injectable()
export class ApiService {
  private readonly logger = new Logger(ApiService.name);

  async getVideo(videoId: string): Promise<VideoData> {
    const endpoint = 'https://www.googleapis.com/youtube/v3/videos';
    const response = await axios.get(endpoint, {
      method: 'GET',
      params: {
        id: videoId,
        key: process.env.YOUTUBE_API_KEY,
        part: 'snippet,statistics,status',
        fields: 'items(id,snippet,statistics,status)', // レスポンスデータを絞る
      },
    });

    const data = response.data as ResponseFormat;
    const videoData = data.items[0];

    this.logger.debug('Finished the getVideo method.');

    return videoData;
  }
}
