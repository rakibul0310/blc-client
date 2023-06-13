import React from "react";
import { VictoryPie } from "victory";

const PieChart = () => {
  const [hoveredSlice, setHoveredSlice] = React.useState(null);

  const handleSliceHover = (event, props) => {
    setHoveredSlice(props.index);
  };

  const data = [
    { x: "Class", y: 35 },
    { x: "Quize", y: 40 },
    { x: "Projects", y: 55 },
  ];

  const style = {
    data: {
      // fill: ({ datum }) => {
      //   if (datum.y === 35) {
      //     return "red";
      //   } else if (datum.y === 40) {
      //     return "green";
      //   } else {
      //     return "blue";
      //   }
      // },
      transition: "all 0.3s ease-in-out",
    },
    // labels: {},
  };

  return (
    <>
      <div className="pie__chart__container">
        <VictoryPie
          innerRadius={50}
          labelRadius={({ innerRadius }) => innerRadius + 25}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={data}
          labels={() => ""}
          radius={({ datum, index }) => {
            return index === hoveredSlice ? 100 + datum.y : 80 + datum.y;
          }}
          animate={{
            duration: 1000,
          }}
          style={style}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: handleSliceHover,
                onMouseOut: () => setHoveredSlice(null),
              },
            },
          ]}
        />
      </div>
    </>
  );
};

export default PieChart;
