import { useState } from 'react';
import { exit } from './data/exit';

const steps = [
  ['01', 'UPIS', 'Prvi korak prema vlastitom putu.'],
  ['02', 'TEORIJA', 'Razumijevanje saobraćaja i pravila.'],
  ['03', 'PRAKTIČNA OBUKA', 'Znanje pretvaraš u kontrolu za volanom.'],
  ['04', 'ISPIT', 'Provjera spremnosti za sljedeći kilometar.']
];
const benefits = ['Fokus na sigurnu vožnju', 'Jasno objašnjena teorija', 'Praktično iskustvo', 'Postepen razvoj samopouzdanja'];

function ExitMark() {
  return <span className="exit-mark"><span>EXIT</span><small>AUTO ŠKOLA</small></span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div id="top" className="page-shell">
    <header className="site-header">
      <div className="container header-inner"><a href="#top" aria-label={exit.name} onClick={() => setMenuOpen(false)}><ExitMark /></a>
        <nav className="main-nav" aria-label="Glavna navigacija">{exit.nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a href="#contact" className="button button-primary header-cta">UPIŠI SE <span>↗</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobilna navigacija">{exit.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<span>↗</span></a>)}<a href={exit.phoneHref} className="button button-primary">POZOVI {exit.phone}</a></nav>}
    </header>

    <main>
      <section className="hero"><div className="hero-grid container"><div className="hero-copy"><p className="eyebrow"><span className="red-dot" /> AUTO ŠKOLA / SARAJEVO</p><h1>POKRENI<br /><em>SVOJ PUT.</em></h1><p className="lead">Profesionalna obuka za siguran i samouvjeren korak za volan.</p><div className="cta-row"><a href="#contact" className="button button-primary">UPIŠI SE <span>↗</span></a><a href={exit.phoneHref} className="button button-outline">POZOVI NAS</a></div><div className="hero-phone"><span>TELEFON</span><a href={exit.phoneHref}>{exit.phone}</a></div></div><div className="hero-visual" aria-label="Apstraktni EXIT automotive vizual"><div className="speed-lines" /><div className="car-outline"><span>EXIT</span><i /></div><div className="hero-stamp">{exit.slogan}<b>///</b></div><div className="hero-index">01 <span>—</span> 06</div></div></div><div className="hero-bottom container"><span>DRIVE WITH CONFIDENCE</span><span className="scroll-note">SCROLL TO EXPLORE <b>↓</b></span></div></section>
      <section id="about" className="section intro-section"><div className="container intro-grid"><div className="section-number">01 <span>O EXITU</span></div><div><p className="section-kicker">01 / FILOZOFIJA</p><h2>VOŽNJA NIJE SAMO ISPIT.<br /><em>TO JE VJEŠTINA.</em></h2><p className="body-copy">Kvalitetna obuka je temelj sigurnog i samouvjerenog kretanja kroz stvarni saobraćaj. EXIT je prostor za učenje, vježbu i prvi važan korak prema samostalnoj vožnji.</p></div></div></section>
      <section id="categories" className="section category-section"><div className="container"><div className="heading-row"><div><p className="section-kicker">02 / IZBOR</p><h2>KATEGORIJE</h2></div><p className="section-note">Pronađi kategoriju<br />koja odgovara tvom putu.</p></div><div className="category-grid">{exit.categories.map((category) => <article className="category-card" key={category.number}><span className="category-number">{category.number}</span><strong>{category.label}</strong><p>{category.detail}</p><span className="card-arrow">↗</span></article>)}</div></div></section>
      <section id="training" className="section process-section"><div className="container"><div className="heading-row"><div><p className="section-kicker">03 / PROCES</p><h2>OBUKA,<br /><em>KORAK PO KORAK.</em></h2></div><p className="section-note">Koncept procesa za<br />tvoj sigurniji početak.</p></div><div className="process-grid">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
      <section className="section benefits-section"><div className="container benefits-layout"><div><p className="section-kicker">04 / PRISTUP</p><h2>FOKUS NA<br /><em>ONO ŠTO JE BITNO.</em></h2></div><div className="benefits-list">{benefits.map((benefit, index) => <div key={benefit}><span>0{index + 1}</span><strong>{benefit}</strong><i>↗</i></div>)}</div></div></section>
      <section id="vehicles" className="section vehicle-section"><div className="container vehicle-layout"><div className="vehicle-visual"><span>VEHICLE<br /><b>PLACEHOLDER</b></span><div className="vehicle-wheel" /></div><div><p className="section-kicker">05 / VOZILA</p><h2>SPREMNI ZA<br /><em>STVARNI PUT.</em></h2><p className="body-copy">Fotografije i detalji o vozilima bit će dodani nakon potvrde stvarnih EXIT vozila.</p><div className="placeholder-label">FOTOGRAFIJA VOZILA <span>— PODATAK ZA DOPUNU</span></div></div></div></section>
      <section className="section gallery-section"><div className="container"><div className="heading-row"><div><p className="section-kicker">06 / GALERIJA</p><h2>EXIT U POKRETU.</h2></div><p className="section-note">Mjesto za stvarne<br />fotografije brenda.</p></div><div className="gallery-grid"><div className="gallery-feature"><span>GALERIJA</span><small>Fotografija uskoro</small></div><div className="gallery-tile"><span>DETALJ 02</span><small>Fotografija uskoro</small></div><div className="gallery-tile"><span>DETALJ 03</span><small>Fotografija uskoro</small></div></div></div></section>
      <section id="contact" className="section contact-section"><div className="container contact-grid"><div><p className="section-kicker">KONTAKT / START</p><h2>SPREMAN ZA SVOJ<br /><em>PRVI KILOMETAR?</em></h2><p className="body-copy">Javi nam se i napravi prvi korak. Informacije o lokaciji i ostalim detaljima potrebno je potvrditi sa autoškolom.</p><a href={exit.phoneHref} className="contact-phone">{exit.phone} <span>↗</span></a></div><div className="contact-panel"><span className="panel-label">LOKACIJA</span><strong>{exit.address}</strong><span className="panel-label">MAPA</span><a href={exit.mapsHref} className="map-placeholder">{exit.mapsLabel}<span>↗</span></a></div></div></section>
      <section id="faq" className="section faq-section"><div className="container faq-layout"><div><p className="section-kicker">FAQ / INFO</p><h2>ČESTA<br /><em>PITANJA.</em></h2></div><div className="faq-list">{exit.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
      <section className="final-cta"><div className="container"><p className="section-kicker">START HERE</p><h2>POKRENI<br /><em>SVOJ PUT.</em></h2><a href={exit.phoneHref} className="button button-light">POZOVI {exit.phone} <span>↗</span></a></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-top"><a href="#top"><ExitMark /></a><span>{exit.slogan}</span><a href={exit.phoneHref}>{exit.phone}</a></div><div className="container footer-bottom"><span>© 2026 {exit.name}</span><nav>{exit.nav.slice(0, 4).map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><span>DRIVE WITH CONFIDENCE</span></div></footer>
    <a href={exit.phoneHref} className="mobile-cta">POZOVI <span>{exit.phone}</span> <b>↗</b></a>
  </div>;
}
export default App;
