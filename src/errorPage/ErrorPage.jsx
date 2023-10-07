import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-40">
            <h1 className="text-2xl text-slate-300">Oops..!</h1>
            <h2 className="text-7xl font-extrabold text-red-500">404</h2>
            <p>Something went wrong. Page not found!</p>
            <Link to = '/'>
            <button className="btn btn-warning">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;