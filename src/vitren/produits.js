import { useState, useEffect } from "react";
import ProduitCard from "./ProduitCard";
import { client } from "./sanity";
import ProduitModal from "./ProduitModal";

export default function Produit() {

const [selectedProduit, setSelectedProduit] = useState(null);
const [produits, setProduits] = useState([]);
const [categorie, setCategorie] = useState("Tous");

// جلب المنتجات من Sanity
useEffect(() => {
 client.fetch(`*[_type == "produit"]{
_id,
nom,
prix,
poids,
description,
categorie,
bestSeller,
"image": image.asset->url
}`)
  .then((data) => {
    setProduits(data);
  });
}, []);


// استخراج الفئات بدون تكرار
const categories = ["Tous", ...new Set(produits.map(p => p.categorie))];


// filtre produits
const produitsFiltres =
categorie === "Tous"
? produits
: produits.filter(p => p.categorie === categorie);

const bestProduits = produits.filter(p => p.bestSeller);

return (
<section className="produits-section">
{/* ⭐ الأكثر مبيعاً
{bestProduits.length > 0 && (
<>
<h2 className="section-title">⭐ الأكثر مبيعاً</h2>

<div className="best-wrapper">

<button 
className="scroll-btn scroll-left"
onClick={()=>document.querySelector(".best-container").scrollBy({left:-300,behavior:"smooth"})}
>
‹
</button>

<div className="best-container">
{bestProduits.map(produit => (
<ProduitCard
key={produit._id}
produit={produit}
onClick={() => setSelectedProduit(produit)}
/>
))}
</div>

<button 
className="scroll-btn scroll-right"
onClick={()=>document.querySelector(".best-container").scrollBy({left:300,behavior:"smooth"})}
>
›
</button>

</div>
</>
)} */}
<h2 className="section-title">المنتوجات ديالنا</h2>


<div className="filters">

{categories.map(cat => (
<button
key={cat}
onClick={() => setCategorie(cat)}
className={categorie === cat ? "active" : ""}
>
{cat}
</button>
))}

</div>


<div className="produits-container">

{produitsFiltres.map(produit => (
<ProduitCard 
key={produit._id} 
produit={produit}
onClick={() => setSelectedProduit(produit)}
/>
))}

</div>


{/* {selectedProduit && (
<div className="modal-overlay">

<div className="modal">

<button 
className="close-btn"
onClick={() => setSelectedProduit(null)}
>
X
</button>

<img src={selectedProduit.image} alt={selectedProduit.nom} />

<h2>{selectedProduit.nom}</h2>

<p>{selectedProduit.description}</p>

<p><b>prix:</b> {selectedProduit.prix} DH</p>

<p><b>poids:</b> {selectedProduit.poids}</p>

<p><b>categorie:</b> {selectedProduit.categorie}</p>

</div>

</div>
)} */}

<ProduitModal
produit={selectedProduit}
onClose={() => setSelectedProduit(null)}
/>
</section>
);
}