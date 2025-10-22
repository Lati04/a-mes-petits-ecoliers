import React, { useState } from "react";
import type { BooksProps } from "../data";
import { bookDescriptions } from "../data";
import CTAButton from "./CTAButton";

const BookCard: React.FC<BooksProps> = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = bookDescriptions[book.title] || "Description non disponible";
  const shortDescription =
    description.length > 400 ? description.slice(0, 400) + "..." : description;

  return (
    <>
      <div className="flex flex-col items-center justify-between py-2 overflow-hidden transition-transform duration-300 bg-white shadow-md hover:shadow-lg hover:-translate-y-1">
        <img src={book.img} alt={book.title} className="object-cover w-full h-45" />
        <h3 className="text-center text-lg font-semibold text-[#cba95c] line-clamp-2 mt-2 px-1">
          {book.title}
        </h3>
        <CTAButton
          onClick={() => setShowModal(true)}
          variant="button-gold"
          aria-label={`Voir les détails de ${book.title}`}
          className="m-2"
        >
          Voir les détails
        </CTAButton>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${book.title}`}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-7/12 p-4 mt-8 md:mt-0 bg-[#f9f5ec] shadow-lg max-h-[70vh] overflow-y-auto transform top-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <CTAButton
              onClick={() => setShowModal(false)}
              variant="button-gold"
              aria-label="Fermer la modale"
              className="!absolute flex items-center justify-center top-3 right-3 w-7 h-7 text-lg font-bold"
            >
              &times;
            </CTAButton>

            <h3
              id={`modal-title-${book.title}`}
              className="text-center text-xl font-semibold text-[#cba95c] mt-8 mb-3"
            >
              {book.title}
            </h3>

            <p className="mb-2 text-lg text-center font-bold text-[#cba95c]">
              Prix : {book.price?.toFixed(2)} €
            </p>
            {book.link && (
              <div className="mb-4 text-center">
                <CTAButton
                  href={book.link}
                  variant="button-gold"
                  aria-label={`Voir ${book.title} sur Amazon`}
                >
                  Voir sur Amazon
                </CTAButton>
              </div>
            )}

            <p className="mb-4 text-sm text-gray-700 whitespace-pre-wrap">
              {showFullDescription ? description : shortDescription}
            </p>

            {description.length > 400 && (
              <div className="mb-2 text-center">
                <CTAButton
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  variant="button-gold"
                  aria-label={
                    showFullDescription
                      ? `Réduire la description de ${book.title}`
                      : `Afficher la description complète de ${book.title}`
                  }
                >
                  {showFullDescription ? "Voir moins" : "Voir plus"}
                </CTAButton>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookCard;
