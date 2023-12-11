"use client";
import { API_URL } from "@/lib/Api_Url";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NewMessage() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setText("");
      setError("");
      router.refresh();
    } else {
      setError(result.error);
    }
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="text-area"
          value={text}
          onChange={handleChange}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-btn">submit</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default NewMessage;
