import * as d3 from "d3";

interface BarProps {
  data: number[];
  dimesions: {
    [key: string]: number;
  };
}

const Bars = (props: BarProps) => {
  const { data, dimesions } = props;
  const xScale = d3
    .scaleBand<number>()
    .domain(data.map((d, dNdx) => dNdx))
    .range([0, dimesions.width]);
  const yScale = d3.scaleLinear().domain([0, 1]).range([0, dimesions.height]);

  return (
    <svg overflow="visible">
      {data.map((d, dNdx) => (
        <rect
          key={dNdx}
          height={yScale(d)}
          width={xScale.bandwidth() + 1}
          x={xScale(dNdx)}
          y={dimesions.height - yScale(d)}
          fill="darksalmon"
        />
      ))}
    </svg>
  );
};

export default Bars;
