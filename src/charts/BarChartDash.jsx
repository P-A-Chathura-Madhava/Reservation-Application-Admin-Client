// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Year", "Sales", "Expenses", "Profit"],
//   ["2014", 1000, 400, 200],
//   ["2015", 1170, 460, 250],
//   ["2016", 660, 1120, 300],
//   ["2017", 1030, 540, 350],
// ];

// export const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017",
//   },
//   colors: ["rgb(53, 138, 148)", "rgb(37,11,165)", "#188310"],
// };

// export default function BarChartDash() {
//   return (
//     <Chart
//       chartType="Bar"
//       width="100%"
//       height="350px"
//       data={data}
//       options={options}
//     />
//   );
// }

// import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//   "Page A",
//   "Page B",
//   "Page C",
//   "Page D",
//   "Page E",
//   "Page F",
//   "Page G",
// ];

// const BarChartDash = () => {
//   return (
//     <div className="barChart">
//       <BarChart
//         width={700}
//         height={350}
//         series={[
//           { data: pData, label: "pv", id: "pvId", stack: "total", hideTooltip: true },
//           { data: uData, label: "uv", id: "uvId", stack: "total", hideTooltip: true },
//         ]}
//         xAxis={[{ data: xLabels, scaleType: "band", hideTooltip: true }]}
//       />
//     </div>
//   );
// };

// export default BarChartDash;

import * as React from "react";
import { ChartContainer, BarPlot } from "@mui/x-charts";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function BarChartDash() {
  return (
    <div className="barChart">
      <ChartContainer
        width={700}
        height={350}
        series={[{ data: uData, label: "uv", type: "bar" }]}
        xAxis={[{ scaleType: "band", data: xLabels }]}
      >
        <BarPlot />
      </ChartContainer>
    </div>
  );
}
