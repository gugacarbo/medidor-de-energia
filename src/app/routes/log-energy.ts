import { type Request, type Response } from "express";
import { db } from "../../db/db";
import { energyLogTable } from "../../db/schema";

async function logEnergyRoute(req: Request, res: Response) {
	const data = {
		query: req.query,
		body: req.body,
		timestamp: new Date().toISOString(),
	};

	await db.insert(energyLogTable).values({
		data: JSON.stringify(data),
	});

	res.send(JSON.stringify(data, null, 2));
}

export { logEnergyRoute };
