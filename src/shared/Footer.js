import Cards from "./Cards";
import Icon from "./Icon";
import error from "../assets/img/error.svg"
import interrogacao from "../assets/img/interrogação.svg"
import check from "../assets/img/check.svg"
const arrayBolado = [];

export default function Footer({
    contador,
    cardzin,
    setCardzin,
    currentIndex,
    setCurrentIndex,
    texto,
    texto2
}) {
    if (contador === 0) {
        return (
            <FooterInitial contador={contador} />
        )
    } else if (contador < Cards().length) {
        return (
            <footer>
                <FooterAfter contador={contador} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            </footer>
        )
    } else if (contador === Cards().length) {
        let aux = 0;
        for (let i = 0; i < cardzin.length; i++) {
            console.log(cardzin[i].styleColor)
            if (cardzin[i].styleColor !== "finished-green") {
                texto = "😢 Putz..."
                texto2 = "Ainda falta alguns... Mas não desanime"
                break;
            }
            if (i === cardzin.length - 1) {
                texto = "🥳 Parabéns!"
                texto2 = "Você não esqueceu de nenhum flashcard!"
            }
        }

        return (
            <footer oi="teste">
                <FinalFooter contador={contador} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} texto={texto} texto2={texto2}/>
            </footer>
        )
    }
}


function FooterInitial({
    contador
}) {

    return (
        <footer>
            <div className="main-footer">
                <p>
                    {contador}/{Cards().length} CONCLUÍDOS
                </p>
            </div>
        </footer>
    )
}

function FooterAfter({
    contador,
    cardzin,
    setCardzin,
    currentIndex,
    setCurrentIndex
}) {
    let aux
    for (let i = 0; i < arrayBolado.length; i++) {
        const item = arrayBolado[i];
        if (currentIndex === item) {
            aux = "tem igual";
        }
    }
    if (aux !== "tem igual") {
        arrayBolado.push(currentIndex)
    }

    return (
        <div className="main-footer">
            <p>
                {contador}/{Cards().length} CONCLUÍDOS
            </p>
            {arrayBolado.map((oi, index) => {
                console.log(cardzin[oi].result)
                return <img src={cardzin[oi].result} alt="opa meu chegas" key={index} />
            })}
        </div>
    )
}

function FinalFooter({
    contador,
    cardzin,
    setCardzin,
    currentIndex,
    setCurrentIndex,
    texto,
    texto2
}) {


    return (
        <>
            <div className="text-footer">
            <h2>{texto}</h2>
            <p>{texto2}</p>
            </div>
            <FooterAfter contador={contador} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </>
    )
}