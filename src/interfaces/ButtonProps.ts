import { IconType } from "react-icons"

export default interface ButtonProps {
  text?: string
  icon?: JSX.Element
  onClick: () => void
  type: "button" | "submit" | "reset"
  className?: string
}
