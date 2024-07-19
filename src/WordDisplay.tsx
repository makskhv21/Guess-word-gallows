import styled from "styled-components";

const Word = styled.div`
    display: flex;
    gap: .25em;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
`

const WordDisplay = () => {
    const testWord = "apple";
    const userLetters = ["b", "a", "t", "e", "l"];
    return(
        <Word>
            {testWord.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black"}} key={index}>
                    <span style={{visibility: userLetters.includes(letter) ? "visible" : "hidden"}}>{letter}
                    </span>
                </span>
            ))}
        </Word>
    )
};

export default WordDisplay;