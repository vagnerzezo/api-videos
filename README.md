# Node.js — Curso

Repositório de estudos e exercícios de **Node.js**, organizado em módulos.

## Estrutura

| Pasta | Descrição | Stack |
|-------|-----------|--------|
| **01** | Introdução e APIs com Express | Express 5, Joi (validação), ES modules |
| **02 - Rocketseat** | API com Fastify e banco de dados | Fastify 5, Postgres, dotenv |

---

## Módulo 01

API com **Express** e validação com **Joi**.

### Como rodar

```bash
cd 01
npm install
node app.js
```

### Principais arquivos

- `app.js` — servidor Express
- `validacao.js` — validação com Joi
- `tabela.js` — lógica de tabela/dados

---

## Módulo 02 - Rocketseat

API com **Fastify** e persistência em **PostgreSQL** (ou banco em memória).

### Como rodar

```bash
cd "02 - Rocketseat"
npm install
npm run dev
```

### Scripts

- `npm start` — inicia o servidor
- `npm run dev` — inicia com `--watch` para recarregar ao editar

### Principais arquivos

- `server.js` — servidor Fastify
- `db.js` — configuração do banco
- `database-postgres.js` — implementação com Postgres
- `database-memory.js` — implementação em memória
- `create-table.js` — criação de tabelas
- `routes.http` — exemplos de requisições HTTP

---

## Requisitos

- **Node.js** (versão compatível com ES modules)
- Para o módulo 02: **PostgreSQL** (se for usar o banco real)

---

## Licença

ISC
