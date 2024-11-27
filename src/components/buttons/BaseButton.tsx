import ButtonProps from "../../interfaces/ButtonProps"

const BaseButton = ({ text, icon, onClick, type, className }: ButtonProps) => {
  return (
    <button
      className={className + " h-full"}
      onClick={onClick}
      type={type}
    >
      {text && text}
      {icon && icon}
    </button>
  )
}
export default BaseButton
