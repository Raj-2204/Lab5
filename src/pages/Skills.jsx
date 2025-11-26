import { useState } from "react";
const skills = [
  {name:"Java", category: "Programming"},
  {name:"Python", category: "Programming"},
  {name:"React", category: "Frontend"},
  {name:"JavaScript", category: "Frontend"},
  {name:"Firebase", category: "Backend"},
  {name:"Git", category: "Tools"},
  {name:"Node.js", category: "Backend"},
  {name:"Socket.io", category: "Backend"},
  {name:"SupaBase", category: "Backend"},
  {name:"HTML", category: "Frontend"},
  {name:"CSS", category: "Frontend"},
  {name:"Bootstrap", category: "Frontend"},
  {name:"Vite", category: "Tools"},  
];

export default function Skills() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = skills.filter((skill) => {
    return (
      skill.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || skill.category === category)
    );
  });

  return (
    <div>
      <h2 className="fw-bold mb-4">Skills</h2>
      <input type="text" className="form-control mb-3"
        placeholder="Search skills..." value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex gap-2 mb-3">
        {["Programming", "Frontend", "Backend", "Tools"].map((category) => (
          <button key={category} className={`btn btn-sm ${category === category ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCategory(category)}>{category}</button>
        ))}
        <button className="btn btn-sm btn-secondary" onClick={() => setCategory("")}>Clear</button>
      </div>

      <ul className="list-group">
        {filtered.map((skill, index) => (
          <li key={index} className="list-group-item">
            {skill.name} <span className="text-muted">({skill.category})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
