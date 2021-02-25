import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/lipemamede.png" alt="Felipe Mamede"/>
      <div>
        <strong>Felipe Mamede</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 20
        </p>
      </div>
    </div>
  );
}