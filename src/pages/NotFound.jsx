import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-3 fw-bold">404</h1>
      <p className="lead mb-4">Oops! That page doesn't exist.</p>
      <Link className="btn btn-primary btn-lg" to="/">Return Home</Link>
    </div>
  );
}
