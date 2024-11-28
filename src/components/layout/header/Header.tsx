import Logo from "./Logo"
import Nav from "./Nav"

const Header = ({ height }: { height: number }) => {
  return (
    <header
      className={`h-${height} shadow-lg p-3 w-full fixed top-0 left-0 right-0 flex justify-between justify-items-center`}
    >
      <Logo />
      <div></div>
      {/* <Nav /> */}
    </header>
  )
}
export default Header
