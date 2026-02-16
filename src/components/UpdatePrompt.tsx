import { useRegisterSW } from "virtual:pwa-register/react";
import styles from "./UpdatePrompt.module.css";

export const UpdatePrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p style={{ margin: 0 }}>New content available v.9</p>
        <button className={styles.button} onClick={() => setNeedRefresh(false)}>
          Later
        </button>

        <button
          className={styles.button}
          onClick={() => updateServiceWorker(true)}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default UpdatePrompt;
