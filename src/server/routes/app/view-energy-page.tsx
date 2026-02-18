import { type Request, type Response } from "express";
import { db } from "@db/db";
import { energyLogTable } from "@db/schema";
import { desc } from "drizzle-orm";
import render from "preact-render-to-string";
import { EnergyView } from "../../../app/energy-view/EnergyView";

async function viewEnergyPageRoute(req: Request, res: Response) {
	try {
		const limit = parseInt(req.query.limit as string) || 10;

		const logs = await db
			.select()
			.from(energyLogTable)
			.orderBy(desc(energyLogTable.createdAt))
			.limit(limit);

		const html = "<!DOCTYPE html>" + render(<EnergyView logs={logs} />);

		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.send(html);
	} catch (error) {
		console.error("Error fetching energy data:", error);
		res.status(500).send("Erro ao buscar dados de energia");
	}
}

export { viewEnergyPageRoute };
