import { ArrowDownIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in tracking-tight text-gray-800 dark:text-white">
        Sreeram Sreedhar
      </h1>
      <p className="text-base sm:text-xl md:text-2xl mb-8 animate-fade-in animation-delay-200 font-light text-gray-600 dark:text-gray-300">
        Welcome to my website! For a PDF copy of my resume, please check out this{' '}
        <a
          href="https://docs.google.com/document/d/1oaQlpOr3doVZdEp8T5AnjSWMgS_TS_kS7mi2KAILKKM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-800 dark:hover:text-gray-400 transition-colors"
        >
          link
        </a>
      </p>
      <a
        href="#about"
        className="animate-bounce mt-8"
        aria-label="Scroll to About section"
      >
        <ArrowDownIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 dark:text-white" />
      </a>
    </section>
  );
}
