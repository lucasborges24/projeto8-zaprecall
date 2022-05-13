import zaprecall from "../assets/img/zaprecall.svg"

export default function InitialPage({setPage}) {

    return (
        <div className="initial-page">
            <div className="initial-image-title">
                <img src={zaprecall} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="initial-button" onClick={() => setPage(false)}>
                <button>
                    Iniciar Recall
                </button>
            </div>
        </div>
    )
}