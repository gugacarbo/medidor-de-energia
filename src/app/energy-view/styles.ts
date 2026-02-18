export const globalStyles = `
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

	.metric.power {
		border-left-color: #e74c3c;
	}

	.metric.voltage {
		border-left-color: #3498db;
	}

	.metric.current {
		border-left-color: #f39c12;
	}

	.metric.energy {
		border-left-color: #2ecc71;
	}

	.metric.frequency {
		border-left-color: #9b59b6;
	}

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
`;
