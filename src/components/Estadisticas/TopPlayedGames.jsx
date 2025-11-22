import "./TopPlayedGames.css";

function TopPlayedGames({ games }) {
  // 📊 Ordenar juegos por horas jugadas (mayor → menor)
  const sorted = [...games].sort((a, b) => (b.horasJugadas || 0) - (a.horasJugadas || 0));

  // 🔝 Tomar los 5 primeros
  const top5 = sorted.slice(0, 5);

  return (
    <div className="top-games-card">
      <h3>Top 5 juegos más jugados</h3>

      <ul className="top-games-list">
        {top5.map((game, index) => (
          <li key={game._id} className="top-game-item">
            <span className="rank">#{index + 1}</span>

            <div className="top-game-info">
              <p className="top-game-title">{game.titulo}</p>
              <p className="top-game-hours">
                {game.horasJugadas || 0} horas
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopPlayedGames;
