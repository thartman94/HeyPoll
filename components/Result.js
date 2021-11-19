import React from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	LabelList,
} from "recharts";

const data = [
	{
		name: "A",
		results: 40,
	},
	{
		name: "B",
		results: 30,
	},
	{
		name: "C",
		results: 20,
	},
];

const Result = () => {
	return (
		<ResponsiveContainer className="result" width="100%" aspect={3}>
			<BarChart width={150} height={40} data={data}>
				{/* <Tooltip /> */}
				{/* <CartesianGrid /> */}
				<Bar dataKey="results" fill="#8884d8"></Bar>

				{/* <Legend /> */}
				<XAxis dataKey="name" />
				<YAxis type="number" domain={[0, 100]} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Result;
