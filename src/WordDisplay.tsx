import styled from "styled-components";

const Word = styled.div`
    display: flex;
    gap: .25em;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
    @media (max-height: 780px) {
		font-size: 4rem;
	}
`;

type WordDisplayProps = {
	guessedLetters: string[];
	wordToGuess: string;
	reveal?: boolean;
};

const WordDisplay = ({
	guessedLetters,
	wordToGuess,
	reveal = false,
}: WordDisplayProps) => {
	return (
		<Word>
			{wordToGuess.split("").map((letter, index) => (
				<span style={{ borderBottom: ".1em solid black" }} key={index}>
					<span
						style={{
							visibility:
								guessedLetters.includes(letter) || reveal
									? "visible"
									: "hidden",
							color:
								!guessedLetters.includes(letter) && reveal ? "red" : "black",
						}}>
						{letter}
					</span>
				</span>
			))}
		</Word>
	);
};

export default WordDisplay;