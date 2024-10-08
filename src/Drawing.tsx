import styled from "styled-components";

const DrawingContainer = styled.div`
    position: relative;
`;
const DrawingBase = styled.div`
    height: 10px;
    width: 250px;
    background: black;
    @media (max-height: 780px) {
		height: 280px;
	}
`;
const DrawingCenter = styled.div`
    height: 400px;
    width: 10px;
    background: black;
    margin-left: 120px;
`;
const DrawingArm = styled.div`
    height: 10px;
    width: 200px;
    background: black;
    margin-left: 120px;
`;
const DrawingHook = styled.div`
    height: 50px;
    width: 10px;
    background: black;
    position: absolute;
    top: 0;
    right: 0;
`;
const Head = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 10px solid black;
    position: absolute;
    top: 50px;
    right: -30px;
    @media (max-height: 780px) {
		height: 35px;
		width: 35px;
		right: -23px;
	}
`;
const Body = styled.div`
    width: 10px;
    height: 100px;
    background: black;
    position: absolute;
    top: 120px;
    right: 0;
    @media (max-height: 780px) {
		height: 80px;
		top: 105px;
	}
`;
const LeftArm = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 150px;
    right: 10px;
    rotate: 30deg;
    transform-origin: right bottomж
    @media (max-height: 780px) {
		width: 80px;
		top: 130px;
	}
`;
const RightArm = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 150px;
    right: -100px;
    rotate: -30deg;
    transform-origin: left bottom;
    @media (max-height: 780px) {
		width: 80px;
		top: 130px;
		right: -80px;
	}
`;
const LeftLeg = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 210px;
    right: 0px;
    rotate: -60deg;
    transform-origin: right bottom;
    @media (max-height: 780px) {
		width: 80px;
		top: 170px;
	}
`;
const RightLeg = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 210px;
    right: -90px;
    rotate: 60deg;
    transform-origin: left bottom;
    @media (max-height: 780px) {
		width: 80px;
		top: 170px;
		right: -70px;
	}
`;

type DrawingProps = {
    userGuesses: number;
}

const FullBody = [
	<Head />,
	<Body />,
	<LeftArm />,
	<RightArm />,
	<LeftLeg />,
	<RightLeg />,
];

const Drawing = ({userGuesses}: DrawingProps) => {
    return(
        <DrawingContainer>
            <DrawingHook />
            {FullBody.slice(0, userGuesses)}
            <DrawingArm />
            <DrawingCenter />
            <DrawingBase />
        </DrawingContainer>
    )
};

export default Drawing;