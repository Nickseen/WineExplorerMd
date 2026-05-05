import "dotenv/config";
import cors from "cors";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import authRouter from "./routes/auth.js";
import pairingsRouter from "./routes/pairings.js";
import submissionsRouter from "./routes/submissions.js";
import wineriesRouter from "./routes/wineries.js";
import winesRouter from "./routes/wines.js";

const app = express();
const PORT = process.env.PORT ?? 3001;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://nickseen.github.io",
  ...(process.env.ALLOWED_ORIGIN ? [process.env.ALLOWED_ORIGIN] : []),
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// ── Swagger ──────────────────────────────────────────────────────────────────
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vinaria Explorer API",
      version: "1.0.0",
      description:
        "REST API for the Vinaria Explorer Moldova wine catalog.\n\n" +
        "**Authentication**: obtain a JWT from `POST /api/token` and pass it as `Bearer <token>` in the `Authorization` header.\n\n" +
        "**Roles**:\n" +
        "- `VISITOR` — read-only\n" +
        "- `WRITER` — create/update entities, submit wines for review\n" +
        "- `ADMIN` — full access including moderation\n\n" +
        "**Token expiry**: 1 minute (demo setting)",
    },
    servers: [{ url: `http://localhost:${PORT}/api` }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Wine: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            type: { type: "string", enum: ["red", "white", "rose", "sparkling"] },
            grapeVariety: { type: "string" },
            year: { type: "integer" },
            price: { type: "number" },
            region: { type: "string" },
            body: { type: "string", enum: ["light", "medium", "full"] },
            sweetness: { type: "string", enum: ["dry", "semi-dry", "semi-sweet", "sweet"] },
            alcoholPercent: { type: "number" },
            sourceType: { type: "string", enum: ["seed", "user", "producer-approved"] },
          },
        },
        WineInput: {
          type: "object",
          required: ["name", "type", "grapeVariety", "year", "price", "region"],
          properties: {
            name: { type: "string" },
            type: { type: "string", enum: ["red", "white", "rose", "sparkling"] },
            grapeVariety: { type: "string" },
            year: { type: "integer" },
            price: { type: "number" },
            region: { type: "string" },
            body: { type: "string" },
            sweetness: { type: "string" },
            alcoholPercent: { type: "number" },
            aromaNotes: { type: "array", items: { type: "string" } },
            pairingTags: { type: "array", items: { type: "string" } },
            servingTemp: { type: "string" },
          },
        },
        SubmissionInput: {
          type: "object",
          required: ["producerName", "contactInfo", "wineName", "wineType", "grapeVariety", "year", "region"],
          properties: {
            producerName: { type: "string" },
            contactInfo: { type: "string" },
            wineName: { type: "string" },
            wineType: { type: "string", enum: ["red", "white", "rose", "sparkling"] },
            grapeVariety: { type: "string" },
            year: { type: "integer" },
            price: { type: "number", description: "Suggested retail price in MDL" },
            region: { type: "string" },
            sweetness: { type: "string" },
            body: { type: "string" },
            alcoholPercent: { type: "number" },
            aromaNotes: { type: "array", items: { type: "string" } },
            suggestedPairingTags: { type: "array", items: { type: "string" } },
            productionMethod: { type: "string" },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.ts"],
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/token", authRouter);
app.use("/api/wines", winesRouter);
app.use("/api/wineries", wineriesRouter);
app.use("/api/pairings", pairingsRouter);
app.use("/api/submissions", submissionsRouter);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`\n🍷 Vinaria API running → http://localhost:${PORT}`);
  console.log(`📖 Swagger UI         → http://localhost:${PORT}/api/docs\n`);
});
