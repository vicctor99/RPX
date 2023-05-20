"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-full mx-auto px-5 md:px-28 lg:px-32 xl:px-72">
      {children}
    </div>
  );
};

export default Container;
