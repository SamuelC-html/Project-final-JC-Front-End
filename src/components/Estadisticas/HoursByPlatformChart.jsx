import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function HoursByPlatformChart({ games }) {
  // Agrupamos horas por plataforma
  const platformMap = {};

  games.forEach((game) => {
    if (!platformMap[game.plataforma]) {
      platformMap[game.plataforma] = 0;
    }
    platformMap[game.plataforma] += Number(game.horasJugadas || 0);
  });

  const data = Object.keys(platformMap).map((platform) => ({
    plataforma: platform,
    horas: platformMap[platform],
  }));

  return (
    <div className="stats-card">
      <h3 className="stats-title">Horas jugadas por plataforma</h3>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="plataforma" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="horas" fill="#00ff88" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default HoursByPlatformChart;
