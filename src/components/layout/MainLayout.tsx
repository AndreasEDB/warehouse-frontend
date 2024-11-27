import { ReactNode } from "react"
import Sidebar from "../sidebar/Sidebar"
import Modal from "../modal/Modal"
import Header from "./header/Header"

const MainLayout = ({ children }: { children: ReactNode }) => {
  const headerHeight: number = 16

  return (
    <div className="relative">
      <Header height={headerHeight} />
      <main className={`pt-${headerHeight}`}>{children}</main>
      <Sidebar />
      <Modal />
    </div>
  )
}

export default MainLayout
