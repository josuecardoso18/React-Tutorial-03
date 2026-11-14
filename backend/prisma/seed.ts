
import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL não configurada');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Iniciando seed do DevFlix...');

  await prisma.category.upsert({
    where: { slug: 'frontend' },
    update: { name: 'Desenvolvimento Frontend' },
    create: {
      name: 'Desenvolvimento Frontend',
      slug: 'frontend',
    },
  });

  await prisma.category.upsert({
    where: { slug: 'backend' },
    update: { name: 'Desenvolvimento Backend' },
    create: {
      name: 'Desenvolvimento Backend',
      slug: 'backend',
    },
  });

  await prisma.category.upsert({
    where: { slug: 'banco-de-dados' },
    update: { name: 'Banco de Dados' },
    create: {
      name: 'Banco de Dados',
      slug: 'banco-de-dados',
    },
  });

  console.log('Seed de categorias finalizado com sucesso!');
}

main()
  .catch((error) => {
    console.error('Erro ao executar seed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
