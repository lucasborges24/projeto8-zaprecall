import Cards from "../../shared/Cards"

export default function InitialQuestion() {
    const cards = Cards();

    console.log(cards)
    return (
        <div className="main-questions">
            {cards.map((a, index) => (
                <div className="question" key={index}>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            ))}
        </div>
    )
}