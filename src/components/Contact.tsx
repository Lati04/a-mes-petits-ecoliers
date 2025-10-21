import React, { useState, useEffect } from "react";
import { API_URL } from "../data";
import type { Comment, CommentForm, PrivateForm, ContactProps } from "../data";
import CTAButton from "./CTAButton";

const Contact: React.FC<ContactProps> = ({ apiUrl = API_URL }) => {
  // ---------- Commentaire ----------
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState<CommentForm>({ name: "", message: "" });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="w-full mx-auto px-4 py-4 mb-4 bg-white/60 backdrop-blur-md shadow-[0_4px_18px_rgba(203,169,92,0.25)] hover:shadow-[0_6px_25px_rgba(203,169,92,0.35)] transition-shadow duration-300 text-gray-800">

      {/* ---------- Commentaires ---------- */}
      <p className="mb-6 text-center text-gray-700">
        Laisse un commentaire sur le site ou les livres.  
        Tu peux rester anonyme si tu veux !
      </p>

      <form onSubmit={handleCommentSubmit} className="flex flex-col gap-3 mb-6">
        <div className="p-1 rounded-none glow-frame">
          <input
            type="text"
            placeholder="Ton nom ou pseudo (optionnel)"
            value={commentForm.name}
            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
            className="w-full p-2 rounded-none bg-white/80 focus:outline-none"
          />
        </div>
        <div className="p-1 mt-2 rounded-none glow-frame">
          <textarea
            placeholder="Ton commentaire"
            value={commentForm.message}
            onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
            rows={3}
            required
            className="w-full p-2 rounded-none bg-white/80 focus:outline-none"
          />
        </div>
        <CTAButton
          type="submit"
          onClick={() => {}}
          variant="button-gold"
          aria-label="Envoyer le commentaire"
          className="mx-auto"
        >
          {isSending ? "Envoi..." : "Envoyer"}
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

      {/* ---------- Contact privé ---------- */}
      <div className="max-w-3xl mx-auto mb-2">
        <p className="mb-2 text-center text-gray-700">
          Pour un contact privé, une question, une collaboration ou un mot doux ?  
          Laisse ton email :
        </p>

        {privateError && (
          <p className="p-2 mb-3 text-center text-red-700 rounded-none glow-frame">
            ⚠️ {privateError}
          </p>
        )}
        {privateSent && (
          <p className="p-2 mb-3 text-center text-green-700 rounded-none glow-frame">
            ✅ Merci ! Ton email a bien été envoyé.
          </p>
        )}

        {!privateSent && (
          <form
            onSubmit={handlePrivateSubmit}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex-1 p-1 rounded-none glow-frame">
              <input
                type="email"
                placeholder="Ton email"
                value={privateForm.email}
                onChange={(e) => setPrivateForm({ email: e.target.value })}
                required
                className="w-full p-2 rounded-none bg-white/80 focus:outline-none"
                disabled={isSending}
              />
            </div>
            <CTAButton
              type="submit"
              onClick={() => {}}
              variant="button-gold"
              aria-label={isSending ? "Envoi en cours" : "Envoyer l'email"}
              className=""
            >
              {isSending ? "Envoi..." : "Envoyer"}
            </CTAButton>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
