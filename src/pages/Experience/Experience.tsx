import { Link } from "react-router-dom";
import { Window } from "../../components/Window/Window";
import { experience } from "../../helpers/experience/helper";
import './experience.scss'

export const Experience = () => {
    return (
        <Window
            title="Experiencia"
            type="web"
            backgroundColor="#FFF"
            webToolbarColor="#A286FF"
        >
            <div className="experience-container">
                {
                    experience.map(({ place, job, description, time, link }) => (
                        <div className="card-container">
                            <div className="card-container__text">
                                <Link to={link} className="text-link" target="_blank">{place}</Link>
                                <p>{job}</p>
                                <p className="text-time">{time}</p>
                            </div>
                            <div className="card-container__description" dangerouslySetInnerHTML={{ __html: description }} />

                        </div>

                    ))
                }
            </div>
        </Window >)
}

