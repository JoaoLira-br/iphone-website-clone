const BurgerMenu = () => {
  return (
    <div className="absolute top-0 left-0 w-dvw h-screen bg-red-600 flex flex-col items-start justify-center z-10 ">
      <ul className="text-white text-2xl w-full h-full">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
