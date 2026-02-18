import { EnergyView } from "./energy-view/EnergyView";

async function App() {
	const logs = await fetch(
		"http://localhost:3000/api/energy/logs?limit=5",
	).then(res => res.json());

	return (
		<div>
			{logs.success ? (
				<EnergyView logs={logs.data} />
			) : (
				<p>Erro ao carregar os dados de energia.</p>
			)}
		</div>
	);
}

export { App };
