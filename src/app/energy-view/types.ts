export interface EnergyViewProps {
	logs: EnergyLog[];
}

export interface EnergyLog {
	id: number;
	meterId: number;
	activePower: number;
	voltage: number;
	current: number;
	consumedEnergy: number;
	generatedEnergy: number;
	frequency: number;
	powerFactor: number;
	reactivePower: number;
	apparentPower: number;
	phaseAngle: number;
	operationTime: number;
	createdAt: Date;
}

export interface MetricConfig {
	key: keyof EnergyLog;
	label: string;
	unit: string;
	colorClass: string;
}

export interface MetricProps {
	label: string;
	value: number;
	colorClass?: string;
}
