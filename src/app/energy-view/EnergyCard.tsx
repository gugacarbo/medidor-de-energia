import { type FunctionComponent } from "preact";
import { EnergyLog } from "@db/schema";
import { Metric } from "./Metric";
import { METRICS_CONFIG } from "./constants";

interface EnergyCardProps {
	log: EnergyLog;
}

export const EnergyCard: FunctionComponent<EnergyCardProps> = ({ log }) => {
	return (
		<div class="card">
			<div class="card-header">
				<div class="card-title">Medidor #{log.meterId}</div>
				<div class="timestamp">
					{new Date(log.createdAt).toLocaleString("pt-BR")}
				</div>
			</div>
			<div class="grid">
				{METRICS_CONFIG.map(({ key, label, unit, colorClass }) => (
					<Metric
						key={key}
						label={`${label} ${unit ? `[${unit}]` : ""}`}
						value={log[key] as number}
						colorClass={colorClass}
					/>
				))}
			</div>
		</div>
	);
};
