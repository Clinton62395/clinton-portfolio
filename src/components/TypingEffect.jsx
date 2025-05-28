import { TypeAnimation } from 'react-type-animation';

function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        'Billy Doumbouya🤵', 
        2000, 
        'Développeur Front-end 💻 🎨', 
        2000,
        'Passionné de fullstack 🔐',
        2000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="bi-font-bold bi-text-transparent bi-bg-gradient-to-r bi-from-blue-500 bi-via-teal-400 bi-to-purple-500 bi-bg-clip-text bi-text-3xl md:bi-text-5xl md:bi-pb-10  lg:bi-text-6xl bi-z-10 bi-text-center bi-mx-auto bi-px-10 bi-mt-4"
    />
  );
}

export default TypingText;
