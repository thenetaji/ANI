import styles from '../styles/features.module.css';

export default function Features() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo}>ANI</h1>
      </header>

      <div className={styles.content}>
        {/* Left Section - Green Background */}
        <section className={styles.leftSection}>
          <div className={styles.leftContent}>
            <h2 className={styles.privacyTitle}>PRIVACY MODE ON</h2>
            <div className={styles.toggleContainer}>
              <div className={styles.toggleOn}>
                <div className={styles.toggleKnobOn}></div>
              </div>
              <div className={styles.arrow}></div>
            </div>
            <div className={styles.introSection}>
              <h3 className={styles.introTitle}>INTRODUCING PRIVACY MODE</h3>
              <p className={styles.introText}>
                Use it when you don't wanna save chats and talk privately, it won't
                save any history of chats
              </p>
            </div>
          </div>
        </section>

        {/* Right Section - Gray Background */}
        <section className={styles.rightSection}>
          <div className={styles.rightContent}>
            <div className={styles.whySection}>
              <h2 className={styles.whyTitle}>WHY DO WE SINE BRIGHT</h2>
              <p className={styles.whyText}>
                We provide many useful feature but one is unique and
                very useful if you are looking for private chats.
              </p>
            </div>
            <div className={styles.privacyOff}>
              <h3 className={styles.privacyOffTitle}>PRIVACY MODE OFF</h3>
              <div className={styles.toggleOff}>
                <div className={styles.toggleKnobOff}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
