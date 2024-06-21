import axios from "axios";
import { useEffect } from "react";

// interface IDataGraph {
//   label: number[];
//   series: number[];
// }

export const DataScreen = () => {
  //   const [dataGraph, setDataGraph] = useState<IDataGraph>();

  const reqData = async () => {
    await axios
      .get("https://animalhouse-l2wi.onrender.com/forms/graphic-bar")
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    reqData();
  }, []);

  return <div>index</div>;
};
