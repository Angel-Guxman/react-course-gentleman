import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "../../context/modal.context";

interface Props {
  children: ReactNode;
}
const eventListener = "keydown";
export const Modal = ({ children }: Props) => {
  const rootModal = document.getElementById("modal");
  const modalRef = useRef<HTMLDivElement>(null);
  const { state, setState } = useModalContext();
  const closeModal = () => {
    setState(false);
  };
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState(false);
      }
    };
    if (state) {
      document.addEventListener(eventListener, handleEsc);
    }
    return () => {
      document.removeEventListener(eventListener, handleEsc);
    };
  }, [state, setState]);

  if (!state || !rootModal) return null;
  return createPortal(
    <div className="bg-black/30 absolute inset-0" onClick={closeModal}>
      <div
        className=" bg-white text-black"
        onClick={handleContentClick}
        ref={modalRef}
      >
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    rootModal,
  );
};
