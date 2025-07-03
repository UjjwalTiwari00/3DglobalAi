import React from "react";
import styles from "./background.module.css";

// interface Props {
//   children: React.ReactNode;
//   imageUrl: string;
//   isBlur?: boolean;
//   style?: React.CSSProperties
// }

export default function BackgroundCanvas({ children, imageUrl, isBlur = false, style }) {
  return (
    <div
      className={styles.backgroundCanvas}
      style={{ backgroundImage: `url(${imageUrl})`,...style}}
    >    
      <div
        className={`${styles.overlay} ${isBlur ? styles.blurOverlay : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
