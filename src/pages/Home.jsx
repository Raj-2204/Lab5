
import profileImg from "../assets/photo.JPG";



export default function Home() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">
        
        {/* Left side text */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold mb-3">Welcome to My Portfolio</h1>
          <p className="lead">
            Hi, I'm <strong>Rajveer Singh</strong>, a Computer Science student at Dalhousie University.
            I love building interactive, modern, and accessible web applications.
          </p>
          <p className="text-muted">
            Explore my work, skills, and academic journey.
          </p>
        </div>

        {/* Right side image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img 
            src={profileImg}
            alt="Rajveer Singh" 
            className="img-fluid rounded-circle shadow-sm home-profile-img"
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </div>

      </div>
    </div>
  );
}
