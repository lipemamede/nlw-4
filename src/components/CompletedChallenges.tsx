import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChanllenges() {
  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>12</span>
    </div>
  );
}