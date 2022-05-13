// images
import zaprecall from "../assets/img/zaprecall.svg"
import Cards from "../shared/Cards"
import Footer from "../shared/Footer"
import InitialQuestion from "./PageQuestion/InitialQuestion"




export default function PageQuestion() {
    const cards = Cards();

    return (
        <div className="main-page">
            <div className="main-title">
                <img src={zaprecall} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <InitialQuestion />
            <Footer>
                <div className="main-footer">
                    <p>
                        0/{cards.length} CONCLUÍDOS
                    </p>
                </div>
            </Footer>
        </div>
    )
}