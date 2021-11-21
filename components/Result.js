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

const colors = [
	"#2F55B2",
	"#25ba0e",
	"#f55919",
	"#113450",
	"#ee11aa",
	"#be7457",
	"#cc0a53",
];

const Result = ({ answerChoices }) => {
	const data = answerChoices.map((answer, i) => ({
		name: answer,
		key: i,
		results: 20,
	}));

	return (
		<ResponsiveContainer className="result" width="100%" aspect={2}>
			<BarChart width={150} height={40} data={data}>
				{/* <Tooltip /> */}
				{/* <CartesianGrid /> */}
				<Bar dataKey="results" label={{ position: "top" }}>
					{data.map((entry, j) => (
						<Cell key={j} fill={colors[j % 7]} />
					))}
				</Bar>

				{/* <Legend /> */}
				<XAxis dataKey="name" />
				<YAxis type="number" domain={[0, 100]} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Result;
