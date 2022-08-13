import "./Header.css";

const Header = () => {
  return (
    <>
      <div className='header'>
        <h2 className='logo'>Medi<span>Care+</span></h2>
        <div className='menu'>
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>News</a></li>
            <li className="footer-hide"><a className="contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;