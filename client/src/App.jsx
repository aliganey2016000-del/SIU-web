import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, GraduationCap, Menu, Phone, Users, X } from "lucide-react";

const API = "http://localhost:5000/api";
const fallbackPrograms = [
  { name: "Computer Science", faculty: "Faculty of Computing & IT", level: "Bachelor", duration: "4 Years" },
  { name: "Business Administration", faculty: "Faculty of Business", level: "Bachelor", duration: "4 Years" },
  { name: "Public Health", faculty: "Faculty of Health Sciences", level: "Bachelor", duration: "4 Years" },
  { name: "Education", faculty: "Faculty of Education", level: "Bachelor", duration: "4 Years" }
];
const fallbackNews = [
  { title: "Admissions are now open for the new academic year", excerpt: "Start your application and join a community focused on academic excellence.", publishedAt: "2026-08-20" },
  { title: "SIU launches new digital learning initiatives", excerpt: "New technology-supported learning resources are being introduced across faculties.", publishedAt: "2026-08-12" },
  { title: "Student orientation programme announced", excerpt: "New students can prepare for the semester with our orientation programme.", publishedAt: "2026-08-05" }
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [programs, setPrograms] = useState(fallbackPrograms);
  const [news, setNews] = useState(fallbackNews);
  useEffect(() => {
    fetch(`${API}/programs`).then(r => r.ok ? r.json() : []).then(d => d.length && setPrograms(d)).catch(() => {});
    fetch(`${API}/news`).then(r => r.ok ? r.json() : []).then(d => d.length && setNews(d)).catch(() => {});
  }, []);
  const nav = ["Home", "About", "Faculties", "Programs", "Admissions", "News", "Contact"];
  return <div className="site">
    <div className="topbar"><div className="container topbar-inner"><span>Somali International University</span><span>Academic Excellence • Innovation • Service</span></div></div>
    <header className="header"><div className="container nav-inner">
      <a className="brand" href="#home"><div className="logo">SIU</div><div><strong>Somali International</strong><small>University</small></div></a>
      <button className="menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? "nav open" : "nav"}>{nav.map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>)}<a className="portal" href="#contact">Student Portal</a></nav>
    </div></header>
    <main>
      <section className="hero" id="home"><div className="container hero-content"><span className="eyebrow">WELCOME TO SIU</span><h1>Build your future.<br/><em>Lead with knowledge.</em></h1><p>Somali International University is committed to accessible, high-quality education that prepares students to create impact in Somalia and beyond.</p><div className="actions"><a className="btn" href="#admissions">Apply Now <ArrowRight/></a><a className="outline" href="#programs">Explore Programs</a></div></div></section>
      <section className="stats"><div className="container stats-grid"><Stat icon={<GraduationCap/>} n="4+" t="Faculties"/><Stat icon={<BookOpen/>} n="20+" t="Academic Programs"/><Stat icon={<Users/>} n="1,000+" t="Students"/><Stat icon={<ArrowRight/>} n="100%" t="Student Focused"/></div></section>
      <section className="section" id="about"><div className="container split"><div><span className="eyebrow gold">ABOUT SIU</span><h2>Education designed for the future of Somalia.</h2><p>We aim to develop graduates with strong academic foundations, practical skills, ethical leadership and a commitment to community development.</p><p>Our learning environment combines dedicated faculty, modern teaching methods and opportunities for students to turn knowledge into meaningful solutions.</p><a className="link" href="#contact">Learn more about SIU <ArrowRight/></a></div><div className="dark-card"><b>01</b><h3>Our Mission</h3><p>To provide quality higher education, foster innovation, and develop responsible graduates who contribute to sustainable national development.</p><hr/><b>02</b><h3>Our Vision</h3><p>To become a leading university in Somalia and the region, recognized for excellence, innovation and social impact.</p></div></div></section>
      <section className="section cream" id="programs"><div className="container"><div className="heading"><div><span className="eyebrow gold">ACADEMIC PROGRAMS</span><h2>Find the programme for you.</h2></div><a className="link" href="#programs">View all <ArrowRight/></a></div><div className="programs">{programs.slice(0,4).map((p,i)=><article className="card" key={p._id||p.name}><b>0{i+1}</b><span>{p.faculty}</span><h3>{p.name}</h3><p>{p.level} • {p.duration}</p><a href="#admissions">View programme <ArrowRight/></a></article>)}</div></div></section>
      <section className="admissions" id="admissions"><div className="container admission-inner"><div><span className="eyebrow">ADMISSIONS</span><h2>Ready to take the next step?</h2><p>Begin your journey at Somali International University. Explore requirements, programmes and application information.</p></div><a className="btn white" href="#contact">Start Your Application <ArrowRight/></a></div></section>
      <section className="section" id="news"><div className="container"><div className="heading"><div><span className="eyebrow gold">LATEST NEWS</span><h2>What's happening at SIU.</h2></div></div><div className="news">{news.map(n=><article className="news-card" key={n._id||n.title}><div className="news-img">SIU</div><div><small>{new Date(n.publishedAt).toLocaleDateString()}</small><h3>{n.title}</h3><p>{n.excerpt}</p><a href="#news">Read more <ArrowRight/></a></div></article>)}</div></div></section>
      <section className="contact" id="contact"><div className="container contact-inner"><div><span className="eyebrow gold">CONTACT SIU</span><h2>Have a question?</h2><p>Our admissions and student services teams are ready to help.</p></div><div className="contact-info"><div><Phone/> +252 61 XXX XXXX</div><div>✉ info@siu.edu.so</div><div>Mogadishu, Somalia</div></div></div></section>
    </main>
    <footer><div className="container footer-grid"><div><div className="brand"><div className="logo">SIU</div><div><strong>Somali International</strong><small>University</small></div></div><p>Quality education. Responsible leadership. Meaningful impact.</p></div><div><h4>Quick Links</h4><a href="#about">About</a><a href="#programs">Programs</a><a href="#admissions">Admissions</a><a href="#news">News</a></div><div><h4>Student Services</h4><a href="#contact">Student Portal</a><a href="#contact">Academic Support</a><a href="#contact">Library</a></div><div><h4>Visit Us</h4><p>Mogadishu, Somalia</p><p>Mon – Sat • 8:00 AM – 5:00 PM</p></div></div><div className="copyright">© 2026 Somali International University. All rights reserved.</div></footer>
  </div>;
}
function Stat({icon,n,t}){return <div className="stat"><div>{icon}</div><strong>{n}</strong><span>{t}</span></div>}
