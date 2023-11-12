import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <div>
        <BallTriangle   
        height="100"
        width="100"
        color="tomato"
        ariaLabel="loading">
        </BallTriangle>
        </div>
    )
}

export default Loader