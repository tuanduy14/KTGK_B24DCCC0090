import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetailPage";
import EditPost from "./pages/EditPost";
import { initialPosts } from "./data";
import type { Post } from "./types/post";

export default function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  function handleDelete(id: number) {
    setPosts(posts.filter((p) => p.id !== id));
  }
  function handleCreate(data: Omit<Post, "id" | "date">) {
    setPosts([
      { ...data, id: Date.now(), date: new Date().toISOString().slice(0, 10) },
      ...posts,
    ]);
  }
  function handleUpdate(id: number, data: Omit<Post, "id" | "date">) {
    setPosts(posts.map((p) => (p.id === id ? { ...p, ...data } : p)));
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route
          path="/posts"
          element={<Home posts={posts} onDelete={handleDelete} />}
        />
        <Route
          path="/create"
          element={<CreatePost onCreate={handleCreate} />}
        />
        <Route
          path="/posts/:id"
          element={<PostDetail posts={posts} onDelete={handleDelete} />}
        />
        <Route
          path="/posts/edit/:id"
          element={<EditPost posts={posts} onUpdate={handleUpdate} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
