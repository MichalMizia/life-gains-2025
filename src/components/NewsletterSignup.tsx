import { CalendarDaysIcon, DumbbellIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface NewsletterSignupProps {}

export const NewsletterSignup = ({}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mailchimpUrl =
      "https://life-gains.us21.list-manage.com/subscribe/post?u=8cc0ade8965a30cea247f5f58&amp;id=8f2277e2e3&amp;f_id=0014dde6f0";

    const formData = new FormData();
    formData.append("EMAIL", email);

    console.log("Submitting to Mailchimp:", email);

    try {
      const response = await fetch(mailchimpUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Mailchimp requires no-cors mode
      });

      if (response.ok || response.status === 0) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-bg py-16 sm:py-24 lg:py-32">
      <div className="container-md">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Zasubskrybuj newsletter.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              {status === "idle"
                ? "Otrzymasz darmowy plan treningowy, możesz wypisać się w każdej chwili. Email z planem otrzymasz gdy tylko będzie gotowy, poproszę o tydzień cierpliwości."
                : status === "success"
                ? "Dziękuję za zapisanie się!"
                : "Coś poszło nie tak, spróbuj ponownie."}
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex max-w-md gap-x-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-accent-200 sm:text-sm/6"
              />
              <Button
                type="submit"
                variant={"primary"}
                className="cursor-pointer px-6"
              >
                Zapisuję się!
              </Button>
            </form>
          </div>
          {/* action="https://life-gains.us21.list-manage.com/subscribe/post?u=8cc0ade8965a30cea247f5f58&amp;id=8f2277e2e3&amp;f_id=0014dde6f0" */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Artykuły
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Dostaniesz powiadomienie o nowych artykułach w których
                przekazuję wiedze z 5 lat trenowania tróboju.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <DumbbellIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Plan treningowy
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Przygotowany na 6 tygodni, aby pomóc Ci pokonać stagnację w
                głównych bojach.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
};
