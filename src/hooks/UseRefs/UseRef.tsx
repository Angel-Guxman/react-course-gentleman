import { useRef, useState } from "react";

export const BookReader = () => {
  const currentPageRef = useRef(1);
  let si = 1;
  const [hey, setHey] = useState(1);
  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(currentPageRef.current);
    si += 1;
    console.log(si);
  };
  const previusPage = () => {
    if (currentPageRef.current === 1) return;
    currentPageRef.current -= 1;
    console.log(currentPageRef.current);
    si -= 1;
    console.log(si);
  };
  const goToPage = (page: number) => {
    if (page < 1) return;
    currentPageRef.current = page;
    console.log(currentPageRef.current);
    si = 50;
    console.log(si);
    setHey(50);
  };
  return (
    <div className="">
      <span>si</span>
      <button onClick={nextPage}>pagina siguiente</button>
      <button onClick={previusPage}>pagina anterior</button>
      <button onClick={() => goToPage(50)}>pagina 50</button>
    </div>
  );
};
