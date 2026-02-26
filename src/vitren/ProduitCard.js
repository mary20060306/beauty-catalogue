// Hada howa component ProduitCard
// kayakhod produit men props (ja men component parent)
export default function ProduitCard({ produit }) {
  return (
    // Carte principale dial produit
    <div className="produit-card">

      {/* Box dial image */}
      <div className="image-box">

        {/* Image dial produit */}
        <img src={produit.image} alt={produit.nom} />

        {/* Badge li kaybayan categorie dial produit */}
        <span className="badge">{produit.categorie}</span>
      </div>

      {/* Smiyat dial produit */}
      <h3>{produit.nom}</h3>

      {/* Description dial produit */}
      <p className="description">{produit.description}</p>

      {/* Infos zyada b7al poids w prix */}
      <div className="infos">

        {/* Poids dial produit */}
        <span className="poids">{produit.poids}</span>

        {/* Prix dial produit */}
        <span className="prix">{produit.prix} DH</span>
      </div>

      
    </div>
  );
}
