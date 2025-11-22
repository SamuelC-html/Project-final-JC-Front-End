import "./TotalHoursCard.css";

function TotalHoursCard({ games }) {
  // 🔢 Sumar todas las horas jugadas
  const totalHours = games.reduce((sum, game) => {
    return sum + (Number(game.horasJugadas) || 0);
  }, 0);

  return (
    <div className="metric-card">
      <h3>Total de horas jugadas</h3>
      <p className="metric-value">{totalHours}</p>
    </div>
  );
}

export default TotalHoursCard;
