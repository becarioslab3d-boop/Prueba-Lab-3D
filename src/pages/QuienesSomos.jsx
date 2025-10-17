// src/components/QuienesSomos.jsx
import React from "react";
import "../styles/QuienesSomos.css";

const timelineData = [
  { year: "2018 - Fundación", text: "Nace SIGPe como un proyecto universitario para explorar las aplicaciones de la impresión 3D en la medicina." },
  { year: "2020 - Primera Colaboración", text: "Colaboración exitosa con el hospital local para crear modelos anatómicos para planificación quirúrgica compleja." },
  { year: "2022 - Expansión Tecnológica", text: "Adquisición de impresoras 3D de última generación, ampliando nuestra capacidad para producir prótesis y dispositivos a medida." },
  { year: "2024 - Reconocimiento", text: "Recibimos un premio regional por nuestra innovación y contribución al sector de la salud." },
];

const teamData = [
  {
    name: "Dr. Alejandro Vargas",
    role: "Director del Laboratorio",
    description: "Experto en biomateriales y pionero en la implementación de tecnologías 3D en cirugía.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6sgiHzaJjcwACc_Lo5wr_H3KGcESlLJnG38P6r2FpPIidfqkDWP_ANPP7Me84nIDt4xcmSATvaRuv1gNbACHXskfxc5kdLZiv5AtbDX-PFdhjBdpNB7Q4T18DEOldNS3-Sqyyfk-WrWXOSWLF5cezhViV_ncpn1PnPyypIWi0JfYehNMwcYfpU2qOp_iAyQ1ZLfH_jlMnQGjOHIfMgEpkns2MgehFdyrCsbz-OuxVjz6qzF_ASLZa5GsCSV03LuzDoz5ZWuvmRJQ"
  },
  {
    name: "Ing. Sofía Reyes",
    role: "Jefa de Diseño y Producción",
    description: "Especialista en software CAD/CAM y optimización de procesos de impresión para aplicaciones médicas.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrEhoG9xo2YQbNjEfUy3qWQdb7te5WiXTfZqNloYKsS1XMEmIpcldKSWh1OUh4o2VP8FY0M1n6q2Io2fO9YttPCJ4NGde12nirv95z9I6AvhdThoKqtzGq8_22IuVh0JhO2CdtmcULFgh8I7flUiZLtNlYWHm9wGa4DWnWZSP0ObxnjBG_4tc4grLz6_7nGQkX2GH6ejOU5xOIr7onIx4iSTwaMfsUprefwhTSB0N0zqqfy28i2WRQA60qkLVjDYxD7bSC0M_dGu0"
  },
  {
    name: "Lic. Mateo Castillo",
    role: "Coordinador de Proyectos",
    description: "Responsable de la vinculación con instituciones médicas y la gestión de casos de éxito.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRpYeJYPKilrmYa4dtoSukTUY5tObKyv2uB3usvicwGtB878RtTp4Hmqyz8OHAb-E-SfS6uls_cfc90bHIOTDTnblXz5OyXUFxQm3H78mgQ7cZNj5EWYhNLNHBIEfXJlwHPC6WmmoFbTkajs5ytfWXUBSEE1G-Knx-b-6SyWN5I3UIlUtJZJyVm_g5im_BV73OjYm30UzeFE6IGGl_RNPLorOxYVAdiS3AH1H6IlTtp02VAQwe_Z-B9-TFCgDyiYSFVdqPc2J3HVY"
  }
];

const QuienesSomos = () => {
  return (
    <main className="main-container">
      
      {/* Hero Section */}
      <div className="hero-section"
        style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAd7QQNeFIWaY_Lg0-9PpL3ViPDiPHqnddq9UMzW5lHi2o12NMWHq5G4hLG-WOKy-mcJU2zMA51f7uqaRnfxHcRCTfVT67oUZFYLZKq_FOMualOFjdUn2Yr-jFHFunfm6aG4_Wvcb2rNFx7rb6SmCCQWfOdEXaMaVPUOBuq0qaxsOxYsnEnTdHn8O5M2DOaK348qS06UiZ6OnUKXxMuQuawk0FTvE0q0t1MnwSLhcEDwkiPHP9gwZPyZmy7WDQa1WjAvP2l8V64UvY")'}}>
        <h1>Innovación en impresión 3D para un futuro más saludable</h1>
        <p>Nuestra misión es proporcionar soluciones de impresión 3D de alta calidad para el sector médico, mejorando la vida de los pacientes y apoyando la investigación.</p>
        <button>Contáctanos</button>
      </div>

      {/* Misión, Visión y Valores */}
      <section>
        <h2>Misión, Visión y Valores</h2>
        <div className="mv-values">
          <div className="mv-card">
            <h3>Misión</h3>
            <p>Proporcionar soluciones de impresión 3D de alta calidad para el sector médico, mejorando la vida de los pacientes y apoyando la investigación.</p>
          </div>
          <div className="mv-card">
            <h3>Visión</h3>
            <p>Ser el laboratorio de referencia en impresión 3D médica en la región, reconocido por nuestra excelencia, innovación y compromiso con la salud.</p>
          </div>
          <div className="mv-card">
            <h3>Valores</h3>
            <p>Calidad, Precisión, Innovación, Colaboración, Ética.</p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section>
        <h2>Nuestra Historia</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <h4>{item.year}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section>
        <h2>Nuestro Equipo</h2>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default QuienesSomos;
