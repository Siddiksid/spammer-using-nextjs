import { API_URL } from "@/lib/Api_Url";
import MessageBox from "./MessageBox";
import NewMessage from "./NewMessage";

export default async function Home() {
  const request = await fetch(`${API_URL}/api/posts`, { cache: "no-store" });
  const response = await request.json();
  if (!response.success) {
    alert("Data fetching failed");
  }
  console.log(response);
  const posts = response.posts;

  return (
    <div>
      <h1>Spammer</h1>
      <NewMessage />
      <MessageBox posts={posts} />
    </div>
  );
}
