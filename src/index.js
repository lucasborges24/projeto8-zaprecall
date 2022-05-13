import reactDom from "react-dom";
import React from "react";
import InitialPage from "./components/InitialPage";
import PageQuestion from "./components/PageQuestion";



function App() {

    const [page, setPage] = React.useState(true)

    return (
        <>
            {page ? <InitialPage page={page} setPage={setPage} /> : <PageQuestion />}
        </>
    )
}

reactDom.render(<App />, document.querySelector(".root"))