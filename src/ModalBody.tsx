import styles from "./App.module.css";

const ModalBody = ({ closeModal }) => {
	return (
		<div className={`${styles.modalBackground}`}>
			<div className={`${styles.modalContainer}`}>
				<div className={`${styles.modalCloseBtn}`}>
					<button
						className={`${styles.modalCloseX}`}
						onClick={() => closeModal(false)}>
						{" "}
						X{" "}
					</button>
				</div>
				<div className={`${styles.modalTitle}`}>
					<h1>Fruit Harvest Festival</h1>
				</div>
				<div className={`${styles.modalBody}`}>
					<p>
						We're excited to announce this years Fruit Harvest Festival is
						taking place this month! The town square is being prepped with
						decorations and individual booths so everyone can showcase their
						home grown fruit.
						<i> Unfortunately</i>, the recent winds caused the signs to fly off
						every booth and now we can't figure out which fruit is which!
					</p>
					<p>This is where we need your help!</p>
					<p>
						Can you help solve as many mystery fruits as you can so we can have
						a successful Fruit Harvest Festival? The town is counting on you!
					</p>
					<p>🥝 🥕 🥥 🥒 🥑 🍍 🥭 🫐 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓</p>
				</div>
			</div>
		</div>
	);
};

export default ModalBody;