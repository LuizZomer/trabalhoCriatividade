import * as Styles from "./styles";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { pieGraph } from "../../../../data/data";

interface IGraphData {
  label: string[];
  series: number[];
}

export const PieGraph = ({ isVisible }: { isVisible: boolean }) => {
  const dataGraph: IGraphData = pieGraph;

  const apexOptions: ApexOptions = {
    labels: dataGraph.label,
    legend: {
      position: "bottom",
    },
  };

  return isVisible ? (
    <Styles.GraphContainer>
      <Styles.LeftSide>
        <h2>Dados sobre apoiar a ideia</h2>
        <p className="p2">
          Mostrar o número de pessoas que apoiam ou não um projeto em um gráfico
          de pizza é importante porque oferece uma visualização clara e imediata
          das proporções, facilitando a comparação direta entre apoiadores e não
          apoiadores. A simplicidade e o impacto visual do gráfico capturam a
          atenção do público, tornando a comunicação mais eficiente e acessível.
          Além disso, ajuda os gestores a tomar decisões informadas rapidamente,
          baseadas na compreensão intuitiva dos dados, e aumenta o engajamento e
          a participação nas discussões sobre o projeto.
        </p>
      </Styles.LeftSide>
      <Styles.RightSide>
        <Chart type="pie" options={apexOptions} series={dataGraph.series} />
      </Styles.RightSide>
    </Styles.GraphContainer>
  ) : null;
};
