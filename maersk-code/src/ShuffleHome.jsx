import React from "react";
import './App.css';
import Button from '@material-ui/core/Button';
import { useState } from "react";


const ShuffleHome = () => {
  //array of numbers
  const Shufflenumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // function for shuffling the numbers
  function shuffleNumberInRange() {
    const shuffleNum = Shufflenumber.sort(() => Math.random() - 0.5)
    //set shuffling numbers in a array
    setNum(shuffleNum)
    console.log(shuffleNum);
  }
  // function for sorting array
  function sortNumberInRange() {
    setNum(Shufflenumber)
  }

  return (
    <div className="App">
      <div className="textHeading"> Shuffle and Sort</div>
      <div className="Outer">
        <div className="blockGrid">
          {num.map((text, index) => (
            <div className="myGridDiv"
              style={{ 'backgroundColor': index == 0 ? "#6F98A8" : index == 7 ? "#6F98A8" : index == 2 ? "#2F454E" : index == 4 ? "#2F454E" : index == 8 ? "#2F454E" : index == 1 ? "#2B8EAD" : index == 3 ? "#2B8EAD" : index == 1 ? "#2B8EAD" : '#BFBFBF' }}>
              {text}
            </div>
          ))}

        </div>
        <div className="rightSide">
          <div className="buttonDiv">
            <Button onClick={shuffleNumberInRange} style={{ backgroundColor: "#72C3DC", color: 'aliceblue', fontSize: "10px", height: '25px', width: '120px' }} >
              SHUFFLE
            </Button></div>
          <div className="buttonDiv">
            <Button onClick={sortNumberInRange} style={{ backgroundColor: "#72C3DC", color: 'aliceblue', fontSize: "10px", height: '25px', width: '120px' }} >
              SORT
            </Button></div>
        </div>
        <div className="divtext "> Shuffle and Sort by Shweta Agarwal</div>
      </div>

    </div >
  );
}

export default ShuffleHome;