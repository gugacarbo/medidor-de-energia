import z from "zod";

const envSchema = z.object({
	PORT: z.string().default("3000"),
	DATABASE_URL: z.string().default("file:./dev.db"),
	ENV: z.enum(["development", "production"]).default("development"),
});

const env = envSchema.parse(process.env);

export { env };
