import { useState } from "react";


const Booking = ({ bookings, setBookings }) => {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings([...bookings, { id: Date.now(), ...form }]);
    alert("Booking Confirmed 🚀");
    setForm({ name: "", service: "", date: "", time: "" });
  };

  return (
<div id="booking" className="split-container">

      
      <div className="left-panel">
        <h1>Techcare pro Mobile Service</h1>
        <p>Fast. Reliable. Professional repair service at your doorstep.</p>
      </div>

      <div className="right-panel">
        <form onSubmit={handleSubmit} className="booking-form">
          <h2>Book Appointment</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option value="Mobile Repair">Mobile Repair</option>
            <option value="Laptop Repair">Laptop Repair</option>
            <option value="Software Service">Software Service</option>
            <option value="Battery Repair">Battery Repair</option>
          </select>

          <div className="row">
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              required
              value={form.time}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Confirm Booking</button>
          
        </form>
      </div>

    </div>
  );
};

export default Booking;
