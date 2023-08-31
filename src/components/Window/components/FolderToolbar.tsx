import { Dispatch, SetStateAction } from "react";

interface FolderToolbar {
    title: string;
    folderToolbarColor: string
    setSearch?: Dispatch<SetStateAction<string>>
}

export const FolderToolbar: React.FC<FolderToolbar> = ({ title, setSearch, folderToolbarColor }) => {

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setSearch) {
            setSearch(e.target.value)
        }
    };

    return (
        <div className="folder-container">
            <div className="folder-container__folder-toolbar" style={{ backgroundColor: folderToolbarColor }}>
                <div className="toolbar-text-container">
                    <p>{title}</p>
                </div>
                <div className="toolbar-btns-container">
                    <div className="folder-icon">
                        <div></div>
                    </div>
                    <div className="folder-icon">
                        <div></div>
                    </div>
                    <div className="folder-icon">&#x2715; </div>
                </div>
            </div>
            <div className="folder-container__path">
                <div className="url">
                    <p>C:\Nay\Documents\{title}</p>
                </div>
                <div className="search">
                    <input type="text" placeholder="Buscar" onChange={handleChangeSearch} />
                    {/* <p>Buscar...</p> */}
                </div>
            </div>
        </div>
    );
};
