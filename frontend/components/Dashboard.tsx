"use client"

import { BarChart, PieChart, Gauge, gaugeClasses } from "@mui/x-charts";

export default function Dashboard({  }) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className = "flex flex-col w-2/5 bg-white">
        <div className="flex flex-row h-1/5 outline outline-green-500 m-3 rounded-lg overflow-scroll">
          <div className="flex flex-col">
            <span className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-3">
              Summary:
            </span>
            <div className="flex">
              <span  className="text-black underline tracking-wide font-mono font-semibold text-sm lg:text-l m-1 lg:m-3">
                Credits:
              </span>
              <span className="text-green-700 tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-3">
                $202.30
              </span>
            </div>
            <div className="flex">
              <span  className="text-black underline tracking-wide font-mono font-semibold text-sm lg:text-l m-1 lg:m-3">
                Debits:
              </span>
              <span className="text-red-700 tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-3">
                $89.00
              </span>
            </div>
          </div>
          <div className="w-1 bg-lime-700 rounded-md ml-12 mx-2 mt-2 mb-2"></div>
          <div className="flex flex-col h-full">
            <span className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-3">
              Sentiment:
            </span>
            <div className="flex flex-row justify-center items-center">
              <span className="text-green-600 tracking-wide font-mono font-semibold text-xl m-1 lg:m-3">
                Good!
              </span>
              <span className="text-green-600">
              🙂
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-2/5 outline outline-green-500 m-3 rounded-lg overflow-scroll">
          <span className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-2">
            This Month:
          </span>
          <div className="flex flex-row">
          <p className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-base m-1 lg:m-2">
            Net. Position:
          </p>
          <span className = "text-green-700 font-mono font-semibold text-base lg:text-base  m-1 lg:m-2">+ $200.00</span>
          </div>
          <div className="flex m-1 justify-center items-center h-full">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'Expenditure' },
                    { id: 1, value: 15, label: 'Income' },
                  ],
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 150,
                  cy: 110,
                }
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col h-2/5 outline outline-green-500 m-3 rounded-lg overflow-scroll">
          <span className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-2">
            This Year:
          </span>
          <div className="flex flex-row">
            <p className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-base m-1 lg:m-2">
              Net. Position:
            </p>
            <span className = "text-red-700 font-mono font-semibold text-base lg:text-base  m-1 lg:m-2">
              - $360.00
            </span>
          </div>
          <div className="flex m-1 justify-center items-center h-full">
            <PieChart
              series={[
                {
                  data: [
                    { id: 2, value: 30, label: 'Expenditure' },
                    { id: 3, value: 15, label: 'Income' },
                  ],
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 150,
                  cy: 110,
                }
              ]}
            />
          </div>
        </div>
      </div>
      <div className = "flex flex-col w-3/5 bg-white">
        <div className="flex flex-col h-1/2 outline outline-green-500 m-3 rounded-lg overflow-scroll">
          <span className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-3">
            Money Flow:
          </span>
          <div className="flex m-1 lg:m-4">
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['November', 'December', 'January'] , tickPlacement:"start", tickLabelPlacement:"middle"}]}
              series={[
              { data: [4, 3, 5], label: "Income"},
              { data: [1, 6, 3], label: "Expenditure"},
              { data: [4, 3, 5], stack: 'A', label: "Total (Y)"},
              { data: [1, 6, 3], stack: 'A', label: "Total (C)"}
            ]}
              width={850}
              height={350}
            />
          </div>
        </div>
        <div className="flex flex-col h-1/2 outline outline-green-500 m-3 rounded-lg overflow-scroll">
          <span className="text-black underline tracking-wide font-mono font-semibold text-base lg:text-xl m-1 lg:m-3">
            Budget Progress:
          </span>
          <div className="flex m-1 h-full w-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 m-1 w-full h-full items-center justify-center">
              <div className="flex flex-col m-1 items-center justify-center h-5/6">
                <span className="text-black tracking-wide font-mono font-semibold text-base m-1">
                  Food/Beverage
                </span>
                <Gauge
                  value={21}
                  startAngle={-110}
                  endAngle={110}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 25,
                      transform: 'translate(0px, 0px)',
                    },
                  }}
                  text={
                    ({ value, valueMax }) => `${value} / ${valueMax}`
                  }
                />
              </div>
              <div className="flex flex-col m-1 items-center justify-center h-5/6">
                <span className="text-black tracking-wide font-mono font-semibold text-base m-1">
                  Entertainment/Lifestyle
                </span>
                <Gauge
                  value={83}
                  startAngle={-110}
                  endAngle={110}
                  valueMax={100}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 25,
                      transform: 'translate(0px, 0px)',
                    },
                  }}
                  text={
                    ({ value, valueMax }) => `${value} / ${valueMax}`
                  }
                />
              </div>
              <div className="flex flex-col m-1 items-center justify-center h-5/6">
                <span className="text-black tracking-wide font-mono font-semibold text-base m-1">
                  Travel/Education
                </span>
                <Gauge
                  value={7}
                  startAngle={-110}
                  endAngle={110}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 25,
                      transform: 'translate(0px, 0px)',
                    },
                  }}
                  text={
                    ({ value, valueMax }) => `${value} / ${valueMax}`
                  }
                />
              </div>
              <div className="flex flex-col m-1 items-center justify-center h-5/6">
                <span className="text-black tracking-wide font-mono font-semibold text-base m-1">
                  Household/Misc.
                </span>
                <Gauge
                  value={68}
                  startAngle={-110}
                  endAngle={110}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 25,
                      transform: 'translate(0px, 0px)',
                    },
                  }}
                  text={
                    ({ value, valueMax }) => `${value} / ${valueMax}`
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};