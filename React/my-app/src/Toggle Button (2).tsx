
import React, { useState } from 'react';

export default function ToggleButton() {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <>Click on Button for toggle Event
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Clicked!' : 'Click me'}
    </button>
    </>
  );
}
