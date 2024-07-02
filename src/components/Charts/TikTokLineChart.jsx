
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {averagePlayCountResults} from "../../../data/mock_data.js";

export default function TikTokLineChart() {

	const data = averagePlayCountResults.map(result => {
		const date = new Date(result.year, result.month - 1); // JavaScript's Date object uses 0-based months
		const month = date.toLocaleString('default', { month: 'long' }); // This will give you the full month name
		return {
			month: `${month} ${result.year}`,
			averagePlayCount: result.averagePlayCount
		};
	});

	return (<div className="card">
      <div style={{ position: 'relative', width: '100%', height: 300 }}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="averagePlayCount" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>

	);
}