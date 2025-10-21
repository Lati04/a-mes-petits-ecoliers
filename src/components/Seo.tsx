import React from "react";
import { featuredBooks } from "../data";

const siteUrl = "https://amespetitsecoliers.fr";
const collectionName = "À mes petits écoliers";
const socialImage = `${siteUrl}/images/a-mes-petits-ecoliers-collection-coloriage-educatif.jpg`;

const Seo: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": `Collection ${collectionName}`,
        "itemListElement": featuredBooks.map((book, index) => ({
          "@type": "Product",
          "position": index + 1,
          "name": book.title,
          "image": `${siteUrl}${book.img}`,
          "description": `Découvrir ${book.title} — collection ${collectionName}.`,
          "offers": {
            "@type": "Offer",
            "url": book.link,
            "price": book.price?.toFixed(2),
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": "Collection", "item": `${siteUrl}/#collection` }
        ]
      }
    ]
  };

  return (
    <>
      <title>{collectionName} — Cahiers de coloriage éducatifs</title>
      <meta
        name="description"
        content={`Découvrez ${featuredBooks.length} cahiers éducatifs pour apprendre en coloriant : alphabet, chiffres, couleurs, mandalas et plus encore.`}
      />
      <meta
        name="keywords"
        content="coloriage éducatif, cahiers enfants, apprendre en coloriant, alphabet, chiffres, mandala, kawaii, manga, empathie, bienveillance, respect, courage, non au harcèlement, confiance en soi, oraganisation, développement personnel"
      />
      <meta name="author" content="Latifa Attar" />
      <meta name="robots" content="index, follow, max-snippet:320, max-image-preview:large" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={collectionName} />
      <meta property="og:title" content={`${collectionName} — Cahiers de coloriage éducatifs`} />
      <meta
        property="og:description"
        content={`Découvrez ${featuredBooks.length} cahiers éducatifs et ludiques pour apprendre en coloriant. Idéal dès 3 ans.`}
      />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${collectionName} — Cahiers de coloriage éducatifs`} />
      <meta
        name="twitter:description"
        content={`Découvrez ${featuredBooks.length} cahiers éducatifs et ludiques pour apprendre en coloriant.`}
      />
      <meta name="twitter:image" content={socialImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};

export default Seo;
