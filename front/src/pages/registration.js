import { useState, useEffect } from "react";
import { readRegistration } from "../api/readRegistration";

export function Registration() {
  const [loading, setLoading] = useState(false);
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");

  const fetchRegistrations = async () => {
    setLoading(true);

    const resp = await readRegistration({});

    if (resp.success) {
      setLoading(false);
      setRegistrations(resp.registers);
    } else {
      setLoading(false);
      setError(resp.message);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <section className="section-registers">
      {loading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <>
          <h2>Liste des participants</h2>

          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénoms</th>
                <th>Numéro de téléphone</th>
                <th>Adresse email</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.firstName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.emailAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {error && (
            <div className="form-column">
              <span className="response">{error}</span>
            </div>
          )}
        </>
      )}
    </section>
  );
}
