import React, { useState } from 'react';
import './App.css';

const Number: React.FC = () => {
  const [randomNumber] = useState<number>(Math.floor(Math.random() * 20) + 1);
  const [guess, setGuess] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('Guess a number between 1 and 20');
  const [attempts, setAttempts] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const guessedNumber = parseInt(guess);
    if (!guessedNumber || guessedNumber < 1 || guessedNumber > 20) {
      setFeedback('Enter a number between 1 and 20');
      return;
    }
    setAttempts(attempts + 1);
    if (guessedNumber === randomNumber) {
      setFeedback(`Correct! It took you ${attempts + 1} attempts.`);
      window.location.reload(); // Resets the game
    } else {
      setFeedback(guessedNumber < randomNumber ? 'Too low!' : 'Too high!');
    }
    setGuess('');
  };

  return (
    <div className="App">
      <h1>Guess the Number From 1 to 20:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          min="1"
          max="20"
        />
        <button type="submit">Guess</button>
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default Number;
