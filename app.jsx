export default function CleaningApp() {
  const clients = [
    { name: "Anna Müller", service: "Wohnung Reinigung", date: "27 Mai 2026" },
    { name: "Peter Klein", service: "Büro Reinigung", date: "28 Mai 2026" },
  ];

  const employees = ["Maria", "Jean", "Aina"];

  const invoices = [
    { client: "Anna Müller", amount: "120€" },
    { client: "Peter Klein", amount: "250€" },
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>MADA 261 REINIGUNG</h1>

      <h2>Booking Clients</h2>
      {clients.map((c, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <b>{c.name}</b>
          <p>{c.service}</p>
          <small>{c.date}</small>
        </div>
      ))}

      <h2>Planning Cleaning</h2>
      <ul>
        <li>08:00 - Wohnung Reinigung</li>
        <li>11:00 - Büro Reinigung</li>
        <li>15:00 - Fenster Reinigung</li>
      </ul>

      <h2>Mpiasa</h2>
      <ul>
        {employees.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>

      <h2>Factures</h2>
      {invoices.map((inv, i) => (
        <div key={i}>
          {inv.client} - <b>{inv.amount}</b>
        </div>
      ))}

      <button style={{ marginTop: 20, padding: 10 }}>
        Nouveau Booking
      </button>
    </div>
  );
}
}