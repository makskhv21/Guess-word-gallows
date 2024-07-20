import styles from "./style/App.module.css";

const ModalBody = ({ closeModal }: {closeModal: any}) => {	
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
						We’re delighted to announce that this year’s 
						Fruit Harvest Festival is happening this month! 
						The town square is being decorated and individual 
						booths are being set up for everyone to display their homegrown fruits.
						Sadly, the recent winds blew the signs off every booth, leaving us unable 
						to identify the fruits. Can you help us solve this puzzle and ensure the festival's success?
					</p>
					<p>🫐 🍎 🥝 🥕 🍍 🍋 🍌 🍉 🥭 🍐 🍊 🍇 🍓 🥥 🥒 🥑</p>
				</div>
			</div>
		</div>
	);
};

export default ModalBody;