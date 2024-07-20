import { useCallback, useEffect, useState } from "react";
import { Container } from "./style/container";
import { secretWord } from "./Words";
import Drawing from "./Drawing";
import WordDisplay from "./WordDisplay";
import Keyboard, { KeyboardParent } from "./Keyboard";
import styled from "styled-components";
import Modal from "./Modal";

function generateWord() {
	return secretWord[Math.floor(Math.random() * secretWord.length)];
}

function App() {
  	const [wordToGuess, setWordToGuess] = useState(generateWord);

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const incorrectAnswers = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	// Win Conditions
	const userWon = wordToGuess
		.split("")
		.every((letter) => guessedLetters.includes(letter));
	const userLost = incorrectAnswers.length >= 6;

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || userWon || userLost) return;

			setGuessedLetters((currentLetters) => [...currentLetters, letter]);
		}, [guessedLetters, userWon, userLost]
	);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			addGuessedLetter(key);
		};
		document.addEventListener("keypress", handler);
		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (key != "Enter") return;

			e.preventDefault();
			setGuessedLetters([]);
			setWordToGuess(generateWord());
		};
		document.addEventListener("keypress", handler);
		return () => {
			document.removeEventListener("keypress", handler);
		};
	});

	const WinLose = styled.h1`
    	font-family: "Shantell Sans", cursive;
		font-size: "2rem";
		text-align: center;
    	margin: 0;
	`;

	const TopMessage = () => {
		return (
			<WinLose>
				{userWon && "You Discovered a Hidden Fruit✨"}
				{userLost && "Maybe Next Time 😔"}
			</WinLose>
		);
	};

	return (
		<>
      		<Modal />
			<Container>
				<TopMessage />
				<Drawing userGuesses={incorrectAnswers.length} />
				<WordDisplay
					guessedLetters={guessedLetters}
					wordToGuess={wordToGuess}
					reveal={userLost}
				/>
				<KeyboardParent>
					<Keyboard
						userLetter={guessedLetters.filter((letter) =>
							wordToGuess.includes(letter)
						)}
						inactiveLetters={incorrectAnswers}
						addGuessedLetter={addGuessedLetter}
						disabled={userWon || userLost}
					/>
				</KeyboardParent>
			</Container>
		</>
	);
};

export default App;