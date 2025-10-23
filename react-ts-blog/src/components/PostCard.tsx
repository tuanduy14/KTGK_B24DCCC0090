import type { Post } from "../types/post";
import { useNavigate } from "react-router-dom";
import "./PostCard.css";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

export default function PostCard({ post, onDelete }: Props) {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm("Bạn có chắc muốn xóa bài viết này?")) return;
    onDelete(post.id);
  };

  return (
    <div className="postcard">
      <img src={post.thumbnail} alt={post.title} className="postcard-img" />
      <h2 className="postcard-title">{post.title}</h2>
      <p className="postcard-meta">{post.author} • {post.date}</p>
      <p className="postcard-desc">{post.content.slice(0, 100)}...</p>
      <div className="postcard-actions">
        <button
          onClick={() => navigate(`/posts/${post.id}`)}
          className="postcard-btn read"
        >
          Đọc thêm
        </button>
        <button
          onClick={handleDelete}
          className="postcard-btn delete"
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
