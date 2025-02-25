import { useState, useEffect } from "react";
import Link from "next/link";

export default function SignIn() {
  const [formData, setFromData] = useState({
    signInName: "",
    password: "",
  });

  const handleChange = (ev) => {
    const key = ev.target.name;
    const value = ev.target.value;
    setFromData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const playersJSON = localStorage.getItem("players");
    const players = playersJSON ? JSON.parse(playersJSON) : [];
    players.push(formData);
    localStorage.setItem("players", JSON.stringify(players));
  };

  return (
    <>
      <form id="sing-in-form" onSubmit={handleSubmit}>
        <span>Sign in</span>
        <label htmlFor="signInName">Name:</label>
        <input
          className="input"
          type="text"
          name="signInName"
          id="signInName"
          value={formData.signInName}
          onChange={handleChange}
        />
        <label htmlFor="password"> Password: </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sumbit</button>
      </form>
      <Link href="/homepage">homepage</Link>
    </>
  );
}
