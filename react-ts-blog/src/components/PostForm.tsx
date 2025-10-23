import type { Post } from "../types/post";
import { useState } from "react";
import "./PostForm.css";

interface Props {
  initial?: Partial<Post>;
  onSubmit: (data: Omit<Post, "id" | "date">) => void;
  onCancel: () => void;
  submitLabel: string;
}

const categories = ["Công nghệ", "Du lịch", "Ẩm thực", "Đời sống", "Khác"];

export default function PostForm({ initial = {}, onSubmit, onCancel, submitLabel }: Props) {
  const [title, setTitle] = useState(initial.title || "");
  const [author, setAuthor] = useState(initial.author || "");
  const [thumbnail, setThumbnail] = useState(initial.thumbnail || "");
  const [content, setContent] = useState(initial.content || "");
  const [category, setCategory] = useState(initial.category || categories[0]);
  const [errors, setErrors] = useState<{ title?: string; author?: string; content?: string }>({});

  function validate() {
    const newErrors: typeof errors = {};
    if (title.trim().length < 10) newErrors.title = "Tiêu đề phải ít nhất 10 ký tự";
    if (author.trim().length < 3) newErrors.author = "Tác giả phải ít nhất 3 ký tự";
    if (content.trim().length < 50) newErrors.content = "Nội dung phải ít nhất 50 ký tự";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    onSubmit({ title, author, thumbnail, content, category });
  }

  return (
    <form className="postform" onSubmit={handleSubmit}>
      <label>Tiêu đề</label>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        className="postform-input"
      />
      {errors.title && <div className="postform-error">{errors.title}</div>}

      <label>Tác giả</label>
      <input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
        className="postform-input"
      />
      {errors.author && <div className="postform-error">{errors.author}</div>}

      <label>URL ảnh thumbnail</label>
      <input
        value={thumbnail}
        onChange={e => setThumbnail(e.target.value)}
        className="postform-input"
      />

      <label>Nội dung</label>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={10}
        required
        className="postform-textarea"
      />
      {errors.content && <div className="postform-error">{errors.content}</div>}

      <label>Thể loại</label>
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="postform-select"
      >
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <div className="postform-actions">
        <button type="submit" className="postform-btn submit">{submitLabel}</button>
        <button type="button" className="postform-btn cancel" onClick={onCancel}>Hủy</button>
      </div>
    </form>
  );
}