import type { Post } from "../types/post";
import "./PostDetail.css";

interface Props {
  post: Post;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function PostDetail({ post, onBack, onEdit, onDelete }: Props) {
  return (
    <div className="postdetail-container">
      <img src={post.thumbnail} alt={post.title} className="postdetail-img" />
      <h2 className="postdetail-title">{post.title}</h2>
      <p className="postdetail-meta">{post.author} • {post.date} • <span>{post.category}</span></p>
      <p className="postdetail-content">{post.content}</p>
      <div className="postdetail-actions">
        <button onClick={onBack} className="postdetail-btn back">Quay lại</button>
        <button onClick={onEdit} className="postdetail-btn edit">Chỉnh sửa</button>
        <button onClick={onDelete} className="postdetail-btn delete">Xóa bài viết</button>
      </div>
    </div>
  );
}