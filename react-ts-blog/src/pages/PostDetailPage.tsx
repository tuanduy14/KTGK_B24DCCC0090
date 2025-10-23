import { useParams, useNavigate } from "react-router-dom";
import type { Post } from "../types/post";
import "./PostDetailPage.css";
interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

export default function PostDetailPage({ posts, onDelete }: Props) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));
  if (!post)
    return <div className="postdetail-notfound">Không tìm thấy bài viết!</div>;

  const handleDelete = () => {
    if (!window.confirm("Bạn có chắc muốn xóa bài viết này?")) return;
    onDelete(post.id);
    navigate("/posts");
  };

  return (
    <div className="postdetail-container">
      <img src={post.thumbnail} alt={post.title} className="postdetail-img" />
      <h2 className="postdetail-title">{post.title}</h2>
      <p className="postdetail-meta">
        {post.author} • {post.date} • <span>{post.category}</span>
      </p>
      <p className="postdetail-content">{post.content}</p>
      <div className="postdetail-actions">
        <button
          onClick={() => navigate("/posts")}
          className="postdetail-btn back"
        >
          Quay lại
        </button>
        <button
          onClick={() => navigate(`/posts/edit/${post.id}`)}
          className="postdetail-btn edit"
        >
          Chỉnh sửa
        </button>
        <button
          onClick={handleDelete}
          className="postdetail-btn delete"
        >
          Xóa bài viết
        </button>
      </div>
    </div>
  );
}
