import { Injectable } from '@nestjs/common';
import { Prisma, YouTube } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DbService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<YouTube | null> {
    return this.prisma.youTube.findUnique({
      where: { id },
    });
  }

  async createAllRelatedData(
    data: Prisma.YouTubeCreateInput,
  ): Promise<YouTube> {
    return this.prisma.youTube.create({
      data,
    });
  }
}
