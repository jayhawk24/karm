import { useQuery } from "@tanstack/react-query"
import Tabs from "components/Tabs/Tabs"
import TodoCard from "components/TodoCard"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { getTodos } from "services/todos"
import { Todo } from "types/types"

type Props = {
  todos: Todo[]
}

const Todo: FC<Props> = (props) => {
  const router = useRouter()
  const { userId } = router.query
  const { data: todos } = useQuery(
    ["todos"],
    () => getTodos(userId as string),
    {
      initialData: props.todos
    }
  )

  return (
    <div className="my-10">
      <Tabs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const todos = await getTodos(context.params?.userId as string)

  return {
    props: {
      todos
    }
  }
}

export default Todo
