import { type Express } from "express";
import { logEnergyRoute } from "./log-energy";
import { homeRoute } from "./home";

function createRoutes(app: Express) {
	app.get("/", homeRoute);
	app.get("/api/energy", logEnergyRoute);
}

export { createRoutes };
