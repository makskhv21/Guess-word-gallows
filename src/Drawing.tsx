import styled from "styled-components";

const DrawingContainerStyle = styled.div`
    position: relative;
`;

const DrawingBaseStyle = styled.div`
    height: 10px;
    width: 250px;
    background: black;
`;

const DrawingCenterStyle = styled.div`
    height: 400px;
    width: 10px;
    background: black;
    margin-left: 120px;
`
const DrawingArmStyle = styled.div`
    height: 10px;
    width: 200px;
    background: black;
    margin-left: 120px;
`
const DrawingHookStyle = styled.div`
    height: 50px;
    width: 10px;
    background: black;
    position: absolute;
    top: 0;
    right: 0;
`

const Drawing = () => {
    return(
    <DrawingContainerStyle>
        <DrawingHookStyle />
        <DrawingArmStyle />
        <DrawingCenterStyle />
        <DrawingBaseStyle />
    </DrawingContainerStyle>
    )
};

export default Drawing;