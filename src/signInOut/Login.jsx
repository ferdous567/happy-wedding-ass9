import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'



const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'))
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setError('')
        setSuccess('')


        signIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate(location?.state ? location.state : '/')
                setSuccess(
                    Swal.fire(
                        'Good job!',
                        'You,r Successfully Logged In!',
                        'success'
                      )
                )
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <div>

            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p className="text-red-500 text-sm">{error}</p>
                            }
                            {
                                success && <p className="text-green-500">{success}</p>


                            }
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>


                        <p className="text-center ">-----Or continue with-----</p>
                        <div className="flex mr-2 pl-24 mt-2">
                            <button className="btn-sm text-2xl"><FaFacebook></FaFacebook></button>
                            <button className="btn-sm text-2xl"><FaGithub></FaGithub></button>
                            <button onClick={handleGoogleSignIn} className="btn-sm text-2xl"><FaGoogle></FaGoogle></button>
                        </div>
                        <p className="my-2 text-center">New Here! Please
                            <Link to='/register' className="font-semibold text-blue-600"> Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;