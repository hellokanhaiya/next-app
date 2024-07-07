"use client";

import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
  const [file, setfile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", file);
    let result = await fetch("api/upload", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    if (result) {
      alert("File has been uploaded");
    }
  };
  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setfile(e.target.files?.[0])}
        />
        <button className="btn" type="submit">
          Upload image
        </button>
      </form>
    </main>
  );
}
