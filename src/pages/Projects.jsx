import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("https://lab5-5hxb.onrender.com/projects");
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError("no data available");
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  if(loading){
    return <p>Loading.</p>;
  }else if(error){
    return <p className="text-danger">{error}</p>;
  }
  return (
    <div>
      <h2 className="fw-bold mb-4">Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className="card shadow-sm mb-3">
          <div className="card-body">
            <h5 className="fw-bold">{p.name}</h5>
            <p><strong>Author:</strong> {p.author}</p>
            <p><strong>Languages:</strong> {p.languages.join(", ")}</p>
            <p>{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
