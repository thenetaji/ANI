import styles from '../styles/landing.module.css';


export default function Landing() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo}>ANI</h1>
        <div className={styles.headerButtons}>
          <button className={styles.signupBtn}>SIGN UP</button>
          <button className={styles.contactBtn}>CONTACT</button>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <p className={styles.intro}>INTRODUCING ANI</p>
        <h2 className={styles.heading}>
          THE BEST PRIVACY<br />
          BASED CHAT APP
        </h2>
        <h6 className={styles.description}>
          Experience the future of communication with ANI
        </h6>
      <div className={styles.line}></div>
      </main>
    </div>
  );
}
