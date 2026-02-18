import { type Request, type Response } from "express";
import { db } from "@db/db";
import { energyLogTable } from "@db/schema";
import { desc } from "drizzle-orm";

async function energyLogsRoute(req: Request, res: Response) {
	try {
		const limit = parseInt(req.query.limit as string) || 10;

		const logs = await db
			.select()
			.from(energyLogTable)
			.orderBy(desc(energyLogTable.createdAt))
			.limit(limit);

		res.json({
			success: true,
			data: logs,
		});
	} catch (error) {
		console.error("Error fetching energy data:", error);
		res.status(500).json({
			success: false,
			error: "Erro ao buscar dados de energia",
		});
	}
}

export { energyLogsRoute };
