import React, { FC } from "react"
import { Post } from "types/types"

type Props = {
  post: Post
}

const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className="bg-slate-300 p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-6">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostCard
