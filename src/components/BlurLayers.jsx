import styles from './BlurLayers.module.css';

/**
 * BLUR LAYERS COMPONENT
 *
 * Creates progressive depth-of-field blur effect at bottom of page
 * Multiple layered divs with increasing blur for depth perception
 * Based on Austin Serb's portfolio blur layers
 */

export default function BlurLayers() {
  return (
    <div className={styles.blurContainer}>
      <div className={`${styles.blurLayer} ${styles.layer1}`}></div>
      <div className={`${styles.blurLayer} ${styles.layer2}`}></div>
      <div className={`${styles.blurLayer} ${styles.layer3}`}></div>
      <div className={`${styles.blurLayer} ${styles.layer4}`}></div>
      <div className={`${styles.blurLayer} ${styles.layer5}`}></div>
    </div>
  );
}
