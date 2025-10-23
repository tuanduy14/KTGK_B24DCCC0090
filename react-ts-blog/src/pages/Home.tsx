import PostList from "../components/PostList";
import type { Post } from "../types/post";
import "./Home.css";
interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

export default function Home({ posts, onDelete }: Props) {
  return (
    <div className="home-container">
      <h1 className="home-title">BÀI VIẾT</h1>
      <PostList posts={posts} onDelete={onDelete} />
    </div>
  );
}
