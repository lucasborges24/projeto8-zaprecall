import React from 'react'
import InitialPage from './InitialPage'
import PageQuestion from './PageQuestion'


export default function App() {

    const [page, setPage] = React.useState(true)

    return (
        <>
            {page ? <InitialPage page={page} setPage={setPage} /> : <PageQuestion />}
        </>
    )
}