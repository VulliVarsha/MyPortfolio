export default function HeroSection() {
  const handleGetInTouchClick = () => {
    const section = document.getElementById("Contact");
    if(section) {
      section.scrollIntoView({behaviour: "smooth"});
    }
  }
  const handleDownloadCVClick = () => {
    const link = document.createElement("a");
    link.href = "/Varsha_Vulli_Resume.pdf";
    link.target = "_blank";
    link.download = "Varsha_Vulli_Resume.pdf"
    link.click();
  }
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Varsha Vulli</span>{" "}
          </h1>
          <p className="hero--section-description">
            "Versaltile Mind with Expertise in Tech Exploration, Web Development,
            and the Realm of AI, Data, Machine Learning, 
            Driving Research and Innovation"
          </p>
        </div>
        <div className="hero--section--buttons"> 
          <button onClick={handleGetInTouchClick} className="btn btn-primary">Get In Touch</button>
          <button onClick={handleDownloadCVClick} className="btn btn-primary newbtn">Download CV</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
