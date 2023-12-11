"use client";
import { API_URL } from "@/lib/Api_Url";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

function DeleteMessage({ id }) {
  const router = useRouter();
  async function handleDelete() {
    await fetch(`${API_URL}/api/posts/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <div>
      <button onClick={handleDelete}>
        <MdDelete />
      </button>
    </div>
  );
}

export default DeleteMessage;
