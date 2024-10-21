export const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2 font-bold">
      <a
        href="https://www.linkedin.com/in/shubham-yadav-6676a7239/"
        target="_blank"
        className="text-sky-500"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <p>|</p>
      <a
        href="https://github.com/shubhamgyd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <p>|</p>
      <a
        href="https://github.com/shubhamgyd/NotesReactApp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-400"
      >
        Source Code
      </a>
    </div>
  );
};
