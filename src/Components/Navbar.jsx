import '../Stylesheet/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div>
            <h1 className='logo'>Gregory. Mensah</h1>
        </div>
        <div>
            <ul className='nav-options'>
                <li><a href='/'>Home</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/Projects'>Projects</a></li>
                <li><a href='/Contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
