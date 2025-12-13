import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/'>Login</Link>
            <Link to='/register'>Register</Link>
        </nav>
    </div>
  )
}

export default Navbar