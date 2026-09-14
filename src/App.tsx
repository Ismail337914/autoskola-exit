import { school } from './data/school';

const navItems = [
  { label: 'Početna', href: '#top' },
  { label: 'O nama', href: '#about' },
  { label: 'Obuka', href: '#training' },
  { label: 'Proces', href: '#process' },
  { label: 'Vozila', href: '#vehicles' },
  { label: 'Galerija', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' }
];

const steps = [
  ['01', 'Informiši se', 'Pozovi nas i saznaj aktuelne informacije o početku obuke.'],
  ['02', 'Upis', 'Dogovori naredne korake za upis u autoškolu.'],
  ['03', 'Obuka', 'Kroz teorijsku i praktičnu nastavu gradiš sigurnost za volanom.'],
  ['04', 'Samostalna vožnja', 'Znanje i navike koje stekneš ostaju s tobom i nakon ispita.']
];

const benefits = [
  ['Jasan početak', 'Od prvog poziva znaš koji su naredni koraci.'],
  ['Sigurnost na prvom mjestu', 'Obuka se temelji na razumijevanju saobraćaja i odgovornoj vožnji.'],
  ['Podrška kroz proces', 'Pitanja i nedoumice rješavaš uz podršku tokom obuke.'],
  ['Praktična lokacija', 'Pronađi nas u WOG Centru na adresi Jošanička 55, Vogošća.']
];

const trainingPoints = ['razumijevanje saobraćaja', 'kontrola vozila', 'opažanje i procjena situacije', 'donošenje odluka', 'sigurno ponašanje', 'samopouzdanje u vožnji'];

const faqs = [
  ['Gdje se nalazi Autoškola TEMPO?', `U WOG Centru, na adresi ${school.address}.`],
  ['Kako mogu kontaktirati autoškolu?', `Telefonom na ${school.phone}.`],
  ['Kako mogu započeti obuku?', 'Pozovi nas kako bi dobio aktuelne informacije o upisu i narednim koracima.'],
  ['Da li je moguće plaćanje na rate?', 'Javne informacije navode mogućnost plaćanja na rate. Za aktuelne uslove pozovi autoškolu.']
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: school.name,
  telephone: school.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jošanička 55',
    addressLocality: 'Vogošća',
    addressRegion: 'Sarajevo',
    addressCountry: 'BA'
  },
  hasMap: school.googleMapsUrl
};

