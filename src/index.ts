import express, { type Request, type Response } from "express";
import fs from "fs";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.json({
		status: "ok",
		message: "API de medidor de energia funcionando!",
	});
});

app.get("/api/energy", (req: Request, res: Response) => {
	const fileName = `data/energy_data_${Date.now()}.json`;

	const data = {
		query: req.query,
		body: req.body,
		timestamp: new Date().toISOString(),
	};

	fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
