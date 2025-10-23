import PostForm from "../components/PostForm";
import type { Post } from "../types/post";
import { useNavigate } from "react-router-dom";

interface Props {
  onCreate: (data: Omit<Post, "id" | "date">) => void;
}

export default function CreatePost({ onCreate }: Props) {
  const navigate = useNavigate();
  function handleSubmit(data: Omit<Post, "id" | "date">) {
    onCreate(data);
    alert("Đăng bài thành công!");
    navigate("/posts");
  }
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Tạo bài viết mới</h2>
      <PostForm onSubmit={handleSubmit} onCancel={() => navigate("/posts")} submitLabel="Đăng bài" />
    </div>
  );
}