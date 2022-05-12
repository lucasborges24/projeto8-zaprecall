import reactDom from "react-dom";
import InitialPage from "./components/InitialPage";


function App() {
    return (
        <>
            <InitialPage />
        </>
    )
}

reactDom.render(<App />, document.querySelector(".root"))