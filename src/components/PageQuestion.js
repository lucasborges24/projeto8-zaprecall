// images
import zaprecall from "../assets/img/zaprecall.svg"
import Cards from "../shared/Cards"
import Footer from "../shared/Footer"
import InitialQuestion from "./PageQuestion/InitialQuestion"
import React from 'react'



export default function PageQuestion() {

    const [clicked, setClicked] = React.useState("inicio")
    const [clicked2, setClicked2] = React.useState("Showing question")

    console.log(clicked2)
    return (
        <div className="main-page">
            <div className="main-title">
                <img src={zaprecall} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <InitialQuestion setClicked={setClicked} clicked={clicked} setClicked2={setClicked2} clicked2={clicked2}/>
            <Footer>
                <div className="main-footer">
                    <p>
                        0/{Cards().length} CONCLUÍDOS
                    </p>
                </div>
            </Footer>
        </div>
    )
}