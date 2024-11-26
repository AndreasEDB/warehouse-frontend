import { ReactNode } from "react"
import Sidebar from "../sidebar/Sidebar"
import Modal from "../modal/Modal"

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <main>{children}</main>
      <Sidebar />
      <Modal />
    </div>
  )
}

export default MainLayout
