import { useEffect, useState } from 'react'
import { InitialQuotes } from './components/InitialQuotes'

import logo from './assets/simpsons-logo.svg'

export const App = () => {

    const quotesURL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=4'

    const [quotes, setQuotes] = useState([])

    const getQuotes = async () => {
        const response = await fetch(quotesURL)
        const data = await response.json()
        setQuotes(data)
    }

    useEffect(() => {
        getQuotes()
    }, [])

    return (
        <>
            <h1 className="site-title">
                <span className="sr-only">Simpsons Quotes!</span>
                <img src={logo} alt="The Simpsons Logo" />
            </h1>
            <div className="quotes-wrapper">
                <InitialQuotes quotes={quotes} />
            </div>
        </>
    )
}
