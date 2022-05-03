import { Link } from "wouter";

export const Home = () => {
  return (
    <div>
      <h1>App</h1>
        <Link to="/search/colombia">Gifs de colombia</Link>
        <Link to="/search/ecuador">Gifs de ecuador</Link>
        <Link to="/search/chile">Gifs de chile</Link>
    </div>
  )
}
