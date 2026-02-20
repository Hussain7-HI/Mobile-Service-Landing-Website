const Home = () => {
  return (
    <section id="home" className="section home fade-in">
      <div style={{marginTop:"50px"}}>
      <h1>TechCare Pro Mobile & Laptop Service</h1>
      <h2>Fast | Trusted | Affordable Repairs📱💻</h2>
      <a href="#booking"><button>Book Now</button></a></div>
      {/* Premium Mobile Design */}
<div className="premium-mobile">
  <div className="mobile-frame">
    <div className="mobile-screen">
      <div className="screen-content">
        <h2>Techcare pro </h2>
        <p>Repair Booking App</p>
        <div className="app-card">
          <span>📱 Screen Repair</span>
        </div>
        <div className="app-card">
          <span>💻 Laptop Service</span>
        </div>
        <button className="mini-btn">Book Service</button>

      </div>
    </div>
  </div>
</div>






    </section>
  );
};

export default Home;

