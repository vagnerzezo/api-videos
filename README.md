# Node.js API — Fastify + PostgreSQL

API REST desenvolvida com Node.js e Fastify, com camada de persistência desacoplada e suporte a:

- PostgreSQL
- Banco em memória (para desenvolvimento e testes)

O projeto foi estruturado com foco em clareza arquitetural, separação de responsabilidades e extensibilidade.

---

## Stack

- Node.js (ES Modules)
- Fastify
- PostgreSQL
- Arquitetura modular
- Injeção simples de dependência para camada de dados

---

## Estrutura do Projeto

```
api-videos/
├── server.js              # Inicialização e configuração do Fastify
├── db.js                  # Seleção da implementação de banco
├── database-postgres.js   # Implementação com PostgreSQL
├── database-memory.js     # Implementação em memória
├── create-table.js        # Script de criação da tabela
├── routes.http            # Exemplos de requisições HTTP
└── package.json
```

---

## Instalação

```bash
cd api-videos
npm install
```

---

## Execução

**Ambiente de Desenvolvimento (watch mode)**

```bash
npm run dev
```

**Execução padrão**

```bash
npm start
```

---

## Banco de Dados

### Usando PostgreSQL

1. Configure a conexão no arquivo correspondente.
2. Crie a tabela:

```bash
node create-table.js
```

3. Inicie a aplicação.

### Usando Banco em Memória

A troca da implementação é feita no arquivo **`db.js`**.

Ideal para:

- Testes rápidos
- Desenvolvimento local
- Ambiente sem dependência externa

---

## Arquitetura

O projeto segue um modelo simples e escalável:

- `server.js` → configuração da aplicação
- `db.js` → abstração da camada de persistência
- `database-*` → implementações concretas
- Separação clara entre lógica HTTP e dados

Isso permite:

- Trocar facilmente o banco
- Evoluir para padrão Repository
- Adicionar validação e middlewares
- Implementar autenticação
- Integrar testes automatizados

---

## Requisitos

- Node.js (versão com suporte a ES Modules)
- PostgreSQL (opcional)

---

## Próximas Evoluções Sugeridas

- Validação com Zod ou Yup
- Schema validation do Fastify
- Logger estruturado
- Testes com Vitest
- Docker + docker-compose
- Migrations versionadas
- Camada de services
- DTOs e tipagem com TypeScript

---

## Licença

ISC
