export default function ProduitCard({ produit, onClick }) {

const phone = "212616070861";

const message = `سلام، بغيت نطلب  معلومات  أكثر على هاد المنتج :${produit.nom}`;

const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="produit-card" onClick={onClick}>

      <div className="image-box">
        <img src={produit.image} alt={produit.nom} />
        <span className="badge">{produit.categorie}</span>
      </div>

     <h3>{produit.nom}</h3>   
      <div className="infos">
        <span className="poids">{produit.poids}</span>
        <span className="prix">{produit.prix} DH</span>
      </div>

      {/* زر واتساب */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        onClick={(e) => e.stopPropagation()}
      >
        Commander WhatsApp
      </a>

    </div>
  );
}