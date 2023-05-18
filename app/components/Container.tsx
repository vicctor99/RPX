"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-full mx-auto xl:px-72 md:px-10 sm:px-5 px-5">
      {children}
    </div>
  );
};

export default Container;
