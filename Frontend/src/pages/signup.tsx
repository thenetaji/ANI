import { useState } from 'react';
import styles from '../styles/signup.module.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle signup logic
    console.log({ email, password, acceptPolicy });
    alert('Sign up successful!');
    // Close the window if opened in popup
    if (window.opener) {
      window.close();
    }
  };

  const handleSignInClick = () => {
    if (window.opener) {
      window.location.href = '/signin';
    } else {
      window.open('/signin', '_blank', 'width=800,height=900');
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>New here ?</h2>
        <p className={styles.welcomeText}>Glad to see you here</p>
      </div>

      {/* Right Section - Form */}
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>SIGN - UP</h1>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>E-mail</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="repassword" className={styles.label}>Re-enter Password</label>
              <input
                type="password"
                id="repassword"
                className={styles.input}
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="policy"
                className={styles.checkbox}
                checked={acceptPolicy}
                onChange={(e) => setAcceptPolicy(e.target.checked)}
                required
              />
              <label htmlFor="policy" className={styles.checkboxLabel}>
                I accept company's privacy policy
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SIGN UP
            </button>
          </form>

          <p className={styles.switchText}>
            Already have an account?{' '}
            <span className={styles.switchLink} onClick={handleSignInClick}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
