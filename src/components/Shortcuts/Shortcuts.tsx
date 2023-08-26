import { Link } from "react-router-dom";

import { shortcutsLeft, shortcutsRight } from "../../helpers/shortcuts/helper";
import "./shortcuts.scss";

interface ShortcutsDto {
    children: React.ReactNode;
}

export const Shortcuts: React.FC<ShortcutsDto> = ({ children }) => {
    return (
        <div className="shortcuts-container">
            <div className="shortcuts-container__left icons">
                {shortcutsLeft.map(({ icon, text, path }) => (
                    <div key={text}>

                        <Link to={path}>
                            <img src={icon} alt="" />
                            <p>{text}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="shortcuts-container__window"> {children}</div>
            <div className="shortcuts-container__right icons">
                {shortcutsRight.map(({ icon, text, path }) => (
                    <div key={text}>

                        <Link to={path}>
                            <img src={icon} alt="" />
                            <p>{text}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
