import { type Express } from "express";
import { logEnergyRoute } from "./log-energy";
import { homeRoute } from "./home";
import { viewEnergyRoute } from "./view-energy";

function createRoutes(app: Express) {
	app.get("/", homeRoute);
	app.get("/api/energy", logEnergyRoute);
	app.get("/view", viewEnergyRoute);
}

export { createRoutes };
