import OverlayProps from "../interfaces/OverlayProps"

const Overlay = ({ display, onClick }: OverlayProps) => {
  return (
    <div
      className={[
        "backdrop-blur-sm fixed top-0 right-0 bottom-0 left-0 bg-slate-900/70",
        display ? "visible" : "hidden",
      ].join(" ")}
      onClick={onClick}
    ></div>
  )
}
export default Overlay
