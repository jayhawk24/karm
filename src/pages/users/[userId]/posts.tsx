import { useQuery } from "@tanstack/react-query"
import PostCard from "components/PostCard"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { getPosts } from "services/posts"
import { Post } from "types/types"

type Props = {
  posts: Post[]
}

const Posts: FC<Props> = (props) => {
  const router = useRouter()
  const { userId } = router.query
  const { data: posts } = useQuery(
    ["posts"],
    () => getPosts(userId as string),
    {
      initialData: props.posts
    }
  )

  return (
    <div className="my-10">
      <h1 className="font-bold text-xl">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts(context.params?.userId as string)

  return {
    props: {
      posts
    }
  }
}

export default Posts
