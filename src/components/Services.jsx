const Services = () => {
  return (
    <section id="services" className="section slide-up"style={{height:"550px"}}>
      <h2>Our Services</h2>
      <div className="cards">
        <div className="card">Mobile Screen Replacement</div>
        <div className="card">Laptop Motherboard Repair</div>
        <div className="card">Battery Replacement</div>
        <div className="card">Software Installation</div>
      </div>

      {/* Animated Service Images */}
<div className="service-animations">

  <div className="service-img mobile-anim">
    <img src="https://cdn-icons-png.flaticon.com/512/15/15874.png" alt="Mobile" />
    <p>Mobile Repair</p>
  </div>

  <div className="service-img laptop-anim">
    <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Laptop" />
    <p>Laptop Service</p>
  </div>

  <div className="service-img battery-anim">
    <img src="https://cdn-icons-png.flaticon.com/512/3103/3103446.png" alt="Battery" />
    <p>Battery Replace</p>
  </div>

  <div className="service-img software-anim">
    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721293.png" alt="Software" />
    <p>Software Install</p>
  </div>

</div>


    </section>
  );
};

export default Services;

