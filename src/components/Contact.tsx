import React, { useState, useEffect } from "react";
import { API_URL } from "../data";
import type { Comment, CommentForm, PrivateForm, ContactProps } from "../data";
import CTAButton from "./CTAButton";

const Contact: React.FC<ContactProps> = ({ apiUrl = API_URL }) => {
  // ---------- Commentaires ----------
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState<CommentForm>({ name: "", message: "" });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Commentaire submit déclenché");

    if (!commentForm.message.trim()) return;

    try {
      const res = await fetch(`${apiUrl}/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentForm),
      });

      if (res.ok) {
        const data = await res.json();
        setComments(data.comments);
        setCommentForm({ name: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch(`${apiUrl}/api/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments))
      .catch((err) => console.error(err));
  }, [apiUrl]);

  // ---------- Contact privé ----------
  const [privateForm, setPrivateForm] = useState<PrivateForm>({ email: "" });
  const [privateSent, setPrivateSent] = useState(false);
  const [privateError, setPrivateError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email);

  const handlePrivateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact privé submit déclenché");

    setPrivateError("");
    setPrivateSent(false);

    if (!privateForm.email.trim()) {
      setPrivateError("Veuillez saisir une adresse e-mail.");
      return;
    }
    if (!validateEmail(privateForm.email)) {
      setPrivateError("Adresse e-mail invalide. Exemple : prenom.nom@gmail.com");
      return;
    }

    try {
      setIsSending(true);
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(privateForm),
      });

      if (res.ok) {
        setPrivateSent(true);
        setPrivateForm({ email: "" });
      } else {
        const data = await res.json();
        setPrivateError(data.error || "Erreur lors de l’envoi de votre message.");
      }
    } catch (err) {
      console.error(err);
      setPrivateError("Impossible de contacter le serveur pour le moment.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-12 mb-7 mt-4 bg-white/60 backdrop-blur-md shadow-[0_4px_18px_rgba(203,169,92,0.25)] hover:shadow-[0_6px_25px_rgba(203,169,92,0.25)] transition-shadow duration-300 text-gray-800 max-w-7xl rounded-bl-[60px] rounded-br-[60px]">

      {/* ---------- Formulaire Commentaires ---------- */}
      <p className="mb-2 font-bold text-center text-gray-700">
        Un avis, un commentaire, un mot doux, une idée à partager, c'est par ici !
      </p>

      <form onSubmit={handleCommentSubmit} className="flex flex-col max-w-2xl gap-4 mx-auto mb-6">
        <div className="bg-transparent rounded-none glow-frame backdrop-blur-sm">
          <input
            type="text"
            placeholder="Ton nom ou pseudo (optionnel)"
            value={commentForm.name}
            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
            className="w-full p-4 font-bold rounded-none focus:outline-none no-bg placeholder:text-[#cba95c] placeholder:font-semibold"
          />
        </div>

        <div className="mt-2 bg-transparent rounded-none backdrop-blur-sm glow-frame">
          <textarea
            placeholder="Ton commentaire"
            value={commentForm.message}
            onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
            rows={3}
            required
            className="w-full p-4 font-bold rounded-none no-bg focus:outline-none placeholder:text-[#cba95c] placeholder:font-semibold"
          />
        </div>

        <CTAButton type="submit" variant="button-gold" aria-label="Envoyer le commentaire" className="mx-auto">
          Envoyer
        </CTAButton>
      </form>

      <div className="flex flex-col gap-3">
        {comments.map((c, i) => (
          <div key={i} className="p-3 break-words border rounded-none bg-white/50">
            <p className="font-semibold">{c.name}</p>
            <p>{c.message}</p>
          </div>
        ))}
      </div>

      {/* ---------- Formulaire Contact Privé ---------- */}
      <div className="mx-auto mt-4">
        <p className="mb-2 font-bold text-center text-gray-700">
          Pour toute prise de contact, indique ton email.
        </p>

        {privateError && (
          <p className="max-w-2xl p-2 mx-auto mb-3 text-center text-red-700 rounded-none glow-frame">
            ⚠️ {privateError}
          </p>
        )}
        {privateSent && (
          <p className="max-w-2xl p-2 mx-auto mb-3 text-center text-green-700 rounded-none glow-frame">
            ✅ Merci ! Ton email a bien été envoyé.
          </p>
        )}

        {!privateSent && (
          <form onSubmit={handlePrivateSubmit} className="flex items-center justify-center max-w-2xl gap-4 mx-auto">
            <div className="flex-1 bg-transparent rounded-none glow-frame backdrop-blur-sm">
              <input
                type="email"
                placeholder="Ton email"
                value={privateForm.email}
                onChange={(e) => setPrivateForm({ email: e.target.value })}
                required
                className="w-full p-4 font-bold rounded-none focus:outline-none no-bg placeholder:text-[#cba95c] placeholder:font-semibold"
                disabled={isSending}
              />
            </div>

            <CTAButton type="submit" variant="button-gold" aria-label={isSending ? "Envoi en cours" : "Envoyer l'email"}>
              {isSending ? "Envoi..." : "Envoyer"}
            </CTAButton>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
