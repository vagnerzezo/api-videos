# Node.js API — Fastify + PostgreSQL

**Endpoint (produção):** https://api-videos-lmft.onrender.com

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

## Endpoints da API

**URL oficial (produção):** [https://api-videos-lmft.onrender.com](https://api-videos-lmft.onrender.com)

**Local:** `http://localhost:3333`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/videos` | Cria um novo vídeo |
| `GET` | `/videos` | Lista todos os vídeos (opcional: `?search=termo`) |
| `PUT` | `/videos/:id` | Atualiza um vídeo pelo ID |
| `DELETE` | `/videos/:id` | Remove um vídeo pelo ID |

### Exemplos

**Criar vídeo** — `POST /videos`

```json
{
  "title": "Video node",
  "description": "Video 1 description",
  "duration": 100
}
```

- **Resposta:** `201 Created` (sem corpo).

**Listar vídeos** — `GET /videos`

- Query opcional: `?search=termo` para filtrar por título/descrição.
- **Resposta:** `200 OK` com array de vídeos.

**Atualizar vídeo** — `PUT /videos/:id`

```json
{
  "title": "Video 2",
  "description": "Video 13 description",
  "duration": 100
}
```

- **Resposta:** `204 No Content`.

**Deletar vídeo** — `DELETE /videos/:id`

- **Resposta:** `204 No Content`.

> O arquivo `routes.http` contém exemplos prontos para testar no VS Code/Cursor (extensão REST Client).

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


## Licença

ISC
