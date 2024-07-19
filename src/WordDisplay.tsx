import styled from "styled-components";

const Word = styled.div`
    display: flex;
    gap: .25em;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
`

type WordDisplayProps = {
    guessedLetters: string[];
    wordToGuess: string;
}

const WordDisplay = ({ guessedLetters, wordToGuess }: WordDisplayProps) => {    
    return(
        <Word>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black"}} key={index}>
                    <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>{letter}
                    </span>
                </span>
            ))}
        </Word>
    )
};

export default WordDisplay;