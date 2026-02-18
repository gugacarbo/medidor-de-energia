import { MetricConfig } from "./types";

export const METRICS_CONFIG: MetricConfig[] = [
	{
		key: "activePower",
		label: "Potência Ativa",
		unit: "W",
		colorClass: "power",
	},
	{
		key: "voltage",
		label: "Tensão",
		unit: "V",
		colorClass: "voltage",
	},
	{
		key: "current",
		label: "Corrente RMS",
		unit: "A",
		colorClass: "current",
	},
	{
		key: "consumedEnergy",
		label: "Energia Consumida",
		unit: "kWh",
		colorClass: "energy",
	},
	{
		key: "generatedEnergy",
		label: "Energia Gerada",
		unit: "kWh",
		colorClass: "energy",
	},
	{
		key: "frequency",
		label: "Frequência",
		unit: "Hz",
		colorClass: "frequency",
	},
	{
		key: "powerFactor",
		label: "Fator de Potência",
		unit: "",
		colorClass: "",
	},
	{
		key: "reactivePower",
		label: "Potência Reativa",
		unit: "VAR",
		colorClass: "",
	},
	{
		key: "apparentPower",
		label: "Potência Aparente",
		unit: "VA",
		colorClass: "",
	},
	{
		key: "phaseAngle",
		label: "Ângulo de Fase",
		unit: "°",
		colorClass: "",
	},
	{
		key: "operationTime",
		label: "Tempo de Operação",
		unit: "s",
		colorClass: "",
	},
];
