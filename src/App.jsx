import { useState, useEffect } from "react";
import "./App.css";
import profileImg from "./assets/profile.png";
import ddosSplunkImg from "./assets/ddos-splunk.png";
import serverlessImg from "./assets/serverless-security.png";
import regionalEncrypterImg from "./assets/regional-encrypter.png";
import pythonToolkitImg from "./assets/python-toolkit.png";
import flipperZeroImg from "./assets/flipper-zero.png";
import article1Img from "./assets/article-1.png";
import article2Img from "./assets/article-2.png";
import article3Img from "./assets/article-3.png";
import BinaryTicker from "./BinaryRain";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ subject: "Requesting Resume - [Your Name]", message: "" });

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  /* ── Scroll: shrink header ── */
  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Section entrance animations ── */
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("section-animate");
        }),
      { threshold: 0.08 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* ── Close mobile menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 992) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subject, message } = formData;
    const body = encodeURIComponent(message);
    window.location.href = `mailto:prajwal.yadav03@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ══════════════════════════════
          HEADER / NAV
      ══════════════════════════════ */}
      <header className={headerScrolled ? "header-scroll" : ""}>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="#home">
                <span>&lt;</span> PY <span>/&gt;</span>
              </a>
            </div>

            <ul className={`nav-links${menuOpen ? " nav-active" : ""}`}>
              {[
                { id: "home",           label: "Home" },
                { id: "about",          label: "About Me" },
                { id: "education",      label: "Education" },
                { id: "experience",     label: "Experience" },
                { id: "skills",         label: "Skills" },
                { id: "projects",       label: "Projects" },
                { id: "certifications", label: "Certifications" },
                { id: "article",        label: "Articles" },
                { id: "contact",        label: "Contact Me" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={closeMenu}>{label}</a>
                </li>
              ))}
            </ul>

            <button
              className={`hamburger${menuOpen ? " active" : ""}`}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </button>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Prajwal Yadav</h1>
              <h2>Ethical Hacker · Cyber Crime Investigation · Compliance</h2>
              <p>
                Dedicated cybersecurity researcher with skills in networking,
                basic penetration testing, OSINT, governance, and technical
                documentation, supported by an MSc in Cybersecurity and
                hands-on training. Seeking a role to strengthen security
                posture using offensive, defensive, and compliance strategies.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn primary-btn">Get In Touch</a>
                <a href="#projects" className="btn secondary-btn">View Projects</a>
              </div>
              <div className="social-icons">
                <a href="#" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
                <a href="#" target="_blank" aria-label="GitHub"><i className="fab fa-github" /></a>
                <a href="#" target="_blank" aria-label="TryHackMe"><i className="fas fa-shield-alt" /></a>
                <a href="#" target="_blank" aria-label="Medium"><i className="fab fa-medium" /></a>
                <a href="#" target="_blank" aria-label="Email"><i className="fas fa-envelope" /></a>
              </div>
            </div>

            <div className="hero-image">
              <div className="profile-frame">
                <img src={profileImg} alt="Profile" className="profile-img" />
              </div>
              <BinaryTicker />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ABOUT
      ══════════════════════════════ */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="underline" />
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Cybersecurity professional with a strong focus
                on Vulnerability Assessment and Penetration Testing (VAPT). My
                expertise spans ethical hacking, cryptography, network security,
                and red team operations.
              </p>
              <p>
                Currently pursuing my degree in Computer Science Engineering, I
                am constantly expanding my skills in the rapidly evolving field
                of information security and offensive security research.
              </p>
              <a href="mailto:prajwal.yadav03@gmail.com?subject=CV%20Request" className="btn primary-btn" style={{ marginTop: "1rem" }}>
                Request CV
              </a>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope" />
                <span>prajwal.yadav03@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone" />
                <span>+91 9881124493</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" />
                <span>Dublin, Ireland / Kolhapur, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-user-secret" />
                <span>Open to Cybersecurity &amp; Forensic Roles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          EDUCATION
      ══════════════════════════════ */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-header">
            <h2>Education</h2>
            <div className="underline" />
          </div>
          <div className="timeline">
            {[
              { degree: "Master of Science (MSc) — Cybersecurity", school: "National College of Ireland", date: "Sep 2023 – Nov 2024", detail: "Grade Level 9 · First Class Honours" },
              { degree: "Bachelor of Technology (BTech) — Computer Science", school: "Walchand College of Engineering (A Govt. Aided Autonomous Institute), Sangli, M.S.", date: "Aug 2019 – Aug 2023", detail: "First Class Honours" },
            ].map((edu) => (
              <div className="timeline-item" key={edu.degree}>
                <div className="timeline-icon"><i className="fas fa-graduation-cap" /></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <span className="timeline-date">{edu.date}</span>
                  <p>{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          EXPERIENCE
      ══════════════════════════════ */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2>Experience</h2>
            <div className="underline" />
          </div>
          <div className="timeline">
            {[
              { role: "Security Analyst (Technical Analyst)", company: "Evenu Computers, Sangli", date: "Nov 2022 – Jan 2024", points: [
                "Supported basic cybersecurity operations through endpoint protection, secure access provisioning, MFA support, VPN troubleshooting, and user account administration across Active Directory and Azure AD environments.",
                "Assisted with vulnerability-focused security testing and firewall/network troubleshooting by working on routers, switches, Fortinet devices, wireless access points, and secure software configurations for client environments.",
                "Maintained accurate technical and operational documentation, including incident updates, service requests, asset records, configuration notes, and support activity tracking within ServiceNow and internal processes.",
                "Delivered L1/L2 technical support in onsite and remote environments using AnyDesk and ITIL-based workflows, resolving user issues across hardware, Microsoft 365, collaboration tools, and business applications including government platforms.",
                "Handled end-user device and service operations such as laptop imaging, Autopilot setup, software deployment, asset allocation, video conferencing support, and coordination with internal teams to resolve recurring technical issues.",
              ]},
              { role: "Customer Assistant | IT Support Specialist", company: "Tesco Ireland, Dublin 4, Ireland", date: (() => { const start = new Date(2023, 9); const now = new Date(); const total = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()); const yrs = Math.floor(total / 12); const mos = total % 12; const dur = `${yrs > 0 ? yrs + " yr" + (yrs > 1 ? "s" : "") : ""}${yrs > 0 && mos > 0 ? " " : ""}${mos > 0 ? mos + " mo" + (mos > 1 ? "s" : "") : ""}`; return `Oct 2023 – Present · Part-time · ${dur}`; })(), points: [
                "Delivered daily IT support for store systems, troubleshooting POS/till failures, self-checkout errors, handheld scanners, and network connectivity issues using Tesco's internal support portal and ticket system.",
                "Managed IT incidents and service requests through Main Office support calls and portal ticket raising, ensuring timely resolution of critical till maintenance and operational system disruptions.",
                "Supported operational systems including Whoosh delivery terminals and store software, monitoring alerts, maintaining accurate order processing, and ensuring reliable technical workflow during peak shifts.",
                "Performed inventory validation and digital system updates across store databases, verifying stock levels, pricing accuracy, and product information while maintaining compliance with operational standards.",
                "Handled office administration and technical coordination, including staff rostering, payroll adjustments, internal email escalations, and documentation for IT service continuity and team operations.",
              ]},
            ].map((exp) => (
              <div className="timeline-item" key={exp.role}>
                <div className="timeline-icon"><i className="fas fa-briefcase" /></div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span className="timeline-date">{exp.date}</span>
                  <ul>{exp.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SKILLS
      ══════════════════════════════ */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2>My Skills</h2>
            <div className="underline" />
          </div>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Security Operations</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>SOC Fundamentals<br/>Network Traffic Analysis<br/>EDR<br/>Log Analysis Basics<br/>AWS Security Hub</span></div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Network Security</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>Networking Concepts<br/>Network Monitoring<br/>Firewall<br/>Routing &amp; Switching<br/>TCP/IP Protocols<br/>OSI Model<br/>Wireshark<br/>Cisco Packet Tracer</span></div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cybersecurity / VAPT</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>OWASP Top 10<br/>CIA / AAA<br/>MFA<br/>MITRE ATT&amp;CK<br/>Cyber Kill Chain<br/>NIST IR Lifecycle</span></div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Forensics &amp; Cybercrime</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>Digital Evidence Management<br/>Cybercrime Investigation Workflow<br/>Legal &amp; Regulatory Context<br/>Chain of Custody<br/>SOPs</span></div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Compliance</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>ISO 27001<br/>Digital Operational Resilience Act (DORA)<br/>PDPA Act 2023<br/>BNS 2023<br/>IT Laws</span></div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Operating Systems</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>Windows<br/>Kali Linux<br/>macOS<br/>Tails OS (Basics)</span></div>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI Platforms</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>Gemini<br/>Claude<br/>ChatGPT</span></div>
              </div>
            </div>
            <div className="skill-category">
              <h3>OSINT</h3>
              <div className="skills-grid">
                <div className="skill-item"><span>Google Dorking<br/>Email OSINT<br/>Phone Number OSINT<br/>OSINT Framework<br/>Social Media OSINT<br/>Dark Web Basics<br/>TOR</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROJECTS
      ══════════════════════════════ */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Projects</h2>
            <div className="underline" />
          </div>
          <div className="projects-grid">
            {[
              { title: "Enhancing Serverless Architecture Security", desc: "Developed a robust security framework for serverless computing environments, focusing on mitigating injection attacks across AWS Lambda, Google Cloud Functions, and Azure Functions. Integrated secure coding practices, advanced anomaly detection with machine learning (Isolation Forest), and real-time monitoring using AWS CloudWatch to safeguard against SQL injection, XSS, and command injections.", tech: ["AWS Lambda", "CloudWatch", "Machine Learning", "Cloud Security"], img: serverlessImg },
              { title: "DDoS Monitoring Using Splunk in SDN", desc: "Demonstrated a software-defined network (SDN) and simulated DDoS attacks using malicious scripts. Attack patterns were detected and monitored through Splunk, providing real-time visualization and analysis showcasing SIEM tools for network threat detection and mitigation.", tech: ["Splunk", "SDN", "SIEM", "Network Security"], img: ddosSplunkImg },
              { title: "Indian Regional Languages Encrypter", desc: "Developed a prototype of a regional language encrypter used to convert plain text into cipher, enabling cryptographic protection for Indian regional language content.", tech: ["Python", "Cryptography"], img: regionalEncrypterImg },
              { title: "Flipper Zero Offensive Security Project", desc: "Conducted offensive security testing using Flipper Zero for RFID/NFC key fob duplication, frequency analysis (433/868 MHz), and sub-GHz signal capture/replay to identify vulnerabilities in physical access control systems. Demonstrated IoT/hardware hacking techniques including rolling code analysis, GPIO-based relay attacks, and BadUSB payload delivery for authorized red team assessments.", tech: ["Flipper Zero", "RFID/NFC", "BadUSB", "Red Team", "IoT Security"], img: flipperZeroImg },
              { title: "Python Pentesting Toolkit", desc: "Built a 16-tool Python suite including ARP/DNS spoofers, directory busters, web vulnerability scanners, hash crackers, and bruteforcers for comprehensive pentesting automation.", tech: ["Python", "ARP Spoofing", "DNS", "Offensive Security"], img: pythonToolkitImg },
            ].map((p) => (
              <div className="project-card" key={p.title}>
                <div className="project-header">
                  <h3>{p.title}</h3>
                </div>
                {p.img && <img src={p.img} alt={p.title} className="project-img" />}
                <div className="project-body">
                  <p className="project-description">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CERTIFICATIONS
      ══════════════════════════════ */}
      <section id="certifications" className="certifications">
        <div className="container">
          <div className="section-header">
            <h2>Certifications</h2>
            <div className="underline" />
          </div>
          <div className="certifications-grid">
            {[
              { icon: "fas fa-shield-alt", name: "Certified Cyber Crime Intervention Officer", issuer: "Information Sharing and Analysis Center", url: null },
              { icon: "fas fa-search", name: "Defronix Certified Cyber Crime Investigator", issuer: "Defronix", url: null },
              { icon: "fas fa-building-shield", name: "Digital Operational Resilience Act Trained Professional (DORATPro)", issuer: "Cyber Risk GmbH", url: "https://www.cyber-risk-gmbh.com/Prajwal_Yadav.html" },
              { icon: "fas fa-crosshairs", name: "Foundation Level Threat Intelligence Analyst", issuer: "arcX", url: "https://arcx.io/verify-certificate?id=5dbdf1583260fa763216e554b917de7dfc19141d&k=9e73c73210f44582a981b6c38c5d104d" },
              { icon: "fas fa-code", name: "Certified Appsec Practitioner (CAP)", issuer: "The SecOps Group", url: null },
              { icon: "fas fa-lock", name: "ISO/IEC 27001 Information Security Associate", issuer: "ISO/IEC", url: null },
              { icon: "fas fa-binoculars", name: "Open-Source Intelligence (OSINT) Fundamentals", issuer: "OSINT Training", url: null },
              { icon: "fas fa-user-secret", name: "Metaxone Certified Ethical Hacker", issuer: "Metaxone", url: null },
            ].map((c) => (
              <div className="certification-card" key={c.name}>
                <div className="certification-logo"><i className={c.icon} /></div>
                <div className="certification-content">
                  <h3>{c.name}</h3>
                  <p>{c.issuer}</p>
                  {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="cert-verify-link">Verify <i className="fas fa-external-link-alt" /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ARTICLE / BLOG
      ══════════════════════════════ */}
      <section id="article" className="article">
        <div className="container">
          <div className="section-header">
            <h2>Articles</h2>
            <div className="underline" />
          </div>
          <div className="article-container">
            <div className="article-grid">
              {[
                { title: "The Computer Investigation Process: How to Investigate a Cyber Crime the Right Way 🧪", desc: "Part 3 of the CHFI Decoded Series — A practical walkthrough of how forensic investigators officially open, conduct, and close a case.", icon: "fas fa-search", img: article1Img, href: "https://medium.com/@prajwal.b.yadav10/the-computer-investigation-process-how-to-investigate-a-cyber-crime-the-right-way-fae31ef33671" },
                { title: "What Happens After a Cyberattack? Inside the World of Disk & Media Forensics!", desc: "Part 2 of the CHFI Decoded Series — A practical breakdown of how investigators extract evidence from storage devices.", icon: "fas fa-hdd", img: article2Img, href: "https://medium.com/@prajwal.b.yadav10/what-happens-after-a-cyberattack-inside-the-world-of-disk-media-forensics-70e690ad4533" },
                { title: "Project Glasswing: Where AI Meets Code Security", desc: "An exploration of how artificial intelligence is being leveraged to enhance code security — covering AI-driven vulnerability detection, automated code analysis, and the future of secure software development.", icon: "fas fa-robot", img: article3Img, href: "https://www.linkedin.com/pulse/project-glasswing-where-ai-meets-code-security-prajwal-yadav-nku6f/" },
              ].map((a) => (
                <div className="article-card" key={a.title}>
                  {a.img
                    ? <img src={a.img} alt={a.title} className="article-img" />
                    : <div className="article-img-placeholder"><i className={a.icon} /></div>
                  }
                  <div className="article-content">
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read More <i className="fas fa-external-link-alt" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="article-cta">
              <a href="https://medium.com/@prajwal.b.yadav10" target="_blank" rel="noopener noreferrer" className="btn primary-btn">View All Articles on Medium</a>
              <a href="https://www.linkedin.com/in/prajwal-yadav10/recent-activity/articles/" target="_blank" rel="noopener noreferrer" className="btn primary-btn">View All Articles on LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="underline" />
          </div>
          <div className="contact-container">
            <div className="contact-info-container">
              {[
                { icon: "fas fa-envelope", title: "Email", value: "prajwal.yadav03@gmail.com", href: "mailto:prajwal.yadav03@gmail.com" },
                { icon: "fas fa-phone", title: "Phone", value: "+91 9881124493" },
                { icon: "fab fa-linkedin", title: "LinkedIn", value: "linkedin.com/in/prajwal-yadav10", href: "https://www.linkedin.com/in/prajwal-yadav10/recent-activity/articles/" },
                { icon: "fab fa-medium", title: "Medium", value: "medium.com/@prajwal.b.yadav10", href: "https://medium.com/@prajwal.b.yadav10" },
              ].map((item) => (
                <div className="contact-info-item" key={item.title}>
                  <div className="icon"><i className={item.icon} /></div>
                  <div className="text">
                    <h3>{item.title}</h3>
                    {item.href
                      ? <p><a href={item.href} target="_blank">{item.value}</a></p>
                      : <p>{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-form-container">
              {formSubmitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle" />
                  <p>Thank you! Your message has been received. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn primary-btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <a href="#home"><span>&lt;</span> PY <span>/&gt;</span></a>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/prajwal-yadav10/recent-activity/articles/" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
              <a href="https://medium.com/@prajwal.b.yadav10" target="_blank" aria-label="Medium"><i className="fab fa-medium" /></a>
              <a href="mailto:prajwal.yadav03@gmail.com" aria-label="Email"><i className="fas fa-envelope" /></a>
            </div>
            <div className="footer-links">
              {["home","about","projects","contact"].map((id) => (
                <a href={`#${id}`} key={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
              ))}
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Prajwal Yadav. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
