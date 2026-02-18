import { type Express } from "express";
import { logEnergyRoute } from "./api/log-energy";
import { apiIndex } from "./api/api-index";
import { energyLogsRoute } from "./api/energy-logs";
import { appRoute } from "./app/appRoute";

function createRoutes(app: Express) {
	//? app
	app.get("/", appRoute);

	//| api
	app.get("/api", apiIndex);
	app.get("/api/energy/logs", energyLogsRoute);

	app.post("/api/energy", logEnergyRoute);
}

export { createRoutes };
