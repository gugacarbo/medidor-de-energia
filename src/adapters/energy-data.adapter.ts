export interface RawEnergyData {
	id?: string;
	pa?: string;
	qa?: string;
	sa?: string;
	uarms?: string;
	iarms?: string;
	pfa?: string;
	pga?: string;
	freq?: string;
	epa_c?: string;
	epa_g?: string;
	tpsd?: string;
}

export interface EnergyData {
	meterId: string;
	activePower: number;
	reactivePower: number;
	apparentPower: number;
	voltage: number;
	current: number;
	powerFactor: number;
	phaseAngle: number;
	frequency: number;
	consumedEnergy: number;
	generatedEnergy: number;
	operationTime: number;
}

export function adaptEnergyData(raw: RawEnergyData): EnergyData {
	return {
		meterId: raw.id || "0",
		activePower: parseFloat(raw.pa || "0"),
		reactivePower: parseFloat(raw.qa || "0"),
		apparentPower: parseFloat(raw.sa || "0"),
		voltage: parseFloat(raw.uarms || "0"),
		current: parseFloat(raw.iarms || "0"),
		powerFactor: parseFloat(raw.pfa || "0"),
		phaseAngle: parseFloat(raw.pga || "0"),
		frequency: parseFloat(raw.freq || "0"),
		consumedEnergy: parseFloat(raw.epa_c || "0"),
		generatedEnergy: parseFloat(raw.epa_g || "0"),
		operationTime: parseFloat(raw.tpsd || "0"),
	};
}
