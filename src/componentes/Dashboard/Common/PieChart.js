import React from "react";
import { VictoryPie } from "victory";

const PieChart = () => {
  const [hoveredSlice, setHoveredSlice] = React.useState(null);

  const handleSliceHover = (event, props) => {
    setHoveredSlice(props.index);
  };

  const data = [
    { x: "Class", y: 35 },
    { x: "Quize", y: 65 },
    { x: "Projects", y: 55 },
    { x: "Class", y: 35 },
    { x: "Quize", y: 65 },
    { x: "Projects", y: 55 },
  ];

  const style = {
    data: {
      transition: "all 0.3s ease-in-out",
      stroke: "#f1f1f1",
      strokeWidth: 2,
    },
    labels: {
      fontFamily: "Arial",
      fontSize: 12,
      fill: "white",
      fontWeight: "bold",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <>
      <div className="pie__chart__container">
        <VictoryPie
          // standalone={false}
          innerRadius={50}
          labelRadius={({ innerRadius }) => innerRadius + 25}
          colorScale={[
            "#1AA9B9",
            "#B53D8E",
            "#7850AB",
            "#F7941D",
            "#FFD050",
            "#1A85BA",
          ]}
          data={data}
          labels={({ datum }) => datum.x}
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
