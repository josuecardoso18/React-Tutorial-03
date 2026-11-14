
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        category: true,
        lessons: {
          orderBy: {
            position: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        category: true,
        lessons: {
          orderBy: {
            position: 'asc',
          },
        },
      },
    });

    if (!course) {
      throw new NotFoundException(`Curso com ID ${id} não encontrado.`);
    }

    return course;
  }
}
