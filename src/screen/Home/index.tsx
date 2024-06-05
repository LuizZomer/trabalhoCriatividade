import { Apresentation } from "./components/Apresentation";
import { Form } from "./components/Form";
import { Opinions } from "./components/Opinions";
import { OurCause } from "./components/OurCause";
import { StrategicPoints } from "./components/StrategicPoints";

export const Home = () => {
  return (
    <main>
      <Apresentation />
      <Opinions />
      <OurCause />
      <StrategicPoints />
      <Form />
    </main>
  );
};
