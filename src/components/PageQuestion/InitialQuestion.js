import Cards from "../../shared/Cards"
import icon from "../../assets/img/circle.png"

export default function InitialQuestion({ setClicked, clicked, setClicked2, clicked2 }) {
    const cards = Cards();

    return (
        <div className="main-questions">
            {cards.map((a, index) => {
                if (clicked === index) {
                    return <SwitchQuestionAnswer setClicked2={setClicked2} clicked2={clicked2} index={index} key={index} />
                } else {
                    return <Pergunta index={index} setClicked={setClicked} key={index} />
                }
            })
            }
        </div >
    )
}

function Pergunta({ index, setClicked }) {
    return (
        <div className="question" key={index}>
            <p>Pergunta {index + 1}</p>
            <ion-icon name="play-outline" onClick={() => setClicked(index)}></ion-icon>
        </div>
    )
}

function SwitchQuestionAnswer({ clicked2, index, setClicked2 }) {
    if (clicked2 === index) {
        return <Answer index={index} key={index} />
    } else {
        return <Question key={index} index={index} setClicked2={setClicked2} />
    }
}

function Question({ index, setClicked2, clicked2 }) {
    console.log(clicked2)
    return (
        <div className="question2" key={index}>
            <p>
                {Cards()[index].question}
            </p>
            <div className="turn-card-icon" onClick={() => setClicked2(index)}>
                <img src={icon} alt="icone" />
            </div>
        </div>

    )
}

function Answer({ index }) {
    return (
        <div className="question2" key={index}>
            <p>
                {Cards()[index].answer}
            </p>
            <div className="level-remembered">
                <div className="little-box">
                    <p>
                        Não lembrei
                    </p>
                </div>
                <div className="little-box yellow">
                    <p>
                        Quase não lembrei
                    </p>
                </div>
                <div className="little-box green">
                    <p>
                        Zap!
                    </p>
                </div>
            </div>
        </div>

    )
}