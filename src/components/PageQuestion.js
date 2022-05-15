// images
import zaprecall from "../assets/img/zaprecall.svg"
import Cards from "../shared/Cards"
import Footer from "../shared/Footer"
import InitialQuestion from "./PageQuestion/InitialQuestion"
import Icon from "../shared/Icon"
import React from 'react'



export default function PageQuestion() {

    const [clicked, setClicked] = React.useState("inicio")
    const [clicked2, setClicked2] = React.useState
    ("Showing question")
    const [count, setCount] = React.useState(0)
    const [cardzin, setCardzin] = React.useState(Cards())
    const [currentIndex, setCurrentIndex] = React.useState(0)


    console.log("passou pela PageQuestion")
    return (
        <div className="main-page">
            <div className="main-title">
                <img src={zaprecall} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <InitialQuestion setClicked={setClicked} clicked={clicked} setClicked2={setClicked2} clicked2={clicked2} setCount={setCount} count={count} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <Footer contador={count} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        </div>
    )
}