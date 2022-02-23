import styles from './Button.module.scss';
const Button = ({ setTime, setTimerStart }) => {
  //props wyjasnic
  // destrukturyzacja
  return (
    <div>
      <button className={styles.button} onClick={() => setTimerStart(true)}>
        Start
      </button>
      <button className={styles.button} onClick={() => setTimerStart(false)}>
        Stop
      </button>
      <button className={styles.button} onClick={() => setTime(0)}>
        Reset
      </button>
    </div>
  );
};
export default Button;
