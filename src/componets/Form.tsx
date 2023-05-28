import React, { useState } from "react"
import { useRecoilState } from "recoil"
import todoListAtom from "../globalstates/todoListAtom"
import { v4 as uuidv4 } from "uuid"
import { Button, Input } from "@mui/material"

export default function Form() {
  const [tasks, setTasks] = useRecoilState(todoListAtom)
  const [text, setText] = useState("")

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        taskname: text,
        isCompleted: false,
      },
    ])
    setText("")
  }

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  return (
    <form onSubmit={addTask}>
      <Input
        type="text"
        placeholder="taskを入力してください"
        value={text}
        onChange={handlechange}
        style={{ marginLeft: "10px" }}
      />
      <Button variant="contained" type="submit" style={{ margin: "10px" }}>
        追加
      </Button>
    </form>
  )
}
