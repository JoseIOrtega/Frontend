import {Link} from 'react-router-dom'

function Register() {
  return (
    <div>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="escriba nombre"></input>
            <input type="email" placeholder="escriba email"/>
            <input type="password" placeholder="escriba password"/>
            <button type="submit" className='botonSubmit'>Register</button>
            <Link to='/'>Login</Link>
            <a href="/">Login</a>
        </form>
    </div>
  )
}

export default Register;
