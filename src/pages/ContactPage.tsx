import React from "react";
import { PinIcon } from "lucide-react";
import "@/css/contact.css";
import { Button } from "@/components/ui/button";

interface ContactPageProps {}

const ContactPage = ({}: ContactPageProps) => {
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  return (
    <main className="pt-8 sm:py-8 md:py-10 lg:py-14">
      <div className="container-md mb-6 lg:mb-8">
        <h1 className="text-h1 sm:text-5xl font-bold mb-2">
          Kontakt/Prowadzenie treningowe
        </h1>
        <p className="max-w-lg md:max-w-xl lg:max-w-2xl">
          Zapraszam do kontaktu! Chętnie odpowiem na wszelkie pytania. Jeśli
          jesteś zainteresowany współpracą, zostaw wiadomość "Współpraca
          treningowa" a ja postaram się udzielić Ci detali na temat
          indywidualnego prowadzenia.
        </p>
      </div>
      <form
        netlify-honeypot="bot-field"
        // @ts-expect-error
        netlify
        method="POST"
        className="contact-form mx-auto mt-8 md:mt-12 lg:mt-16 bg-[#ffffff10] flex flex-col rounded-lg relative shadow-md shadow-[#00000030]"
      >
        <PinIcon className="w-6 h-6 absolute right-4 top-4" />
        <input
          type="hidden"
          name="subject"
          value="Wypełniono formularz kontaktowy"
        />
        <p className="pointer-events-none absolute opacity-0 -z-10">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input
          autoComplete="name"
          autoFocus
          placeholder="Imię"
          name="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          placeholder="Email"
          type="email"
          autoCorrect="off"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="Email"
          required
        />
        <span className="validation-text absolute left-1 top-1 text-xs">
          Podany adres email jest niepoprawny
        </span>
        <div className="flex">
          <textarea
            placeholder="Wiadomość"
            rows={1}
            name="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <Button
          variant={"secondary"}
          className="w-full mx-auto max-w-[400px] mt-8"
        >
          Wyślij!
        </Button>
      </form>
    </main>
  );
};

export default ContactPage;
