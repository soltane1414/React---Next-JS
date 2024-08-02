"use client";

import styles from "./page.module.css";
import Header from "../../components/Header";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Home() {
  const [counter, setCounter] = useState(0);

  // Refresh the page if the change the value of counter
  const handleClick = () => {
    setCounter(counter + 1);
  };
  let hideHeader = true;

  // work the function if the value of counter changed
  useEffect(() => {
    console.log("Hello");
  }, [counter]);

  /*
    useRef
    is use for access HTML elements and change his statement
    
    useMemo 
    is use for call function if function is target value 
  */
  return (
    <>
      <main className={styles.main}>
        {hideHeader && <Header title="Header!!" />}
        <button onClick={handleClick}>Counter</button>
        <p>{counter}</p>
        <Link href="/about">Go to about page</Link>
      </main>
    </>
  );
}

export default Home;
