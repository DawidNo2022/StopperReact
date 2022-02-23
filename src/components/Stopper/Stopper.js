import styles from './Stopper.module.scss';

const Stopper = ({ time }) => {
  return (
    <div className={styles.stopper}>
      <span>
        {`${Math.floor(time / (60 * 60 * 1000)) % 24}`.padStart(2, '0')}:
      </span>
      <span>{`${Math.floor(time / (60 * 1000)) % 60}`.padStart(2, '0')}:</span>
      <span>{`${Math.floor(time / 1000) % 60}`.padStart(2, '0')}.</span>
      <span>{`${time % 1000}`.padStart(3, '0')}</span>
    </div>
  );
};
export default Stopper;
