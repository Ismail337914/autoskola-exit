import { school } from './data/school';
import { seo } from './data/seo';

const navItems = [
  { label: 'Početna', href: '#top' },
  { label: 'O nama', href: '#about' },
  { label: 'Obuka', href: '#training' },
  { label: 'Vozila', href: '#vehicles' },
  { label: 'Galerija', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' }
];

const steps = [
  {
    number: '01',
    title: 'Informiši se',
    text: 'Kontaktiraj Drive & Travel i saznaj šta je potrebno za početak.'
  },
  {
    number: '02',
    title: 'Upis',
    text: 'Završi potrebne korake za upis.'
  },
  {
    number: '03',
    title: 'Obuka',
    text: 'Kroz teorijsku i praktičnu nastavu pripremaš se za vožnju i ispit.'
  },
  {
    number: '04',
    title: 'Vozački ispit',
    text: 'Nakon obuke slijedi proces polaganja ispita prema važećim pravilima.'
  }
];

const benefits = [
  {
    title: 'Jasan proces',
    text: 'Upoznaj korake od prvog kontakta do pripreme za vozački ispit i jasne sljedeće aktivnosti.'
  },
  {
    title: 'Praktično učenje',
    text: 'Fokus je na stvarnoj vožnji, donošenju odluka i sigurnom upravljanju vozilom u prometu.'
  },
  {
    title: 'Podrška kroz obuku',
    text: 'Kandidati dobivaju podršku kroz svaki korak, uz jasne instrukcije i odgovore na pitanja.'
  },
  {
    title: 'Lokacija u Novom Sarajevu',
    text: 'Drive & Travel se nalazi na Malti, u srcu Novog Sarajeva, što olakšava dolazak i organizaciju obuke.'
  }
];

const trainingPoints = [
  'razumijevanje saobraćaja',
  'kontrola vozila',
  'opažanje i procjena situacije',
  'donošenje odluka',
  'sigurno ponašanje',
  'samopouzdanje u vožnji'
];

const faqs = [
  {
    q: 'Gdje se nalazi Drive & Travel autoškola?',
    a: 'Drive & Travel se nalazi na adresi Malta bb, T.C. Dolac Malta, u Novom Sarajevu.'
  },
  {
    q: 'Kako mogu kontaktirati Drive & Travel?',
    a: 'Možete nas kontaktirati telefonom na 061 374 730 ili 062 125 094.'
  },
  {
    q: 'Kako mogu započeti obuku?',
    a: 'Kontaktirajte Drive & Travel kako biste dobili aktuelne informacije o upisu i narednim koracima.'
  },
  {
    q: 'Kako mogu pronaći lokaciju?',
    a: 'Lokaciju možete otvoriti putem Google Mapsa.'
  }
];

const ratingText = `${school.rating.toFixed(1)} / 5`;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: school.name,
  legalName: school.legalName,
  telephone: school.phone.replace(/\s+/g, ''),
  email: school.email,
  url: '/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${school.address.street}, ${school.address.building}`,
    addressLocality: school.address.city,
    addressRegion: school.address.municipality,
    addressCountry: school.address.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.8512,
    longitude: 18.3793
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: school.rating,
    reviewCount: school.reviewCount
  },
  hasMap: school.googleMapsUrl,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: school.phone.replace(/\s+/g, ''),
    contactType: 'customer support',
    email: school.email,
    areaServed: 'Sarajevo'
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a
    }
  }))
};

