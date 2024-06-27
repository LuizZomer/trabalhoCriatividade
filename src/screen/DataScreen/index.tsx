import * as Styles from "./styles";
import { collumnGraph, opnions } from "../../data/data";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { OpinionsCard } from "../../components/OpnionCard/OpinionsCard";

export const DataScreen = () => {
  const graphData = collumnGraph.series;

  const apexOptions: ApexOptions = {
    chart: {
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
  };

  return (
    <Styles.Container>
      <Styles.WrapperContainer>
        <Styles.graphContainer>
          <h1>Dados gerais do projeto</h1>
          <Chart
            type="bar"
            options={apexOptions}
            series={graphData}
            height={400}
          />
        </Styles.graphContainer>
      </Styles.WrapperContainer>
      <Styles.OpnionsContainer>
        <h2>Opiniões geral</h2>
        <Styles.GridOpnionsContainer>
          {opnions.map(({ name, comment, id }) => (
            <OpinionsCard key={id} name={name} text={comment} />
          ))}
        </Styles.GridOpnionsContainer>
      </Styles.OpnionsContainer>
    </Styles.Container>
  );
};
