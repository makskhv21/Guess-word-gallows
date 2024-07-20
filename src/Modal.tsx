import { useState } from "react";
import styles from "./style/App.module.css";
import ModalBody from "./ModalBody";

type ModalProps = {
	closeModal?: boolean;
};

const Modal = ({ closeModal }: ModalProps) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div>
			{openModal && <ModalBody closeModal={setOpenModal} />}
			<button
				className={`openModalBtn ${styles.modal}`}
				onClick={() => {
					setOpenModal(true);
				}}>
				⭐️
			</button>
		</div>
	);
};

export default Modal;