function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div id="top" className="page-shell">
        <header className="site-header">
          <div className="container header-inner">
            <a href="#top" className="brand" aria-label="Drive & Travel autoškola">
              <span className="brand-mark">DRIVE</span>
              <span className="brand-mark accent">&amp; TRAVEL</span>
            </a>

            <nav className="main-nav" aria-label="Glavna navigacija">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}> {item.label} </a>
              ))}
            </nav>

            <div className="header-actions">
              <a href="#contact" className="button button-primary small-button">
                UPIŠI SE
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">DRIVE &amp; TRAVEL · AUTOŠKOLA · SARAJEVO</p>
                <h1>Prvi kilometri. Prava priprema.</h1>
                <p className="lead">
                  Uči voziti sa sigurnošću, razumijevanjem saobraćaja i podrškom kroz cijeli put do vozačkog ispita.
                </p>
                <div className="cta-row">
                  <a href="#contact" className="button button-primary">
                    UPIŠI SE
                  </a>
                  <a href={school.phoneHref} className="button button-secondary">
                    POZOVI NAS
                  </a>
                </div>
                <p className="location-line">Malta · Novo Sarajevo · Sarajevo</p>
              </div>

              <div className="hero-visual" aria-label="Vozilo Drive & Travel">
                <div className="vehicle-card">
                  <div className="vehicle-glow" />
                  <div className="vehicle-image" />
                </div>
              </div>
            </div>
          </section>

          <section className="trust-bar" aria-label="Google ocjena i recenzije">
            <div className="container trust-grid">
              <div>
                <strong>{school.rating.toFixed(1)}</strong>
                <span>Google ocjena</span>
              </div>
              <div>
                <strong>{school.reviewCount}</strong>
                <span>Google recenzije</span>
              </div>
              <div>
                <strong>Sarajevo</strong>
                <span>Novo Sarajevo</span>
              </div>
            </div>
          </section>

          <section id="about" className="section about-section">
            <div className="container about-grid">
              <div className="about-image-wrap">
                <div className="about-image" aria-label="Drive & Travel autoškola u Sarajevu" />
              </div>
              <div className="section-copy">
                <p className="section-kicker">O nama</p>
                <h2>Više od pripreme za ispit.</h2>
                <p>
                  Drive & Travel autoškola u Sarajevu pomaže kandidatima da nauče kako pravilno i sigurno voziti.
                  Fokus je na razumijevanju saobraćaja, upravljanju vozilom i razvoju samopouzdanja koje je potrebno za
                  svakodnevnu vožnju.
                </p>
                <p>
                  Svaki kandidat dobija podršku kroz praktičnu obuku i uputstva koja pomažu da se lakše snalazi u prometu,
                  a ne samo da položi ispit.
                </p>
              </div>
            </div>
          </section>

          <section className="section section-alt">
            <div className="container">
              <div className="section-heading center">
                <p className="section-kicker">Zašto Drive & Travel</p>
                <h2>Praktična obuka koja vodi ka sigurnijoj vožnji.</h2>
              </div>

              <div className="card-grid benefits-grid">
                {benefits.map((benefit, index) => (
                  <article key={benefit.title} className="info-card fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                    <span className="card-badge">0{index + 1}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-heading">
                <p className="section-kicker">Proces</p>
                <h2>Kako počinje vaša obuka.</h2>
              </div>

              <div className="timeline">
                {steps.map((step) => (
                  <div key={step.number} className="timeline-item">
                    <div className="timeline-number">{step.number}</div>
                    <div className="timeline-body">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="training" className="section section-alt">
            <div className="container training-layout">
              <div className="training-copy">
                <p className="section-kicker">Obuka</p>
                <h2>Učiš voziti, ne samo položiti.</h2>
                <p>
                  Prava vožnja zahtijeva više od samog prolaska ispita. Važno je razumjeti promet, usmjeriti pažnju,
                  pravilno reagovati i razviti sigurnost u svakodnevnoj vožnji.
                </p>
                <ul className="check-list">
                  {trainingPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" className="button button-primary">
                  SAZNAJ VIŠE
                </a>
              </div>

              <div className="training-visual" aria-label="Praktična obuka za vozački ispit">
                <div className="training-photo" />
              </div>
            </div>
          </section>

          <section id="vehicles" className="section">
            <div className="container">
              <div className="section-heading">
                <p className="section-kicker">Vozila</p>
                <h2>Vozila koja ćeš upoznati.</h2>
              </div>

              <div className="vehicle-showcase">
                <article className="vehicle-feature">
                  <div className="vehicle-feature-media media-one" aria-label="Vozilo Drive & Travel"></div>
                  <div className="vehicle-feature-copy">
                    <h3>Vozilo Drive & Travel</h3>
                    <p>Vozila koja se koriste u obuci trebaju podržavati sigurnu i kvalitetnu praksu u realnom prometu.</p>
                  </div>
                </article>

                <article className="vehicle-feature secondary">
                  <div className="vehicle-feature-media media-two" aria-label="Praktična vožnja"></div>
                  <div className="vehicle-feature-copy">
                    <h3>Praktična vožnja</h3>
                    <p>Obuka je usmjerena na realne situacije, kontrolu vozila i odgovorno ponašanje u prometu.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="gallery" className="section section-alt">
            <div className="container">
              <div className="section-heading center">
                <p className="section-kicker">Galerija</p>
                <h2>Autentični uvid u rad i okruženje.</h2>
              </div>

              <div className="gallery-grid" aria-label="Galerija fotografija autoškole">
                <div className="gallery-tile gallery-tall tile-a" aria-label="Vozila Drive & Travel"></div>
                <div className="gallery-tile tile-b" aria-label="Priprema za obuku"></div>
                <div className="gallery-tile tile-c" aria-label="Lokacija u Novom Sarajevu"></div>
                <div className="gallery-tile gallery-wide tile-d" aria-label="Učenje vožnje"></div>
              </div>
            </div>
          </section>

          <section className="section reviews-section">
            <div className="container">
              <div className="section-heading center">
                <p className="section-kicker">Iskustva polaznika</p>
                <h2>{ratingText}</h2>
                <p className="review-meta">Google recenzije · {school.reviewCount}</p>
              </div>

              <div className="review-cta-wrap">
                <a href={school.googleBusinessUrl || school.googleMapsUrl} className="button button-primary" target="_blank" rel="noreferrer">
                  Pročitaj Google recenzije
                </a>
              </div>
            </div>
          </section>

          <section id="contact" className="section location-section">
            <div className="container location-grid">
              <div className="location-copy">
                <p className="section-kicker">Kontakt</p>
                <h2>Pronađi nas na Malti.</h2>
                <p className="brand-line">Drive &amp; Travel autoškola</p>
                <ul className="contact-list">
                  <li>Malta bb</li>
                  <li>T.C. Dolac Malta</li>
                  <li>Novo Sarajevo</li>
                  <li>Sarajevo</li>
                  <li>Bosnia and Herzegovina</li>
                </ul>

                <div className="contact-phone-block">
                  <a href={school.phoneHref}>{school.phone.replace('+387 ', '061 ')}</a>
                  <a href={school.secondaryPhoneHref}>{school.secondaryPhone.replace('+387 ', '062 ')}</a>
                </div>

                <a href={`mailto:${school.email}`} className="email-link">{school.email}</a>

                <div className="cta-row location-actions">
                  <a href={school.googleMapsUrl} className="button button-primary" target="_blank" rel="noreferrer">
                    OTVORI GOOGLE MAPS
                  </a>
                </div>
              </div>

              <div className="location-map" aria-label="Karta lokacije Drive & Travel autoškole">
                <div className="map-card">
                  <span>Malta · Dolac Malta</span>
                  <strong>Drive &amp; Travel autoškola</strong>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="section faq-section">
            <div className="container">
              <div className="section-heading center">
                <p className="section-kicker">FAQ</p>
                <h2>Najčešća pitanja.</h2>
              </div>

              <div className="faq-list">
                {faqs.map((faq) => (
                  <details key={faq.q} className="faq-item" open={faq.q === 'Gdje se nalazi Drive & Travel autoškola?'}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="final-cta">
            <div className="container final-cta-inner">
              <div>
                <p className="section-kicker light">Za početak</p>
                <h2>Vrijeme je za prvi kilometar.</h2>
                <p>Javi nam se i saznaj koji je tvoj sljedeći korak.</p>
              </div>
              <div className="cta-row justify-end">
                <a href="#contact" className="button button-primary button-light">UPIŠI SE</a>
                <a href={school.phoneHref} className="button button-secondary button-light">POZOVI NAS</a>
              </div>
              <p className="emotional-line">Pazi kako voziš, neko te čeka i voli.</p>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <p className="footer-brand">Drive &amp; Travel autoškola</p>
              <ul className="footer-list">
                <li>Malta bb</li>
                <li>T.C. Dolac Malta</li>
                <li>Novo Sarajevo</li>
                <li>Sarajevo</li>
              </ul>
            </div>

            <div>
              <ul className="footer-list simple">
                <li><a href="#top">Početna</a></li>
                <li><a href="#about">O nama</a></li>
                <li><a href="#training">Obuka</a></li>
                <li><a href="#vehicles">Vozila</a></li>
                <li><a href="#gallery">Galerija</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <ul className="footer-list contact-list-footer">
                <li><a href={school.phoneHref}>{school.phone}</a></li>
                <li><a href={school.secondaryPhoneHref}>{school.secondaryPhone}</a></li>
                <li><a href={`mailto:${school.email}`}>{school.email}</a></li>
                <li><a href={school.googleMapsUrl} target="_blank" rel="noreferrer">Google Maps</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      <a href={school.phoneHref} className="mobile-cta">POZOVI DRIVE &amp; TRAVEL</a>
    </>
  );
}

export default App;
