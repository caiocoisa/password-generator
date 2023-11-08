"use client";

import styles from "./page.module.css";
import PasswordInput from "./components/PasswordInput";
import FilterPanel from "./components/FilterPanel";
import { FilterContextProvider } from "./context/filter-context";

export default function Home() {

  return (
    <FilterContextProvider>
      <main className={styles.main}>
        <PasswordInput />
        <FilterPanel />
      </main>
    </FilterContextProvider>
  );
}
