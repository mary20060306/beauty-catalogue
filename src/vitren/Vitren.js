import { useState } from "react";
import produitsData from "./produits";
import ProduitCard from "./ProduitCard";

export default function Vitren() {
  const [categorie, setCategorie] = useState("Tous");

  const produitsFiltres =
    categorie === "Tous"
      ? produitsData
      : produitsData.filter((p) => p.categorie === categorie);

  return (
    <section className="produits-section">
      <div className="filter-buttons">
        <button onClick={() => setCategorie("Tous")}>Tous</button>
        <button onClick={() => setCategorie("Parfum")}>Parfum</button>
        <button onClick={() => setCategorie("Soins traditionnels")}>
          Soins traditionnels
        </button>
        <button onClick={() => setCategorie("Soins du corps")}>
          Soins du corps
        </button>
        <button onClick={() => setCategorie("Soins des pieds")}>
          Soins des pieds
        </button>
      </div>

      <div className="produits-grid">
        {produitsFiltres.map((produit) => (
          <ProduitCard key={produit.id} produit={produit} />
        ))}
      </div>
    </section>
  );
}
