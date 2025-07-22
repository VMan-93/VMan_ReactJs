import { useRouteError } from "react-router";

const ErrorComp = () => {
const err = useRouteError();
console.log(err);

    return (
        <div>
            <h1>Oops..!</h1>
            <h2>Something Went Wrong..!</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default ErrorComp;