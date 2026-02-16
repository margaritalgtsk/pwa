import { useEffect, useState } from "react";
import styles from "./Posts.module.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [setPosts]);

  return (
    <div className={styles.postsContainer}>
      <h2>Posts: {posts.length}</h2>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
