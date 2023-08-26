interface FolderToolbar {
    title: string
}
export const FolderToolbar: React.FC<FolderToolbar> = ({ title }) => {
    return (
        <div className="window-container__folder-toolbar">
            <div className="toolbar-text-container">
                <p> {title}</p>
            </div>
            <div className="toolbar-btns-container">
                <div className="folder-icon">
                    <div></div>
                </div>
                <div className="folder-icon">
                    <div></div>
                </div>
                <div className="folder-icon">&#x2715;</div>

            </div>

        </div>
    )
}
