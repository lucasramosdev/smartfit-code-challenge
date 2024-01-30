import './footer.css';
import { logo } from "../../images";


export const Footer = () => {
    return (
        <footer>
          <img src={logo} alt="smartfit logo"/>
          <p>Todos direitos reservados - 2024</p>
        </footer>
    );
}