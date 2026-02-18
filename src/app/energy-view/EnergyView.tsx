import { type FunctionComponent } from "preact";
import { EnergyLog } from "@db/schema";
import { EnergyCard } from "./EnergyCard";
import { globalStyles } from "./styles";

interface EnergyViewProps {
	logs: EnergyLog[];
}

const EnergyView: FunctionComponent<EnergyViewProps> = ({ logs }) => {
	return (
		<html lang="pt-BR">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Medidor de Energia</title>
				<style>{globalStyles}</style>
			</head>
			<body>
				<div class="container">
					<h1>⚡ Medidor de Energia</h1>
					{logs.length === 0 ? (
						<div class="no-data">Nenhum dado registrado ainda</div>
					) : (
						logs.map(log => <EnergyCard key={log.id} log={log} />)
					)}
				</div>
			</body>
		</html>
	);
};

export { EnergyView };
