import { ReactNode } from "react"

const BaseSidebarComponent = ({children}: {children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}
export default BaseSidebarComponent