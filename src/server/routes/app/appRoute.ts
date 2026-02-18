import { App } from "@/app/app";
import { type Request, type Response } from "express";

import render from "preact-render-to-string";

async function appRoute(req: Request, res: Response) {
	try {
		const html = "<!DOCTYPE html>" + render(App());
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.send(html);
	} catch (error) {
		console.error("Error fetching energy data:", error);
		res.status(500).send("Erro ao buscar dados de energia");
	}
}

export { appRoute };
