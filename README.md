# DevFlix — Tutorial 03

Projeto de aula com frontend React (Tutorial 02) e backend NestJS + PostgreSQL + Docker + Prisma 7.

## Requisitos
- Node.js 24.x
- npm
- Docker Desktop com Docker Compose

## 1. Iniciar o PostgreSQL
Na pasta raiz `DevFlix-Tutorial-03`:

```bash
docker compose up -d
docker compose ps
```

## 2. Configurar e iniciar a API
Abra outro terminal:

```bash
cd backend
```

Crie o arquivo `.env` copiando `.env.example` e mantenha a URL de conexão para o banco local do Docker.

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
```

API: http://localhost:3000
Verificação: http://localhost:3000/health
Categorias: http://localhost:3000/categories

A API também permite cadastrar uma categoria com `POST /categories`, enviando JSON:

```json
{ "name": "Desenvolvimento Frontend", "slug": "frontend" }
```

## 3. Iniciar o frontend
Em outro terminal:

```bash
cd frontend/React-Tutorial-02-DEVFLIX-CORRIGIDO
npm install
npm run dev
```

Frontend: http://localhost:5173

## Observações
- O `.env` real não está incluído no ZIP. Copie `.env.example` para `.env` dentro de `backend`.
- As credenciais do Compose são apenas para desenvolvimento local.
- A pasta `src/generated/prisma` é criada pelo comando `npx prisma generate`.
- O endpoint `/categories` está incluído como complemento ao desafio prático do tutorial.
