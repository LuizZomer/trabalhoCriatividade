import { Link } from "react-router-dom";
import * as Styles from "./styles";

export const Header = () => {
  return (
    <Styles.HeaderContainer>
      <Styles.NavContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projectItems">Como chegamos até aqui</Link>
          </li>
          <li>
            <Link to="/">Entrevistas</Link>
          </li>
        </ul>
      </Styles.NavContainer>
    </Styles.HeaderContainer>
  );
};
