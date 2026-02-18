import express, { type Express } from "express";
import { createRoutes } from "./routes/routes";

async function createServer(): Promise<Express> {
	const app = express();

	createRoutes(app);

	const port = process.env.PORT ?? 3000;

	app.listen(port, () => {
		console.log(`Listening on port ${port}...`);
	});

	return app;
}

export { createServer };
