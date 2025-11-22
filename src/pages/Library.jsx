import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameForm from "../components/GameForm";  // ← importamos el formulario de juegos
import GameList from "../components/GameList"; // ← importamos la lista de juegos
import SearchBar from "../components/SearchBar"; // ← importamos el buscador
import "../styles/LibraryPage.css";
import "../styles/PageLayout.css";

function LibraryPage() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [query, setQuery] = useState(""); // ← estado del buscador
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleEdit = (game) => {
    setSelectedGame(game);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSave = () => {
    setSelectedGame(null);
    setRefreshKey((prev) => prev + 1);
  };

  return (
  <div className="library-container">
    <div className="page-layout">
          {/* 🟩 Columna izquierda (sticky) */}
      <div className="left-wrapper">
        <div className="library-left">
          <SearchBar query={query} onChange={setQuery} />
          <GameForm selectedGame={selectedGame} onSave={handleSave} />
        </div>
      </div>

      {/* 🟦 Columna derecha (scroll normal) */}
      <div className="library-right">
        <GameList key={refreshKey} onEdit={handleEdit} query={query} />
      </div>
    </div>
    
  </div>

  );
}

export default LibraryPage;
