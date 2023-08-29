import { Link } from "react-router-dom";
import { Window } from "../../components/Window/Window";
import { technologies } from "../../helpers/tech/helper";
import './tech.scss'
import { useState } from "react";

export const Tech = () => {
    const [search, setSearch] = useState("");

    const filteredItems = technologies.filter(item =>
        item.text.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Window title="Tecnologías" setSearch={setSearch}>
            <div className="tech-container">
                <div className="tech-container__images">
                    {filteredItems.length == 0 ?
                        <p>Ningún elemento coincide con la búsqueda</p>
                        :
                        filteredItems.map((technology) => (
                            <div key={technology.text} className="image-container">
                                <Link to={technology.page} target="_blank">
                                    <div className="border-photo">
                                        <img src={technology.image} alt="" />
                                    </div>
                                    <p>{technology.text}.png</p>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </Window>
    )
}
