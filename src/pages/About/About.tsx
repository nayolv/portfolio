import { Window } from "../../components/Window/Window";
import Engineer from "../../assets/img/engineer.png";
import Keyboard from "../../assets/img/keyboard.png";
import Kitten from "../../assets/img/kitten.png";
import "./about.scss";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate();
    return (
        <Window title="Acerca de mí" type="web" backgroundColor="#F9F3E5">
            <div className="about-principal-container">
                <div className="about-me-container">
                    <div className="about-me-container__images">
                        <div>
                            <img className="floating-img" src={Keyboard} alt="" />
                            <img className="floating-img" src={Engineer} alt="" />
                            <img className="floating-img" src={Kitten} alt="" />
                        </div>
                    </div>

                    <div className="about-me-container__description">
                        <div>
                            <h1>Nayelli Olvera</h1>
                            <h2>Desarrolladora Front End</h2>
                            <div className="overflow-text">
                                <p>
                                    ¡Hola a todos ! Soy una apasionada Desarrolladora Front End
                                    con un año de experiencia en el emocionante mundo de la
                                    creación web. <br /> Mi caja de herramientas incluye
                                    tecnologías de primera como React.js, Node.js, Typescript y
                                    MySQL. He tenido la oportunidad de sumarme a equipos ágiles,
                                    donde la colaboración es la clave. Adoro esos momentos
                                    desafiantes en los que las aplicaciones deciden tomar caminos
                                    inesperados, porque ahí es donde entra mi habilidad para
                                    solucionar problemas y encontrar soluciones que nos hagan
                                    sonreír. <br /> Mi objetivo constante es mantenerme en un
                                    camino de aprendizaje y crecimiento. Me emociona la idea de
                                    seguir contribuyendo al mundo del desarrollo web, aportando mi
                                    granito de arena para crear aplicaciones que dejen a todos con
                                    la boca abierta. ¡Estoy entusiasmada por lo que el futuro
                                    depara!
                                </p>
                            </div>
                            <button onClick={() => navigate("/contact")}>Contacto</button>
                        </div>
                    </div>
                </div>
            </div>
        </Window>
    );
};
