import { type FunctionComponent } from "preact";
import { MetricProps } from "./types";

export const Metric: FunctionComponent<MetricProps> = ({
	label,
	value,
	colorClass = "",
}) => {
	return (
		<div class={`metric ${colorClass}`}>
			<div class="metric-label">{label}</div>
			<div class="metric-value">{value.toFixed(2)}</div>
		</div>
	);
};
