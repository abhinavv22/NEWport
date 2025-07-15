import { Particles } from "../components/Particles";

/**
 * Contact section – now links out to a Google Form instead of embedding it.
 */
const Contact = () => {
  return (
    <section className="relative flex items-center justify-center c-space section-spacing">
      {/* Decorative background particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Contact card */}
      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-2xl border border-white/10 bg-primary p-5">
        {/* Heading */}
        <div className="mb-10 flex w-full flex-col gap-5">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website,Software, improve your existing platform, or bring a unique project to
            life, I'm here to help. Fill out
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSePzULs9x3BESWvMLVO6JH7H1Fgvks0clnne85aTk4UitD0BQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 font-semibold text-royal underline-offset-2 hover:underline"
            >
              this short form
            </a>
            and I'll get back to you soon.
          </p>
        </div>

        {/* CTA button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSePzULs9x3BESWvMLVO6JH7H1Fgvks0clnne85aTk4UitD0BQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-radial from-lavender to-royal px-6 py-3 text-lg font-semibold text-white hover-animation"
        >
          Open Contact Form ↗
        </a>
      </div>
    </section>
  );
};

export default Contact;
