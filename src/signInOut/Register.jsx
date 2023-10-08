import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        setError('')
        setSuccess('')

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset()
            setSuccess(toast('Successfully Create Account.'))
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })
    }
    return (
        <div>
            
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Register Here!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                success && <>
                                <p className="text-green-500">{success}</p>
                                <Navigate to = '/login'></Navigate>
                                </>
                            }
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        
                        <p className="my-2 text-center">Have an account? Please
                            <Link to = '/login' className="font-semibold text-blue-600"> Login</Link></p>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
        
    );
};

export default Register;