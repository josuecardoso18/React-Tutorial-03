
import { describe, it, expect, vi } from 'vitest';
import { NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

describe('CoursesService', () => {
  const mockPrisma = {
    course: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
    },
  };

  const service = new CoursesService(
    mockPrisma as unknown as PrismaService,
  );

  it('deve listar todos os cursos', async () => {
    const courses = [
      { id: 1, title: 'React para Iniciantes' },
      { id: 2, title: 'Node.js para Iniciantes' },
    ];

    mockPrisma.course.findMany.mockResolvedValue(courses);

    const result = await service.findAll();

    expect(result).toEqual(courses);
    expect(mockPrisma.course.findMany).toHaveBeenCalled();
  });

  it('deve buscar um curso pelo ID', async () => {
    const course = {
      id: 1,
      title: 'React para Iniciantes',
      lessons: [],
    };

    mockPrisma.course.findUnique.mockResolvedValue(course);

    const result = await service.findOne(1);

    expect(result).toEqual(course);
    expect(mockPrisma.course.findUnique).toHaveBeenCalled();
  });

  it('deve retornar erro quando o curso não existir', async () => {
    mockPrisma.course.findUnique.mockResolvedValue(null);

    await expect(service.findOne(999)).rejects.toThrow(
      NotFoundException,
    );
  });
});
