import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <container>
        <BallTriangle   
        height="100"
        width="100"
        color="tomato"
        ariaLabel="loading">
        </BallTriangle>
        </container>
    )
}

export default Loader