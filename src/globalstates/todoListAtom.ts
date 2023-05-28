import { atom } from "recoil"
import { TodoListType } from "../type/todoListType"

const todoListAtom = atom<TodoListType[]>({
  key: "todoListAtom",
  default: [],
})

export default todoListAtom
