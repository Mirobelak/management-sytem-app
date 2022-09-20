import logo from "../assets/logo.png"

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0 mt-2" >
        <div className="container">
            <div className="d-flex gap-2 align-items-center">
                <img src={logo} alt="logo" className="mr-2" />
                <div><strong>Project MGMT</strong></div>
            </div>
        </div>
    </nav>
  )
}

export default Header