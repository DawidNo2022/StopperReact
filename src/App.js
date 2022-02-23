import { useState, useEffect } from 'react';
import Stopper from './components/Stopper/Stopper.js';
import Button from './components/Button/Button.js';
import Container from './components/Container/Container.js';

const App = () => {
  const [time, setTime] = useState(0); //czas i zmienna stanu czas
  const [timerStart, setTimerStart] = useState(false); // start timera+zapisywanie stanu interval-u

  useEffect(() => {
    let interval;
    if (timerStart === true) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerStart]);

  return (
    <Container>
      <div className='App'>
        <Stopper time={time} />
        <Button setTime={setTime} setTimerStart={setTimerStart} />
      </div>
    </Container>
  );
};

export default App;
