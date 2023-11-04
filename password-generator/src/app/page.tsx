"use client";

import styles from "./page.module.css";
import PasswordInput from "./components/PasswordInput";
import StrengthBar from "./components/StrengthBar";
import { StrengthType } from "./_types/StrengthTypes";
import FilterPanel from "./components/FilterPanel";

export default function Home() {
  return (
    <main className={styles.main}>
      <PasswordInput />
      <StrengthBar strength={StrengthType.MEDIUM} />
      <FilterPanel />
    </main>
  );
}
