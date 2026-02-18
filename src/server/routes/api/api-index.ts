import { type Request, type Response } from "express";
import { energyLogTable } from "@db/schema";
import { db } from "@db/db";

async function apiIndex(_: Request, res: Response) {
	const count = await db.$count(energyLogTable);

	res.json({
		status: "ok",
		message: "API de medidor de energia funcionando!",
		count,
	});
}

export { apiIndex };
