import { Dispatch, SetStateAction } from "react";
import { FolderToolbar } from "./components/FolderToolbar";
import { WebToolbar } from "./components/WebToolbar";
import "./window.scss";

type WindowType = "web" | "folder";

interface WindowDto {
    title: string;
    children: React.ReactNode;
    type?: WindowType;
    backgroundColor?: string;
    setSearch?: Dispatch<SetStateAction<string>>;
}

export const Window: React.FC<WindowDto> = ({
    title,
    children,
    type = "folder",
    backgroundColor = "#FFF",
    setSearch,
}) => {
    const toolbar = {
        web: <WebToolbar title={title} />,
        folder: <FolderToolbar title={title} setSearch={setSearch} />,
    };

    return (
        <div className="window-container">
            {toolbar[type]}
            <div className="window-container__content" style={{ backgroundColor }}>
                {children}
            </div>
        </div>
    );
};
