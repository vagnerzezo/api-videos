import "dotenv/config";
import postgres from "postgres";

// Neon: use a connection string do dashboard (com pooler) e prepare: false
const sql = postgres(process.env.DATABASE_URL, {
  prepare: false, // obrigatório para Neon (connection pooling)
  ssl: "require",
});

export { sql };