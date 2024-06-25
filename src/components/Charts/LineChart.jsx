
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function TikTokLineChart() {
	const data = [
		{ month: 'January', sales: 1000 },
		{ month: 'February', sales: 3000 },
		{ month: 'March', sales: 1000 },
		{ month: 'April', sales: 4000 },
		{ month: 'May', sales: 3000 },
		{ month: 'June', sales: 1000 },
		{ month: 'July', sales: 5000 },
		// Add more data points as needed
	];

	return (
		<LineChart
			width={500}
			height={300}
			data={data}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="month" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
		</LineChart>
	);
}