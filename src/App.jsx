import TypingEffect from "./TypingEffect";
import { Github, ExternalLink } from "lucide-react";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Save theme to localStorage (optional)
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Amaan's Portfolio</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="nav-actions">
          <button onClick={toggleDarkMode} className="toggle-theme">
            {darkMode ? "🌞" : "🌙"}
          </button>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="container">
        <div className="app">
          <section id="home" className="card-section">
            <div className="card home-card">
              <div className="home-content">
                <div className="home-text">
                  {/* <h1>
                    Hi, I'm <span className="highlight">Mohd Amaan</span>
                  </h1> */}
                  <h1>Hi, I'm Amaan.</h1>
                  <TypingEffect />

                  <p>Frontend Developer | React Enthusiast | Creative Coder</p>
                  <p>
                    I design and build responsive, beautiful websites that make
                    an impact.
                  </p>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                  >
                    📄 Download Resume
                  </a>
                </div>

                <div className="home-image">
                  <img
                    src={
                      darkMode
                        ? "/src/assets/PicDarkMode.png"
                        : "/src/assets/PicLightMode.png"
                    }
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="card-section">
            <div className="card">
              <h2>About Me</h2>
              <p>
                I'm a self-taught frontend developer with a strong passion for
                turning ideas into interactive, user-friendly websites. I enjoy
                working with modern technologies like React, and I love learning
                new things every day.
              </p>
              <p>
                When I'm not coding, I enjoy reading tech blogs, watching
                tutorials, and collaborating with other developers.
              </p>
            </div>
          </section>

          {/* <section id="projects" className="card-section">
            <div className="card">
              <h2>Projects</h2>
              <div className="project-list">
                <div className="project-card">
                  <h3>React Portfolio</h3>
                  <p>
                    A personal portfolio site showcasing my work and skills
                    using React and custom CSS.
                  </p>
                </div>
                <div className="project-card">
                  <h3>Todo List App</h3>
                  <p>
                    A simple productivity tool to add, delete, and mark tasks
                    using React hooks.
                  </p>
                </div>
                <div className="project-card">
                  <h3>Weather App</h3>
                  <p>
                    A real-time weather application using OpenWeatherMap API
                    with location search and forecast.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          */}

          <section id="projects" className="card-section">
            <div className="card">
              <h2>Projects</h2>
              <div className="project-list">
                
                <div className="project-card">
                  <h3>Travel Website</h3>
                  <p>
                    A responsive travel website with smooth scrolling and modern
                    design.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/AmaanMalick/travel-website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://amaanmalick.github.io/Travel-Website/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                  <div className="project-tech">HTML, CSS, JavaScript</div>
                </div>

                <div className="project-card">
                  <h3>Restaurant Website</h3>
                  <p>
                    A stylish restaurant website featuring menu, contact, and
                    responsive design.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/AmaanMalick/restaurant-website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://amaanmalick.github.io/Restaurant-Website/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                  <div className="project-tech">HTML, CSS</div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="card-section">
            <div className="card skills-card">
              <h2>Skills</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fab fa-html5 html"></i>
                  <p>HTML</p>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt css"></i>
                  <p>CSS</p>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js js"></i>
                  <p>JavaScript</p>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react react"></i>
                  <p>React</p>
                </div>
                <div className="skill-item">
                  <i className="fab fa-java java"></i>
                  <p>Java</p>
                </div>
                <div className="skill-item">
                  <i className="fas fa-code c"></i>
                  <p>C</p>
                </div>
                <div className="skill-item">
                  <i className="fas fa-laptop-code cpp"></i>
                  <p>C++</p>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python python"></i>
                  <p>Python</p>
                </div>
                <div className="skill-item">
                  <i className="fab fa-git git"></i>
                  <p>Git</p>
                </div>
                <div className="skill-item">
                  <i className="fab fa-github github"></i>
                  <p>GitHub</p>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database sql"></i>
                  <p>SQL</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="card-section">
            <div className="card">
              <h2>Contact Me</h2>
              <p>Have a project in mind or want to collaborate? Let's talk!</p>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:youremail@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>&copy; 2025 Mohd Amaan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
