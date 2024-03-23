import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const err = useRouteError()
    //console.log(err)
    return(
        <div className="errorcontainer">
            <h1>Ooops!!!</h1>
            <h3>Something went wrong!! </h3>
            <h4>{err.data}</h4>
            <p>{err.status}: {err.statusText}</p>
        </div>
    )
}
export default ErrorPage;