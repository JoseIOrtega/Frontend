import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/cart'>Carrito</Link>
        </nav>
    </div>
  )
}

export default Navbar