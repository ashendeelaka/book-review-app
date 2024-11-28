'use client'
import HomePage from "@/components/HomePage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <HomePage/>
      </main>
      
    </div>
  );
}
