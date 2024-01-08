/*
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
      window.location.reload(); 
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

*/
// CombinedApp.tsx

import React, { ChangeEvent, Component } from 'react';
import './App.css';

interface CombinedAppState {
  term: string;
}

interface CombinedAppProps {
  secret: number;
}

class CombinedApp extends Component<CombinedAppProps, CombinedAppState> {
  static defaultProps: CombinedAppProps = {
    secret: Math.floor(Math.random() * 20) + 1,
  };

  constructor(props: CombinedAppProps) {
    super(props);
    this.state = { term: '' };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.target.value });
  };

  render() {
    const { term } = this.state;
    const { secret } = this.props;

    const result =
      term && secret !== +term
        ? secret > +term
          ? 'Lower'
          : 'Higher'
        : secret === +term
        ? 'Yippee, correct!'
        : 'Enter Valid Input';

    return (
      <div className='container'>
        <div className='head'>
          <label htmlFor='term'>Guess Number between 1 to 20</label>
        </div>
        <input
          id='term'
          type='text'
          name='term'
          value={term}
          onChange={this.handleChange}
        />

        <h3>You Guessed: {result}</h3>
      </div>
    );
  }
}

export default CombinedApp;

