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
    setCurrentIndex
}) {
    if (contador === 0) {
        return (
            <FooterInitial contador={contador} />
        )
    } else if (contador < Cards().length) {
        return (
            <FooterAfter contador={contador} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        )
    } else if (contador === Cards().length) {
        <FinalFooter contador={contador} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
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
        <footer>
            <div className="main-footer">
                <p>
                    {contador}/{Cards().length} CONCLUÍDOS
                </p>
                {arrayBolado.map((oi, index) => {
                console.log(cardzin[oi].result)
                return <img src={cardzin[oi].result} alt="opa meu chegas" key={index}/>})}
            </div>
        </footer>
    )
}

function FinalFooter ({
    contador,
    cardzin,
    setCardzin,
    currentIndex,
    setCurrentIndex
}) {
    return (
        
    <FooterAfter contador={contador} cardzin={cardzin} setCardzin={setCardzin} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>

    )
}