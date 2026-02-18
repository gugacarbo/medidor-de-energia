import { type Request, type Response } from "express";

async function homeRoute(req: Request, res: Response) {
	res.json({
		status: "ok",
		message: "API de medidor de energia funcionando!",
	});
}

export { homeRoute };
