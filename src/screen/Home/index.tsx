import { useState } from "react";
import { Apresentation } from "./components/Apresentation";
import { Form } from "./components/Form";
import { PieGraph } from "./components/GraphPie";
import { Opinions } from "./components/Opinions";
import { OurCause } from "./components/OurCause";
import { StrategicPoints } from "./components/StrategicPoints";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main>
      <Apresentation />
      <Opinions />
      <OurCause />
      <StrategicPoints />
      <Form setIsVisible={setIsVisible} />
      <PieGraph isVisible={isVisible} />
    </main>
  );
};
