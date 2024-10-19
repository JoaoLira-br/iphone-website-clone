const Burger = ({ isOpen, setIsOpen }) => {
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none"
      >
        <div className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
      </button>
    );
  };

export default Burger;