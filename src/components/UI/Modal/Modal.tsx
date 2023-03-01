import React, { FC, PropsWithChildren } from "react";
import classes from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
  const modalClasses = [classes.modal];
  if (visible) {
    modalClasses.push(classes.active);
  }
  return (
    <div className={modalClasses.join(" ")} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()} className={classes.modalBlock}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
