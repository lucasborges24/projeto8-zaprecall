import Cards from "../../shared/Cards"
import icon from "../../assets/img/circle.png"
import error from "../../assets/img/error.svg"
import interrogacao from "../../assets/img/interrogação.svg"
import check from "../../assets/img/check.svg"

function comparador() { 
    return Math.random() - 0.5; 
}
const cardsRandom = Cards().sort(comparador)

export default function InitialQuestion({ setClicked, clicked, setClicked2, clicked2, setCount, count, styleColor, cardzin, setCardzin, currentIndex, setCurrentIndex }) {

    
    return (
        <div className="main-questions">
            {cardsRandom.map((a, index) => {
                if (clicked === index) {
                    return <SwitchQuestionAnswer setClicked={setClicked} clicked={clicked} setClicked2={setClicked2} clicked2={clicked2} index={index} key={index} setCount={setCount} count={count} styleColor={styleColor} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
                } else {
                    return <Pergunta index={index} clicked={clicked} setClicked={setClicked} key={index} styleColor={styleColor} cardzin={cardzin} setCardzin={setCardzin}/>
                }
            })
            }
        </div >
    )
}

function Pergunta({ index, setClicked, clicked, styleColor, cardzin, setCardzin }) {

    if (cardzin[index].state === "finished") {
        return (
            <div className="question" key={index}>
                <p className={cardzin[index].styleColor} >Pergunta {index + 1}</p>
                <img src={cardzin[index].result} alt="opa meu chegas" />
            </div>
        )
    }

    if (cardzin[index].state === "initial") {
        return (
            <div className="question" key={index}>
                <p className={styleColor} >Pergunta {index + 1}</p>
                <ion-icon name="play-outline" onClick={() => setClicked(index)}></ion-icon>
            </div>
        )
    }


}

function SwitchQuestionAnswer({ clicked2, index, setClicked2, setCount, count, setClicked, clicked, styleColor, cardzin, setCardzin, currentIndex, setCurrentIndex }) {
    if (clicked2 === index) {
        return <Answer index={index} key={index} setCount={setCount} count={count} setClicked={setClicked} clicked={clicked} styleColor={styleColor} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
    } else {
        return <Question key={index} index={index} setClicked2={setClicked2} />
    }
}

function Question({ index, setClicked2, clicked2 }) {
    return (
        <div className="question2" key={index}>
            <p>
                {cardsRandom[index].question}
            </p>
            <div className="turn-card-icon" onClick={() => setClicked2(index)}>
                <img src={icon} alt="icone" />
            </div>
        </div>

    )
}

function Answer({ index, setCount, count, setClicked, clicked, styleColor, cardzin, setCardzin, currentIndex, setCurrentIndex}) {

    function finalPartQuestion(cor) {
        setCurrentIndex(index)
        if (cor === 'red') {
            setCount(count + 1);
            setClicked("no")
            cardzin[index].styleColor = "finished-red"
            cardzin[index].state = "finished"
            cardzin[index].result = error
            setCardzin(cardzin)
        } else if (cor === 'yellow') {
            setCount(count + 1);
            setClicked("no")
            cardzin[index].styleColor = "finished-yellow"
            cardzin[index].state = "finished"
            cardzin[index].result = interrogacao
            setCardzin(cardzin)
        } else {
            setCount(count + 1);
            setClicked("no")
            cardzin[index].styleColor = "finished-green"
            cardzin[index].state = "finished"
            cardzin[index].result = check
            setCardzin(cardzin)
        }
    }

    


    return (
        <div className="question2" key={index}>
            <p>
                {cardsRandom[index].answer}
            </p>
            <div className="level-remembered">
                <div className="little-box" onClick={() => finalPartQuestion("red")}>
                    <p>
                        Não lembrei
                    </p>
                </div>
                <div className="little-box yellow" onClick={() => finalPartQuestion("yellow")}>
                    <p>
                        Quase não lembrei
                    </p>
                </div>
                <div className="little-box green" onClick={() => finalPartQuestion("green")}>
                    <p>
                        Zap!
                    </p>
                </div>
            </div>
        </div>

    )
}

