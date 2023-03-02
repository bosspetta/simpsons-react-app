export const Quote = ({ character, image, quote }) => {
    // console.log(props)
    return (
        <div className="quote-item">
            <div className="quote-item-inner">
                <h2>{character}</h2>
                <p>{quote}</p>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
