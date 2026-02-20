const Contact = () => {
  return (
    <section id="contact" className="section">
     

      <form className="contact-form">
          <label for="fname">Name</label><br/>
        <div style={{display:"grid",Gap:"50px", width:"200%"}}>
          
        <input type="text" placeholder="Your Name" required />
        <label for="fname">Email</label><br/>
         
        <input type="email" placeholder="Your Email" required /></div>
        <button type="submit">Send Message</button>
  
       
      </form>

       <div style={{display:"grid",justifyContent:"center",alignItems:"center"}}>
      <h2>Contact Us</h2>
      <p>📍 Location: mannady chennai-600001</p>
      <p>📞 Phone: +91 9876543210</p>
      <p>📧 Email: techcare@gmail.com</p></div>
    </section>
  );
};

export default Contact;

