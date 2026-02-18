import { type Request, type Response } from "express";
import { db } from "../../db/db";
import { energyLogTable } from "../../db/schema";

async function homeRoute(req: Request, res: Response) {
	const count = await db.$count(energyLogTable);
	res.json({
		status: "ok",
		message: "API de medidor de energia funcionando!",
		count,
	});
}

export { homeRoute };
