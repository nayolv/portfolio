interface WebToolbarDto {
    title: string
}

export const WebToolbar: React.FC<WebToolbarDto> = ({ title }) => {
    return (
        <div className="window-container__toolbar">
            <div className="toolbar-btns-container">
                <div className="circle-btn"></div>
                <div className="circle-btn"></div>
            </div>

            <div className="toolbar-text-container">
                <p> {title}</p>
            </div>
            <div>
                <span>&#x2715; </span>
            </div>
        </div>
    )
}
