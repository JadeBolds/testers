const Words = ({ word, getWord }) => {
    // const catImg = <div>{cat !== "" ? <img className="catPic" src={cat} alt="cure fuzzy fat thing" /> : ""}</div>;
    return (
      <div>
        <button onClick={getWord}>Get Definition</button>
        {/* {catImg} */}
      </div>
    );
  };
  
  export default Words;