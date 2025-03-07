import React, {useState} from "react";

const LoveCalculator = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [lovePercentage, setLovePercentage] = useState(null);

    const calculateLove = () => {
        const percentage = Math.floor(Math.random()* 101); //Random number between 0 and 100
        setLovePercentage(percentage);

    };

    return(
        <div className="love-calculator">
          <h1>Love Calculator</h1>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
            id="firstName"
            type="text"
            placeholder="Enter first name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            />

          </div>
          <div className="input-group">
            <label htmlFor="secondName">Second Name</label>
            <input
            id="secondName"
            type="text"
            placeholder="Enter second name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            />
          </div>
          <button onClick = {calculateLove}>Calculate Love</button>
          {lovePercentage !== null && (
            <div className="result">
                <h2>
                    {name1} and {name2} have a {lovePercentage}% love match!
                </h2>
                </div>
          )}
        </div>
    );
};

export default LoveCalculator;