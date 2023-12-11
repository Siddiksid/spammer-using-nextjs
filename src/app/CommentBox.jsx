"use client";
import { API_URL } from "@/lib/Api_Url";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function CommentBox({ id, setCommentVisible, setCounter }) {
  const [commentText, setCommentText] = useState("");
  const router = useRouter();
  async function handleComment() {
    if (commentText.length == 0) {
      alert("enter text to submit");
      return;
    }
    const response = await fetch(`${API_URL}/api/posts/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: commentText,
      }),
      cache: "no-store",
    });
    if (response.ok) {
      setCommentVisible("");
      setCommentText("");
      setCounter((c) => c + 1);
      router.refresh();
    }
  }

  const handleCancel = () => {
    setCommentVisible("");
    setCommentText("");
  };

  return (
    <div className="comment-input">
      <input
        type="text"
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
      />
      <button onClick={handleComment}>comment</button>
      <button onClick={handleCancel}>cancel</button>
    </div>
  );
}

export default CommentBox;
// import { API_URL } from "@/lib/Api_Url";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// function CommentBox({ id, setCommentVisible, handleComment }) {
//   const [commentText, setCommentText] = useState("");
//   const router = useRouter();

//   const handleCommentSubmit = async () => {
//     if (commentText.length === 0) {
//       alert("Enter text to submit");
//       return;
//     }

//     const response = await fetch(`${API_URL}/api/posts/${id}/comments`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         text: commentText,
//       }),
//       cache: "no-store",
//     });

//     if (response.ok) {
//       handleCommentSubmit();
//       setCommentVisible("");
//       setCommentText("");
//       router.refresh();
//     }
//   };

//   const handleCancel = () => {
//     setCommentVisible("");
//     setCommentText("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setCommentText(e.target.value)}
//         value={commentText}
//       />
//       <button onClick={handleCommentSubmit}>Comment</button>
//       <button onClick={handleCancel}>Cancel</button>
//     </div>
//   );
// }

// export default CommentBox;
// "use client";
// import { API_URL } from "@/lib/Api_Url";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// function CommentBox({ id, setCommentVisible }) {
//   const [commentText, setCommentText] = useState("");
//   const router = useRouter();
//   async function handleComment() {
//     if (commentText.length == 0) {
//       alert("enter text to submit");
//       return;
//     }
//     const response = await fetch(`${API_URL}/api/posts/${id}/comments`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         text: commentText,
//       }),
//       cache: "no-store",
//     });
//     if (response.ok) {
//       setCommentVisible("");
//       setCommentText("");
//       router.refresh();
//     }
//   }

//   const handleCancel = () => {
//     setCommentVisible("");
//     setCommentText("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setCommentText(e.target.value)}
//         value={commentText}
//       />
//       <button onClick={handleComment}>comment</button>
//       <button onClick={handleCancel}>cancel</button>
//     </div>
//   );
// }

// export default CommentBox;
