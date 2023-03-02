import { nanoid } from 'nanoid'
import { Quote } from "./quote"

export const InitialQuotes = ({quotes}) => {
    return quotes.map(({ character, image, quote }) => {
        return (
            <Quote key={nanoid()} character={character} image={image} quote={quote} />
        )
    })
}
