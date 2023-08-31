import { Dispatch, SetStateAction } from "react";
import { FolderToolbar } from "./components/FolderToolbar";
import { WebToolbar } from './components/WebToolbar';
import "./window.scss";

type WindowType = "web" | "folder";

interface WindowDto {
    title: string;
    children: React.ReactNode;
    type?: WindowType;
    webToolbarColor?: string
    folderToolbarColor?: string
    backgroundColor?: string;
    setSearch?: Dispatch<SetStateAction<string>>;
}

export const Window: React.FC<WindowDto> = ({
    title,
    children,
    type = "folder",
    webToolbarColor = "#FFFFFD",
    folderToolbarColor = "FFFFFD",
    backgroundColor = "#FFF",
    setSearch,
}) => {

    const toolbar = {
        web: <WebToolbar title={title} webToolbarColor={webToolbarColor} />,
        folder: <FolderToolbar title={title} setSearch={setSearch} folderToolbarColor={folderToolbarColor} />,
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
