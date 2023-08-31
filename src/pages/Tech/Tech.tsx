import { useState } from "react";
import { Link } from "react-router-dom";
import { Window } from "../../components/Window/Window";
import { technologies } from "../../helpers/tech/helper";
import './tech.scss'

export const Tech = () => {
    const [search, setSearch] = useState("");

    const filteredItems = technologies.filter(item =>
        item.text.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Window title="Tecnologías" setSearch={setSearch} folderToolbarColor={"#FEC365"}>
            <div className="tech-container">
                <div className="tech-container__images">
                    <div>
                        {filteredItems.length == 0 ?
                            <p>Ningún elemento coincide con la búsqueda</p>
                            :
                            filteredItems.map(({ text, page, folder, image }) => (
                                <div key={text} className="image-container">
                                    <Link to={page} target={folder ? "" : "_blank"}>
                                        <div className={folder ? "border-folder" : "border-photo"}>
                                            <img src={image} alt="" />
                                        </div>
                                        <p>{text}{!folder && ".png"}</p>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Window>
    )
}
