export default function ProduitModal({ produit, onClose }) {

if (!produit) return null;

return (
<div 
className="modal-overlay"
onClick={onClose}
>

<div 
className="modal"
onClick={(e) => e.stopPropagation()}
>

<button 
className="close-btn"
onClick={onClose}
>
X
</button>

<img src={produit.image} alt={produit.nom} />

<h2>{produit.nom}</h2>

<p>{produit.description}</p>

<p><b>prix:</b> {produit.prix} DH</p>

<p><b>poids:</b> {produit.poids}</p>

<p><b>categorie:</b> {produit.categorie}</p>

<p className="more-info">
إلى بغيتي معلومات أكثر على هاد المنتج تواصل معنا فواتساب 👇
</p>

<a
className="whatsapp-btn"
href={`https://wa.me/212XXXXXXXXX?text=سلام، بغيت نطلب ${produit.nom}`}
target="_blank"
rel="noopener noreferrer"
>
Commander via WhatsApp
</a>

</div>

</div>
);
}