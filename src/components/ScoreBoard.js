import React from "react";

function ScoreBoard({score, highScore}) {
  return (
    <div className="score-board">
      <h2>Score: {score}</h2>
      <h2>High Score: {highScore}</h2>
    </div>
  )
}

export default ScoreBoard