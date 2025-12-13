import { useNavigate } from "react-router-dom"



function Login() {

    const navigate=useNavigate() 

    function llevar(){
        navigate('/dashboard')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={llevar}>
                <input type="email" placeholder="escriba email"/>
                <input type="password" placeholder="escriba password"/>
                <button type="submit" className="botonSubmit">Login</button>
            </form>
        </div>
    )
}

export default Login