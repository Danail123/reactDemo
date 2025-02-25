import { react, useEffect, useState } from "react";

export default function HomePage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const playersJSON = localStorage.getItem("players");
    const players = playersJSON ? JSON.parse(playersJSON) : [];
    setPlayers(players);
    console.log(players);
  }, []);

  const rows = players.map((player, index) => (
    <tr key={index}>
      <td>{player.signInName}</td>
      <td>{player.password}</td>
    </tr>
  ));
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Player Name:</th>
            <th>City location:</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
