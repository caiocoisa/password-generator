"use client";

import styles from "./page.module.css";
import PasswordInput from "./components/PasswordInput";
import StrengthBar from "./components/StrengthBar";
import { StrengthType } from "./_types/StrengthTypes";
import FilterPanel from "./components/FilterPanel";
import { useEffect, useState } from "react";
import { FilterContextProvider } from "./context/filter-context";
import useFilter from "./hooks/useFilter";

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
