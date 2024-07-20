import styled from "styled-components";
import styles from "./style/App.module.css";

const keyboardOptions = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

export const KeyboardParent = styled.div`
    display: flex;
	align-self: stretch;
	flex-direction: column;
`

const KeyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 0.5rem;
    font-family: monospace;
    text-align: center;
`;

type KeyboardProps = {
	userLetter: string[];
	inactiveLetters: string[];
	disabled?: boolean;
	addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
	userLetter,
	inactiveLetters,
	addGuessedLetter,
	disabled = false,
}: KeyboardProps) => {
	return (
        <>
		<KeyContainer>
				{keyboardOptions.map((key) => {
					const isActive = userLetter.includes(key);
					const isInactive = inactiveLetters.includes(key);
					return (
						<button
							onClick={() => addGuessedLetter(key)}
							className={`${styles.btn} ${isActive ? styles.active : ""} ${
								isInactive ? styles.inactive : ""
							}`}
							disabled={isActive || isInactive || disabled}
							key={key}>
							{key}
						</button>
					);
				})}
			</KeyContainer>
			<p className={`${styles.enterMsg}`}>
				{"Press Enter or refresh the page to get a new word"}
			</p>
		</>
	);
};


export default Keyboard;