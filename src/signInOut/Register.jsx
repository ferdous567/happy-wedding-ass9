import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";



const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
 

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const photo = form.get('photo');
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        console.log(photo, name, email, password);

        if(password.length < 6){
            setError('Password should be at least 6 characters or longer.');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('Password must be an Upprecase latter.');
            return;
        }
        else if(!/[0-9]/.test(password)){
            setError('Password have should be a number.');
            return;
        }

        setError('')
        setSuccess('')

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();

            updateProfile(result.user, {
                displayName: name,
               
            })
            .then(() => console.log('Profile Updated'))
            .catch()

            setSuccess(
                Swal.fire(
                    'Congratulations!!',
                    'Registration Completed! Login Now.',
                    'success'
                  )
            );
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
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                type="password" 
                                name="password" 
                                placeholder="password" 
                                className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p className="text-red-500 text-sm">{error}</p>
                            }
                            {
                                success && <>
                                <p className="text-green-500"></p>
                                <Navigate to = '/login'>{success}</Navigate>
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
            
        </div>
        
    );
};

export default Register;