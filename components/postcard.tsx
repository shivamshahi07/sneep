import { Post } from '@prisma/client';
// import { User } from '@prisma/client';
interface PostCardProps {
  post: Post;
//   user:User,
}

export default function ProductCard({ post }: PostCardProps) {
  return (
    <div className="text-black  mt-28 ">
        <div>code:{post.code}</div>
        <div>description:{post.description}</div>
        <div>author:{post.authorId}</div>
        <div>comment:{post.comment}</div>
        <div>upvotes:{post.upvotes}</div>
        <div>downvotes:{post.downvotes}</div>
      <hr/>
    </div>
  );
}
