import { Link, useNavigate } from 'react-router-dom';
import styles from './Error.module.css';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorTitle}>Page Not Found</h1>
      <p className={styles.errorMessage}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className={styles.buttonContainer}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Go back
        </button>
        <Link to="/" className={styles.homeLink}>
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;