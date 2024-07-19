import styled from "styled-components";

const WinLose = styled.h1`
    font-size: "2rem";
    text-align: center;
`;

const TopMessage = () => {
    return(
        <WinLose>WIN | LOSE</WinLose>
    )
}

export default TopMessage;