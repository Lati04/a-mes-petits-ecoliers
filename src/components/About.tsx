import React from "react";
import type { Book, AboutProps } from "../data";
import CTAButton from "./CTAButton";

const About: React.FC<AboutProps> = ({
  books,
  subtitle = "À mes petits écoliers – Collection éducative et ludique",
  quote = "“Colorier, c’est apprendre à se connaître et à semer du beau dans sa vie.”",
  amazonLink = "https://www.amazon.fr/s?k=à+mes+petits+écoliers",
}) => {
  return (
    <div className="w-full p-6 mx-auto mb-4 space-y-2 leading-relaxed text-center text-gray-800 glow-frame">

      <p className="text-[1rem] no-bg">
        Je m'appelle <strong className="no-bg">Latifa</strong>. Après plus de vingt ans dans le métier d'infirmière, 
        j’ai choisi de me reconvertir dans le <strong className="no-bg">développement web et mobile</strong>. 
        Cela m’a ouvert un monde de nouvelles compétences, d’outils numériques et de possibilités créatives.
      </p>

      <p className="text-[1rem] no-bg">
        J’ai allié rigueur, écoute et sens du détail à ma passion pour l’éducation et la création. 
        C’est cette combinaison qui m’a inspirée pour créer la collection <em className="no-bg">“À mes petits écoliers”</em>, 
        un projet de cœur qui accompagne les enfants dans le développement de leur <strong>confiance en soi</strong>, 
        leur <strong>amour de soi</strong> et leur <strong>créativité</strong>. 
        Chaque cahier aide les enfants à devenir des adultes empathiques, bienveillants, respectueux et capables de semer du positif autour d’eux.
      </p>

      <p className="text-[1rem] no-bg">
        Pour aller plus loin, j’ai conçu et réalisé ce site afin de donner vie à ma vision éducative et ludique. 
        Chaque cahier a été pensé pour offrir une expérience pédagogique complète, alliant apprentissage progressif, 
        plaisir créatif et éveil aux <strong>valeurs humaines</strong>, pour que chaque enfant puisse s’épanouir pleinement.
      </p>

      <p className="italic font-medium text-center text-[#cba95c] text-[1rem] no-bg">{quote}</p>
      <div className="w-80 mx-auto border-t-2 border-[#cba95c]/40"></div>

      {/* Présentation de la collection */}
      <div className="text-center no-bg">
        <div className="flex flex-col items-center justify-center gap-3 mb-4 sm:flex-row sm:gap-6">
          <h3 className="text-2xl font-semibold text-[#cba95c]">{subtitle}</h3>
         <CTAButton href={amazonLink} variant="button-gold">Voir sur Amazon</CTAButton>
        </div>

        {/* Grille de livres */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
          {books.map((book: Book, i: number) => (
            <div
              key={i}
              className="flex flex-col items-center w-40 h-40 p-1 text-center transition-all duration-300 shadow-lg hover:shadow-xl no-bg backdrop-blur-sm"
            >
              <div className="w-12 h-12 mb-1 overflow-hidden sm:w-20 sm:h-20">
                <img src={book.img} alt={book.title} className="object-contain w-full h-full" loading="lazy" />
              </div>
              <h4 className="text-base font-semibold text-[#cba95c] drop-shadow-sm mb-0.5">{book.title}</h4>
              <p className="text-xs leading-snug text-gray-800">{book.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[1rem] no-bg">
          <strong className="no-bg">Apprendre en s’amusant, c’est possible !</strong><br />
          La collection <em className="no-bg">À mes petits écoliers</em> propose des cahiers éducatifs et créatifs pour les enfants dès trois ans. 
          Chaque tome offre une expérience complète : développer la <strong>motricité fine</strong>, la <strong>concentration</strong>, la <strong>curiosité</strong>, la <strong>créativité</strong> et le <strong>goût du beau</strong>, 
          éveiller l’intérêt pour les lettres, les nombres et les couleurs, et favoriser la <strong>confiance en soi</strong> ainsi que l’apprentissage de <strong>valeurs humaines</strong> comme l’<strong>empathie</strong>, la <strong>bienveillance</strong>, le <strong>respect</strong> et l’<strong>organisation</strong>. 
          Chaque cahier peut être utilisé indépendamment, mais ensemble, ils forment une collection progressive adaptée à l’évolution de l’enfant — de la maternelle jusqu’au début de l’adolescence.
        </p>

        <p className="mt-2 font-medium text-center text-[#cba95c] text-[1rem]">
          Offrez à vos enfants un apprentissage joyeux, créatif et porteur de valeurs humaines grâce à la série <em>À mes petits écoliers</em>.
        </p>
      </div>
    </div>
  );
};

export default About;
