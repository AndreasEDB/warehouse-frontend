export default interface Button {
  text: string
  onClick: () => void
  type: "button" | "submit" | "reset"
  className?: string
}
