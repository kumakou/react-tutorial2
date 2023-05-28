import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.tsx"
import TodoList from "./pages/TodoList.tsx"
import { RecoilRoot } from "recoil"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/todo", element: <TodoList /> },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
)
