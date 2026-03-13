// Kan-importiw tableau dial produits li fih ma3loumat dial kol produit
// import { produits } from './produit';

// Kan-importiw component ProduitCard li kaymattel carte dial produit
// import ProduitCard from './ProduitCard';

// Kan-importiw Header w Footer men component Layout
import { Header, Footer } from './Layout';

// Kan-importiw fichier CSS dial page produits
import './styles/produits.css';
import Produi from './produits';


// Hada howa component principal dial page Produits
export default function Produits() {
  return (<>
      {/* Header kayban fo9 page */}
      <Header />

      {/* Section li fiha liste dial produits */}
      {/* <section className="produits-section"> */}

        {/* 3onwan dial section */}
        {/* <h2 className="section-title">Nos Produits Naturels</h2>

        {/* Container li kayjma3 ga3 les cartes dial produits */}
        {/* <div className="produits-container"> */} 

          {/*
            Hna kanst3mlo map bach ndoro 3la tableau dial produits
            kol produit kan3tiwh l component ProduitCard b props
         }
          {produits.map((produit) => (
            <ProduitCard
              key={produit.id}   // key darori bach React y3raf kol element bohdo
              produit={produit} // props li fih ma3loumat dial produit
            />
          )) */}
        <Produi/>
        {/* </div>
      </section> */}

      {/* Footer kayban f ta7t page */}
      <Footer />
    </>
  );
}
