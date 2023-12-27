import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div>
            <h1>Uh-oh! This page doesn't exist</h1>
            <Link to='/'>Click here to go back to the homepage</Link>
        </div>
    )
}