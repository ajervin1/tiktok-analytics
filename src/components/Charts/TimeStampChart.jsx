import Chart from "react-apexcharts";

export default function TimeStampChart() {
	let options = {
		chart: {
			type: "line",
			animations: {
				initialAnimation: {
					enabled: false
				}
			},
			toolbar: {
				show: false
			}
		},
		xaxis: {
			type: 'datetime'
		}
	}
	let series = [
		{
			name: "Series 1",
			data: [
				[ 1486684800000, 34 ],
				[ 1486771200000, 43 ],
				[ 1486857600000, 31 ],
				[ 1486944000000, 43 ],
				[ 1487030400000, 33 ],
				[ 1487116800000, 52 ]
			]
		}
	]

	return <div className="">
		<Chart options={options} series={series} height={500} width={500} />
	</div>
}