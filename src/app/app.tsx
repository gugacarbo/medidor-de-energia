import axios from "axios";
import { EnergyView } from "./energy-view/EnergyView";
import { env } from "@/lib/env";
import { EnergyLog } from "@/db/schema";

async function App() {
	const response = (
		await axios.get<{
			success: boolean;
			data: EnergyLog[];
		}>(env.APP_URL + "/api/energy/logs?limit=5")
	).data;

	return (
		<div>
			{response.success ? (
				<EnergyView logs={response.data} />
			) : (
				<p>Erro ao carregar os dados de energia.</p>
			)}
		</div>
	);
}

export { App };
