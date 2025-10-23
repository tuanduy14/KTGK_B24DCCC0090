import type { Post } from "../types/post";
import PostCard from "./PostCard";
import { useState } from "react";
import "./PostList.css";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

export default function PostList({ posts, onDelete }: Props) {
  const [filter, setFilter] = useState("");
  const filtered = posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <div className="postlist-header">
        <input
          type="text"
          placeholder="Tìm kiếm tiêu đề..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="postlist-search"
        />
        <span className="postlist-count">Tổng số bài viết: {filtered.length}</span>
      </div>
      <div className="postlist-grid">
        {filtered.map(post => (
          <PostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}