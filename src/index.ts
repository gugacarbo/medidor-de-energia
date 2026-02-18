import { createServer } from "./server/server";

async function main() {
	try {
		await createServer();
	} catch (error) {
		console.error("Error starting server:", error);
	}
}

try {
	main();
} catch (error) {
	console.error("Error in main execution:", error);
}
