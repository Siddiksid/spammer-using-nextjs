"use client";
import { API_URL } from "@/lib/Api_Url";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import DeleteMessage from "./DeleteMessage";
import { FaEdit } from "react-icons/fa";
import EditMessage from "./EditMessage";
import { FaComment } from "react-icons/fa";
import Comments from "./Comments";
import CommentBox from "./CommentBox";

function MessageBox({ posts }) {
  const router = useRouter();
  const [id, setId] = useState("");
  const [commentVisible, setCommentVisible] = useState("");
  const [counter, setCounter] = useState(0);

  async function handleLike(id) {
    const response = await fetch(`${API_URL}/api/posts/${id}/likes`, {
      method: "POST",
      cache: "no-store",
    });
    router.refresh();
  }

  return (
    <div className="message-container">
      {posts.map((post) => {
        return (
          <div className="message-box" key={post.id}>
            {id === post.id ? (
              <EditMessage text={post.text} id={post.id} setId={setId} />
            ) : (
              <p>{post.text}</p>
            )}
            <div className="buttons">
              <div className="like-btn">
                <button onClick={() => handleLike(post.id)}>
                  <AiFillLike />
                </button>
                <span>{post.likes}</span>
              </div>
              <DeleteMessage id={post.id} />
              <button onClick={() => setId(post.id)}>
                <FaEdit />
              </button>
              <button
                onClick={() => setCommentVisible(post.id)}
                
              >
                <FaComment />
              </button>
            </div>

            {commentVisible === post.id && (
              <CommentBox
                id={post.id}
                setCommentVisible={setCommentVisible}
                setCounter={setCounter}
              />
            )}

            <Comments id={post.id} commentVisible={commentVisible} counter={counter}/>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBox;
