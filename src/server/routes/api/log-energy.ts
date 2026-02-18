import { type Request, type Response } from "express";
import { db } from "@/db/db";
import { energyLogTable } from "@db/schema";

import {
	adaptEnergyData,
	type RawEnergyData,
} from "@adapters/energy-data.adapter";

async function logEnergyRoute(req: Request, res: Response) {
	try {
		const rawData = req.query as RawEnergyData;
		const adaptedData = adaptEnergyData(rawData);

		await db.insert(energyLogTable).values({
			...adaptedData,
			rawData: rawData,
		});

		res.json({
			success: true,
			data: adaptedData,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error("Error logging energy data:", error);
		res.status(500).json({
			success: false,
			error: "Failed to log energy data",
			stack: error,
		});
	}
}

export { logEnergyRoute };
