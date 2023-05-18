"use client";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="rounded-full text-lg max-w-fit py-2 px-8 bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
      {name}
    </button>
  );
};

export default Button;
