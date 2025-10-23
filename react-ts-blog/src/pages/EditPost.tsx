import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import type { Post } from "../types/post";

interface Props {
  posts: Post[];
  onUpdate: (id: number, data: Omit<Post, "id" | "date">) => void;
}

export default function EditPost({ posts, onUpdate }: Props) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <div className="editpost-notfound">Không tìm thấy bài viết!</div>;

  function handleSubmit(data: Omit<Post, "id" | "date">) {
    if (!post) return;
    onUpdate(post.id, data);
    alert("Cập nhật thành công!");
    navigate(`/posts/${post.id}`);
  }

  return (
    <div className="editpost-container">
      <h2 className="editpost-title">Chỉnh sửa bài viết</h2>
      <PostForm
        initial={post!}
        onSubmit={handleSubmit}
        onCancel={() => navigate(`/posts/${post.id}`)}
        submitLabel="Cập nhật"
      />
    </div>
  );
}