import React, { FC } from "react"
import { Todo } from "types/types"

type Props = {
  todo: Todo
}

const TodoCard: FC<Props> = ({ todo }) => {
  return (
    <div className="bg-slate-300 p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-6">{todo.title}</h2>
      {/* <p>{post.body}</p> */}
    </div>
  )
}

export default TodoCard
