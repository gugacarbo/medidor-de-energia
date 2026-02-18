import z from "zod";

const envSchema = z.object({
	PORT: z.string().default("3000"),
	DATABASE_URL: z.string().default("file:./dev.db"),
	APP_URL: z.string().default("http://localhost:3000"),
	ENV: z.enum(["development", "production"]).default("development"),
});

const env = envSchema.parse(process.env);

export { env };
