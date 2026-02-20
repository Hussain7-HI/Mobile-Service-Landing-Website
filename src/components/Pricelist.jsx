const PriceList = () => {
  return (
    <section id="price" className="section fade-in" style={{marginTop:"180px"}}>
      <h2>Price List</h2>
      <table className="price-table"style={{height:"50vh"}}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Starting Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mobile Screen Repair</td>
            <td>₹1500</td>
          </tr>
          <tr>
            <td>Laptop OS Installation</td>
            <td>₹800</td>
          </tr>
          <tr>
            <td>Battery Replacement</td>
            <td>₹1200</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PriceList;

