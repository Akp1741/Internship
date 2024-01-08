

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

