import { type FunctionComponent } from "preact";

interface EnergyLog {
	id: number;
	meterId: string;
	voltage: number;
	current: number;
	activePower: number;
	reactivePower: number;
	apparentPower: number;
	powerFactor: number;
	frequency: number;
	phaseAngle: number;
	consumedEnergy: number;
	generatedEnergy: number;
	operationTime: number;
	createdAt: Date;
}

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
				<style>{`
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
					}
					body {
						font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
						background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
						min-height: 100vh;
						padding: 20px;
					}
					.container {
						max-width: 1200px;
						margin: 0 auto;
					}
					h1 {
						color: white;
						text-align: center;
						margin-bottom: 30px;
						font-size: 2.5rem;
						text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
					}
					.card {
						background: white;
						border-radius: 12px;
						padding: 25px;
						margin-bottom: 20px;
						box-shadow: 0 10px 30px rgba(0,0,0,0.2);
						transition: transform 0.2s;
					}
					.card:hover {
						transform: translateY(-5px);
					}
					.card-header {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 20px;
						padding-bottom: 15px;
						border-bottom: 2px solid #f0f0f0;
					}
					.card-title {
						font-size: 1.2rem;
						color: #667eea;
						font-weight: 600;
					}
					.timestamp {
						color: #666;
						font-size: 0.9rem;
					}
					.grid {
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
						gap: 15px;
					}
					.metric {
						background: #f8f9fa;
						padding: 15px;
						border-radius: 8px;
						border-left: 4px solid #667eea;
					}
					.metric-label {
						font-size: 0.85rem;
						color: #666;
						margin-bottom: 5px;
					}
					.metric-value {
						font-size: 1.5rem;
						font-weight: 700;
						color: #333;
					}
					.metric.power { border-left-color: #e74c3c; }
					.metric.voltage { border-left-color: #3498db; }
					.metric.current { border-left-color: #f39c12; }
					.metric.energy { border-left-color: #2ecc71; }
					.metric.frequency { border-left-color: #9b59b6; }
					.no-data {
						text-align: center;
						color: white;
						font-size: 1.2rem;
						padding: 50px;
					}
					.refresh-btn {
						display: block;
						margin: 0 auto 20px;
						padding: 12px 30px;
						background: white;
						color: #667eea;
						border: none;
						border-radius: 25px;
						font-size: 1rem;
						font-weight: 600;
						cursor: pointer;
						box-shadow: 0 5px 15px rgba(0,0,0,0.2);
						transition: all 0.3s;
					}
					.refresh-btn:hover {
						transform: translateY(-2px);
						box-shadow: 0 8px 20px rgba(0,0,0,0.3);
					}
				`}</style>
			</head>
			<body>
				<div class="container">
					<h1>⚡ Medidor de Energia</h1>
					<button class="refresh-btn" onClick={() => location.reload()}>
						🔄 Atualizar
					</button>
					{logs.length === 0 ? (
						<div class="no-data">Nenhum dado registrado ainda</div>
					) : (
						logs.map(log => (
							<div class="card" key={log.id}>
								<div class="card-header">
									<div class="card-title">Medidor #{log.meterId}</div>
									<div class="timestamp">
										{new Date(log.createdAt).toLocaleString("pt-BR")}
									</div>
								</div>
								<div class="grid">
									<div class="metric power">
										<div class="metric-label">Potência Ativa [W]</div>
										<div class="metric-value">{log.activePower.toFixed(2)}</div>
									</div>
									<div class="metric voltage">
										<div class="metric-label">Tensão [V]</div>
										<div class="metric-value">{log.voltage.toFixed(2)}</div>
									</div>
									<div class="metric current">
										<div class="metric-label">Corrente RMS [A]</div>
										<div class="metric-value">{log.current.toFixed(2)}</div>
									</div>
									<div class="metric energy">
										<div class="metric-label">Energia Consumida [kWh]</div>
										<div class="metric-value">
											{log.consumedEnergy.toFixed(2)}
										</div>
									</div>
									<div class="metric energy">
										<div class="metric-label">Energia Gerada [kWh]</div>
										<div class="metric-value">
											{log.generatedEnergy.toFixed(2)}
										</div>
									</div>
									<div class="metric frequency">
										<div class="metric-label">Frequência [Hz]</div>
										<div class="metric-value">{log.frequency.toFixed(2)}</div>
									</div>
									<div class="metric">
										<div class="metric-label">Fator de Potência</div>
										<div class="metric-value">{log.powerFactor.toFixed(2)}</div>
									</div>
									<div class="metric">
										<div class="metric-label">Potência Reativa [VAR]</div>
										<div class="metric-value">
											{log.reactivePower.toFixed(2)}
										</div>
									</div>
									<div class="metric">
										<div class="metric-label">Potência Aparente [VA]</div>
										<div class="metric-value">
											{log.apparentPower.toFixed(2)}
										</div>
									</div>
									<div class="metric">
										<div class="metric-label">Ângulo de Fase [°]</div>
										<div class="metric-value">{log.phaseAngle.toFixed(2)}</div>
									</div>
									<div class="metric">
										<div class="metric-label">Tempo de Operação [s]</div>
										<div class="metric-value">
											{log.operationTime.toFixed(2)}
										</div>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</body>
		</html>
	);
};

export { EnergyView };
export type { EnergyLog };
