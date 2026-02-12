import styles from '../styles/thankyou.module.css';

export default function ThankYou() {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <main className={styles.mainContent}>
        <h1 className={styles.title}>
          THANKS FOR<br />
          USING OUR<br />
          SERVICE
        </h1>
        
        <p className={styles.description}>
          Like our service, support us so we can make similar<br />
          services or leave a review or atleast give us<br />
          feedback so we can improve.
        </p>
      </main>
    </div>
  );
}
