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
import WaveSeparator from "../components/WaveSeparator";

const Home: React.FC<HomeProps> = ({
  featuredBooks = defaultBooks,
  exercises = defaultExercises,
  themes = defaultThemes,
}) => {
  return (
  <main className="w-full">
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-4 px-4 mx-auto md:flex-row sm:px-6 lg:px-8 max-w-7xl"
    >
      <div className="flex flex-col items-center mt-12 md:items-start md:mr-4 md:mt-16">
        <h1 className="text-4xl font-bold text-center sm:text-5xl text-gold-gradient md:text-left">
          À mes petits écoliers
        </h1>
        <p className="max-w-2xl mx-auto mt-3 text-base font-bold leading-relaxed text-center text-gray-800 sm:text-lg md:text-left">
          Des cahiers de coloriage éducatifs pour apprendre les valeurs essentielles
        </p>
      </div>

      <div className="flex-shrink-0 w-36 sm:w-40 md:w-80 rounded-3xl shadow-[0_4px_18px_rgba(203,169,92,0.25)] hover:shadow-[0_6px_25px_rgba(203,169,92,0.35)] transition-shadow duration-300 transform relative md:translate-y-16"
      style={{ rotate: "8deg" }}
      >
        <img
          src="/images/contact2bis.jpg"
          alt="Décoration"
          className="object-contain w-full h-auto"
        />
      </div>
    </section>

    {/* ---------- CARROUSEL ---------- */}
    <WaveSeparator className="relative z-[2]" />
    <Section
      title="Nos thèmes"
      bgColor="header-rainbow"
      noMarginTop
       className="relative z-[2] -mt-[6px] -mb-[3px]"  
    >
      <Carousel items={themes} />
    </Section>
    <WaveSeparator flip className="relative z-[2]" />

    {/* ---------- TOMES & SIDE SECTIONS ---------- */}
    <Section id="tomes" title="Nos tomes" noMarginTop>
      <div className="flex flex-col lg:grid lg:grid-cols-[290px_1fr_290px] gap-6 w-full items-start">

        {/* SIDEBAR GAUCHE */}
        <Sidebar className="h-full rounded-tl-3xl rounded-bl-3xl">
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

       {/* GRID MOBILE / TABLETTE */}
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:hidden place-items-center">
          {featuredBooks.map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
        </div>
        
        {/* LIVRES AU CENTRE - version desktop */}
        <div className="hidden w-full gap-6 lg:grid sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {featuredBooks.slice(0, 6).map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
        </div>

        {/* SIDEBAR DROITE */}
       <Sidebar className="h-full rounded-br-3xl rounded-tr-3xl">
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
        
        {/* DERNIÈRE LIGNE DES 4 TOMES - desktop only */}
        <div className="relative items-center justify-center hidden w-full mt-6 lg:flex">
          
          {/* Angle gauche */}
          <div className="relative flex flex-col items-start justify-start w-20 h-72">
            <div className="absolute top-0 left-0 w-2 h-full rounded-l-lg header-rainbow"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 rounded-bl-lg header-rainbow"></div>
          </div>

          {/* Grille des 4 tomes */}
          <div className="grid w-full max-w-[1180px] grid-cols-4 gap-6 place-items-center px-4">
            {featuredBooks.slice(6, 10).map((book, i) => (
              <BookCard key={i} book={book} />
            ))}
          </div>

          {/* Angle droit */}
          <div className="relative flex flex-col items-end justify-end w-20 h-72">
            <div className="absolute bottom-0 right-0 w-2 h-full rounded-r-lg header-rainbow"></div>
            <div className="absolute bottom-0 right-0 w-full h-2 rounded-br-lg header-rainbow"></div>
          </div>
        </div>
    </Section>

   {/* ---------- ABOUT & CONTACT ---------- */}
    <WaveSeparator className="relative z-[1] mt-12" />
    <Section
        id="about"
        title="À propos"
        bgColor="header-rainbow"
        noMarginTop
        className="relative z-[2] -mt-[3px] -mb-[3px]"  
      >
        <About books={books} />
    </Section>
    <WaveSeparator flip className="relative z-[1]" />

    {/* Image Desktop */}
    <section className="justify-center hidden mx-auto mt-2 max-w-7xl md:flex">
      <img 
        src="/images/contact1.jpg" 
        alt="Contact Desktop" 
        className="object-contain w-full"
      />
    </section>

    {/* Image Mobile/Tablette */}
    <section className="flex justify-center px-4 mx-auto mt-2 md:hidden">
      <img 
        src="/images/contact2.jpg" 
        alt="Contact Mobile" 
        className="object-cover w-full"
      />
    </section>

    <Section id="contact" title="Avis & Contact" noMarginTop>
      <Contact />
    </Section>
  </main>
  );
};

export default Home;
