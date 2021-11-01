const Quote = ({ quote, getQuote }) => {
    const quoteImg = <div>{quote !== "" ? <img className="quote" src={quote} alt="Really punny dad joke" /> : ""}</div>;
    return (
      <div>
        <button onClick={getQuote}>Solid Quotes</button>
        <h3>Are you feline lucky?</h3>
        {quoteImg}
      </div>
    )
  };
  
  export default Quote;