import styled from "styled-components";

const keyboardOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export const KeyboardParent = styled.div`
    align-self: stretch;
`

const KeyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 1rem;
    font-family: monospace;
    text-align: center;
`;

const KeyButton = styled.div`
    width: 100%;
    border: 3px solid black;
    background: none;
    aspect-ratio: 1 / 1;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: black;
    &:hover,
    &:focus{
        background-color: #13EEF5;
    }
`

const Keyboard = () => {
    return(
        <KeyContainer>
            {keyboardOptions.map((key) => {
                return <KeyButton key={key}>{key}</KeyButton>
            })}
        </KeyContainer>
    )
};

export default Keyboard;