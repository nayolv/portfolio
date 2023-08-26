import { FolderToolbar } from "./components/FolderToolbar";
import { WebToolbar } from "./components/WebToolbar";
import "./window.scss";

type WindowType = "web" | "folder";

interface WindowDto {
    title: string;
    children: React.ReactNode;
    type?: WindowType;
}

export const Window: React.FC<WindowDto> = ({
    title,
    children,
    type = "folder",
}) => {
    const toolbar = {
        web: <WebToolbar title={title} />,
        folder: <FolderToolbar title={title} />,
    };

    return (
        <div className="window-container">
            {toolbar[type]}
            <div className="window-container__content"> {children}</div>
        </div>
    );
};
