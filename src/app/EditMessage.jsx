"use client";
import { API_URL } from "@/lib/Api_Url";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
function EditMessage({ text, id, setId }) {
  const [editedText, setEditedText] = useState(text);
  const router = useRouter();
  function handleChange(e) {
    setEditedText(e.target.value);
  }
  async function handleEdit() {
    const response = await fetch(`${API_URL}/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: editedText,
      }),
      cache: "no-store",
    });
    setId("");
    router.refresh();
  }
  return (
    <div className="edit-input">
      <input type="text" onChange={handleChange} value={editedText} />
      <button onClick={handleEdit}>edit post</button>
      <button onClick={() => setId("")}>cancel</button>
    </div>
  );
}

export default EditMessage;
