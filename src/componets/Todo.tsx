import React from "react"
import { TodoListType } from "../type/todoListType"
import { Divider, ListItem, ListItemText } from "@mui/material"

export default function Todo({ id, taskname, isCompleted }: TodoListType) {
  return (
    <>
      <ListItem disablePadding key={id}>
        <ListItemText primary={taskname} />
      </ListItem>
      <Divider />
    </>
  )
}
