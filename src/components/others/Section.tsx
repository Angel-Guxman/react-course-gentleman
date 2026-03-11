import { useModalContext } from "../../context";
import { Modal } from "../modal/Modal";

export const SectionComponent = () => {
  const { setState } = useModalContext();
  return (
    <>
      <Modal>
        <div className="">hey soy modal</div>
      </Modal>
      <button onClick={() => setState(true)}>hola modal</button>
    </>
  );
};
