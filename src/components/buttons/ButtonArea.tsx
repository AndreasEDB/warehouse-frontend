import Button from "../../interfaces/Button"

const ButtonArea = ({ buttons }: { buttons: Button[] }) => {
  return (
    <section className="w-full flex justify-stretch gap-2 pt-5 pb-10">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={button.className + " flex-1"}
          onClick={button.onClick}
          type={button.type}
        >
          {button.text}
        </button>
      ))}
    </section>
  )
}
export default ButtonArea
