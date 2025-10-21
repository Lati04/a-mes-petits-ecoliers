import React, { useState } from "react";
import ReactDOM from "react-dom";
import type { ExerciseCardProps } from "../data";
import CTAButton from "./CTAButton";

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [showModal, setShowModal] = useState(false);
  const [zoom, setZoom] = useState(false);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn p-4"
      onClick={() => setShowModal(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`exercise-modal-title-${exercise.title}`}
    >
     <div
      className="relative w-full max-w-lg md:max-w-2xl p-4 md:p-6 bg-[#f9f5ec] shadow-lg max-h-[70vh] overflow-y-auto flex flex-col items-center animate-scaleIn"
      onClick={(e) => e.stopPropagation()}
    >
        <CTAButton
          onClick={() => setShowModal(false)}
          variant="button-gold"
          aria-label="Fermer la modale"
          className="!absolute flex items-center justify-center top-3 right-3 w-7 h-7"
        >
          &times;
        </CTAButton>

        <h3
          id={`exercise-modal-title-${exercise.title}`}
          className="text-lg md:text-2xl font-semibold text-[#cba95c] mb-3 text-center"
        >
          {exercise.title}
        </h3>

        <div className="relative flex justify-center w-full gap-2 mb-4">
          {exercise.images.map((imgSrc, idx) => (
            <div key={idx} className="flex-1">
              <img
                src={imgSrc}
                alt={`${exercise.title} ${idx + 1}`}
                className={`object-contain w-full max-h-[45vh] transition-transform duration-300 ${
                  zoom ? "scale-110" : "scale-100"
                } blur-sm`}
                onClick={() => setZoom(!zoom)}
              />
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-100 bg-black/20">
            🔒 Contenu réservé
          </div>
        </div>

        <p className="text-sm italic text-center text-gray-700 whitespace-pre-line">
          {exercise.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="p-3 transition-transform duration-300 shadow-md cursor-pointer bg-white/80 hover:shadow-lg hover:-translate-y-1"
        onClick={() => setShowModal(true)}
        aria-label={`Ouvrir les détails de l'exercice ${exercise.title}`}
      >
        <h4 className="text-md md:text-lg font-semibold text-[#cba95c] text-center">
          {exercise.title}
        </h4>
      </div>

      {showModal && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
};

export default ExerciseCard;
