import express, { type Express } from "express";
import { createRoutes } from "./routes/routes";
import { env } from "@/lib/env";

async function createServer(): Promise<Express> {
	const app = express();

	createRoutes(app);

	const port = env.PORT;

	app.listen(port, () => {
		console.log(`Listening on port ${port}...`);
	});

	return app;
}

export { createServer };