function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div id="top" className="page-shell">
        <header className="site-header">
          <div className="container header-inner">
            <a href="#top" className="brand" aria-label={school.name}>
              <span className="brand-mark">START</span><span className="brand-submark">AUTO ŠKOLA</span>
            </a>
            <nav className="main-nav" aria-label="Glavna navigacija">
              {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
            </nav>
            <a href="#contact" className="button button-primary small-button">UPIŠI SE</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">AUTOŠKOLA · VOGOŠĆA · SARAJEVO</p>
                <h1>Pravi tempo do vozačke dozvole.</h1>
                <p className="lead">Korak po korak do sigurnije vožnje.</p>
                <div className="cta-row">
                  <a href="#contact" className="button button-primary">UPIŠI SE</a>
                  <a href={school.phoneHref} className="button button-secondary">POZOVI NAS</a>
                </div>
                <p className="location-line">{school.address}</p>
              </div>
              <div className="hero-visual" aria-label="Placeholder za fotografiju vozila Auto Škole Start">
                <div className="visual-placeholder hero-placeholder"><span>START</span><small>Fotografija vozila uskoro</small></div>
              </div>
            </div>
          </section>

          <section className="trust-bar" aria-label="Osnovne informacije">
            <div className="container trust-grid">
              <div><strong>TEMPO</strong><span>uči svojim ritmom</span></div>
              <div><strong>Vogošća</strong><span>Sarajevo</span></div>
              <div><strong>062 301 304</strong><span>pozovi nas</span></div>
            </div>
          </section>

          <section id="about" className="section">
            <div className="container about-grid">
              <div className="visual-placeholder about-placeholder"><span>START</span><small>Fotografija prostora uskoro</small></div>
              <div className="section-copy">
                <p className="section-kicker">O nama</p>
                <h2>U svom tempu do sigurnije vožnje.</h2>
                <p>Autoškola TEMPO Sarajevo mjesto je za početak tvog puta prema sigurnoj i samostalnoj vožnji.</p>
                <p>Ne moraš znati sve na početku. Važno je da napraviš prvi korak i gradiš znanje i sigurnost kroz obuku.</p>
              </div>
            </div>
          </section>

          <section id="process" className="section process-section"><div className="container"><div className="section-heading center"><p className="section-kicker">Proces</p><h2>Ritam koji prati tvoj napredak.</h2></div><div className="steps-grid">{steps.map(([number, title, text]) => <article key={number} className="step-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

          <section className="section section-alt">
            <div className="container">
              <div className="section-heading center"><p className="section-kicker">Zašto Start</p><h2>Početak koji daje sigurnost.</h2></div>
              <div className="card-grid benefits-grid">
                {benefits.map(([title, text], index) => <article key={title} className="info-card"><span className="card-badge">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section id="training" className="section">
            <div className="container training-layout">
              <div className="training-copy"><p className="section-kicker">Obuka</p><h2>Učiš za stvarni život u saobraćaju.</h2><p>Obuka je prostor da razumiješ saobraćaj, upoznaš vozilo i postepeno izgradiš sigurnost za volanom.</p><ul className="check-list">{trainingPoints.map((item) => <li key={item}>{item}</li>)}</ul><a href="#contact" className="button button-primary">SAZNAJ VIŠE</a></div>
              <div className="visual-placeholder training-placeholder"><span>OBUKA</span><small>Fotografija obuke uskoro</small></div>
            </div>
          </section>

          <section id="vehicles" className="section section-alt">
            <div className="container"><div className="section-heading"><p className="section-kicker">Vozila</p><h2>Upoznaj vozilo korak po korak.</h2></div><div className="vehicle-showcase"><article className="vehicle-feature"><div className="visual-placeholder vehicle-placeholder"><span>VOZILA</span><small>Fotografija vozila uskoro</small></div><div className="vehicle-feature-copy"><h3>Vozila za obuku</h3><p>Detalji o vozilima bit će dodani kada budu potvrđene fotografije i informacije.</p></div></article><article className="vehicle-feature secondary"><div className="visual-placeholder vehicle-placeholder"><span>START</span><small>Placeholder galerija</small></div><div className="vehicle-feature-copy"><h3>Praktična vožnja</h3><p>Fokus ostaje na sigurnom i odgovornom ponašanju u stvarnim situacijama.</p></div></article></div></div>
          </section>

          <section id="gallery" className="section"><div className="container"><div className="section-heading center"><p className="section-kicker">Galerija</p><h2>Mjesto za stvarne Start fotografije.</h2></div><div className="gallery-grid">{['Vozilo', 'Obuka', 'Lokacija', 'Detalj'].map((label) => <div key={label} className="gallery-tile"><span>{label}</span><small>Fotografija uskoro</small></div>)}</div></div></section>

          <section id="contact" className="section location-section section-alt"><div className="container location-grid"><div className="location-copy"><p className="section-kicker">Kontakt</p><h2>Spreman za prvi korak?</h2><p className="brand-line">{school.name}</p><p>{school.address}</p><div className="contact-phone-block"><a href={school.phoneHref}>{school.phone}</a></div><p className="contact-email"><a href={`mailto:${school.email}`}>{school.email}</a></p><div className="cta-row location-actions"><a href={school.phoneHref} className="button button-primary">POZOVI NAS</a><a href={school.googleMapsUrl} className="button button-secondary" target="_blank" rel="noreferrer">OTVORI LOKACIJU</a></div></div><div className="map-card"><span>LOKACIJA</span><strong>Jošanička 55<br />Vogošća, Sarajevo</strong><a href={school.googleMapsUrl} target="_blank" rel="noreferrer">Otvori Google Maps →</a></div></div></section>

          <section id="faq" className="section"><div className="container"><div className="section-heading center"><p className="section-kicker">FAQ</p><h2>Najčešća pitanja.</h2></div><div className="faq-list">{faqs.map(([q, a], index) => <details key={q} className="faq-item" open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

          <section className="final-cta"><div className="container final-cta-inner"><div><p className="section-kicker light">ZA POČETAK</p><h2>Započni svoj put za volanom.</h2><p>Prvi korak može biti jedan poziv.</p></div><div className="cta-row justify-end"><a href="#contact" className="button button-light">UPIŠI SE</a><a href={school.phoneHref} className="button button-dark">POZOVI NAS</a></div></div></section>
        </main>

        <footer className="site-footer"><div className="container footer-grid"><div><p className="footer-brand">{school.name}</p><p>{school.address}</p></div><div><ul className="footer-list simple">{navItems.map((item) => <li key={item.label}><a href={item.href}>{item.label}</a></li>)}</ul></div><div><ul className="footer-list"><li><a href={school.phoneHref}>{school.phone}</a></li><li><a href={school.googleMapsUrl} target="_blank" rel="noreferrer">Google Maps</a></li></ul></div></div></footer>
      </div>
      <a href={school.phoneHref} className="mobile-cta">POZOVI 062 301 304</a>
    </>
  );
}

export default App;