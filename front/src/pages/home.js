import { useState, useEffect } from "react";
import { readRegistration } from "../api/readRegistration";
import { createRegistration } from "../api/createRegistration";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const fetchRegistrations = async () => {
    setLoading(true);

    const resp = await readRegistration();

    if (resp.success) {
      setLoading(false);
    } else {
      setLoading(false);
      setError(resp.message);
    }
  };

  const submitRegistration = async () => {
    setLoading(true);

    const resp = await createRegistration({
      firstName: firstName,
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    });

    if (resp.success) {
      setLoading(false);
      setTrigger(!trigger);
      clearInput();
      setMessage(resp.message);
    } else {
      setLoading(false);
      setError(resp.message);
    }
  };

  const clearInput = () => {
    setFirstName("");
    setName("");
    setPhoneNumber("");
    setEmailAddress("");
  };

  useEffect(() => {
    fetchRegistrations();
  }, [trigger]);

  return (
    <section className="section-form">
      {loading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <>
          <h2>Emargement du participant</h2>

          <form
            onSubmit={() => {
              submitRegistration();
            }}
          >
            <div className="form">
              <div className="form-column">
                <label>Nom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-column">
                <label>Prénoms</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>

              <div className="form-column">
                <label>Numéro de téléphone</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>

              <div className="form-column">
                <label>Adresse email</label>
                <input
                  type="e-mail"
                  name="email"
                  id="email"
                  required
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                />
              </div>
            </div>
            {message && (
              <div className="form-column">
                <span className="response">{message}</span>
              </div>
            )}

            {error && (
              <div className="form-column">
                <span className="error">{error}</span>
              </div>
            )}
            <input type="submit" value="ENREGISTRER" className="cta" />
          </form>
        </>
      )}
    </section>
  );
}
