import React from "react";
import BookCard from "../components/BookCard";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Contact from "../components/Contact";
import ExerciseCard from "../components/ExerciseCard";
import type { HomeProps } from "../data";
import { exercises as defaultExercises, featuredBooks as defaultBooks, themes as defaultThemes, books } from "../data";

const Home: React.FC<HomeProps> = ({
  featuredBooks = defaultBooks,
  exercises = defaultExercises,
  themes = defaultThemes,
}) => {
  return (
  <main className="w-full px-4 sm:px-6">
    {/* ---------- EN-TÊTE ---------- */}
    <section id="home" className="relative pt-6 pb-12 overflow-hidden text-center">
      <div className="relative mx-auto">
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <h1 className="text-3xl font-bold sm:text-5xl text-gold-gradient drop-shadow-sm">
            À mes petits écoliers
          </h1>
          <img
            src="/images/lg_title.png"
            alt="Décoration"
            className="object-contain w-14 h-14 sm:w-20 sm:h-20"
          />
        </div>
        <p className="mt-2 text-base font-bold leading-relaxed text-gray-800 sm:text-lg">
          Des cahiers de coloriage éducatifs pour apprendre les valeurs essentielles
        </p>
      </div>
    </section>

    {/* ---------- CARROUSEL ---------- */}
    <Section title="Nos thèmes" bgColor="header-rainbow" noMarginTop>
      <Carousel items={themes} />
    </Section>

    {/* ---------- TOMES & SIDE SECTIONS ---------- */}
    <Section id="tomes" title="Nos tomes">
      <div className="flex flex-col lg:grid lg:grid-cols-[290px_1fr_290px] gap-6 w-full items-start">

        {/* SIDEBAR GAUCHE */}
        <Sidebar>
          <h3 className="mb-4 text-xl font-bold text-[#cba95c] text-center px-4">
            Exercices ludiques et poétiques
          </h3>
          <div className="px-6 mt-2 space-y-2">
            {exercises.map((exercise, i) => (
              <ExerciseCard key={i} exercise={exercise} />
            ))}
          </div>
          <p className="mt-4 text-sm text-center text-gray-700">
          Chaque tome t’ouvre une nouvelle porte d’apprentissage.
          </p>
        </Sidebar>

        {/* LIVRES AU CENTRE */}
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {featuredBooks.map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
        </div>

        {/* SIDEBAR DROITE */}
        <Sidebar>
          <h3 className="mb-4 text-xl font-bold text-[#e7c987] text-center px-4">
            Poèmes & Conseils éducatifs
          </h3>

          <div className="px-6 space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">
            <p>
              <strong>Astuce :</strong> prends 5 minutes pour respirer profondément avant de colorier ton cahier éducatif, et laisse s’éveiller ta <strong>créativité</strong>.
            </p>
            <p>
              <strong>Conseil :</strong> choisis tes couleurs selon ton humeur pour stimuler attention et observation.
            </p>
            <p>
              <strong>À découvrir :</strong> chaque tome propose des exercices éducatifs pour développer <strong>confiance en soi</strong> et <strong>créativité</strong> chez l’enfant.
            </p>
            <p className="italic text-center text-[#cba95c] mt-4">
            “Colorier, c’est semer du beau dans sa vie et découvrir ses émotions, tout en renforçant <strong>créativité</strong> et <strong>développement personnel</strong>.”
            </p>
          </div>
          
          <div className="w-28 mx-auto border-t-2 border-[#cba95c]/40"></div>
          
          <div className="space-y-2 text-sm italic leading-relaxed text-center text-gray-800 md:text-sm ">
            <h4 className="text-lg font-semibold text-[#e7c987] mb-2">L’enfant du monde</h4>

            <p>
              Il est une graine de lumière,<br />
              Semée au creux du temps.<br />
              Dans ses yeux, un univers,<br />
              Un rêve encore tremblant.
            </p>

            <p>
              Il observe, il imite, il invente,<br />
              Il bâtit des mondes invisibles.<br />
              Son rire éclaire les tempêtes,<br />
              Son cœur sait l’impossible.
            </p>

            <p className="px-1">
              Si nous l’écoutons sans presser,<br />
              S’il apprend dans la douceur,<br />
              Il deviendra ce qu’il est né d’être :<br />
              un adulte porteur de chaleur et de créativité.
            </p>

            <p>
              Car chaque geste, chaque mot<br />
              Sculpte l’avenir du monde.<br />
              L’enfant d’aujourd’hui, c’est l’espoir,<br />
              La paix qui germe dans l’onde.
            </p>

            <p className="px-1 mb-0">
              Alors aimons, guidons, veillons,<br />
              Offrons-lui le goût du beau<br />
              Et les fondements du développement de soi.<br />
              Prendre soin d’un enfant,<br />
              C’est prendre soin de l’humanité.
            </p>
          </div>
        </Sidebar>
      </div>
    </Section>

      {/* ---------- ABOUT & CONTACT ---------- */}
    <Section id="about" title="À propos" bgColor="header-rainbow">
      <About books={books} />
    </Section>
      
    <Section id="contact" title="Avis & Contact">
      <Contact />
    </Section>
  </main>
  );
};

export default Home;
