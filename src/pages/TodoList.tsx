import Header from "../componets/Header"
import Form from "../componets/Form"
import Todo from "../componets/Todo"
import { useRecoilValue } from "recoil"
import { TodoListType } from "../type/todoListType"
import todoListAtom from "../globalstates/todoListAtom"
import { Box, List } from "@mui/material"
import "./todoList.css"

export default function TodoList() {
  const todolist = useRecoilValue(todoListAtom)
  return (
    <div>
      <Header />
      <div className="container">
        <Form />
        {todolist.map((task: TodoListType) => (
          <Box
            sx={{
              width: "100%",
              maxWidth: 200,
              bgcolor: "background.paper",
              margin: "10px",
            }}
          >
            <List>
              <Todo
                id={task.id}
                taskname={task.taskname}
                isCompleted={task.isCompleted}
              />
            </List>
          </Box>
        ))}
      </div>
    </div>
  )
}
