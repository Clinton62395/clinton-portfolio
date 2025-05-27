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
      className=" bi-text-6xl bi-font-bold bi-text-transparent bi-bg-gradient-to-r bi-from-blue-500 bi-via-teal-400 bi-to-purple-500 bi-bg-clip-text "
    />
  );
}

export default TypingText;
