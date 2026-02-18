import express, { type Express, type Request, type Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
	res.json({
		file: __filename,
		message: __dirname,
	});
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
