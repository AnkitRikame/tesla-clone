import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
	return (
		<Wrap bgImage={props.backgroundImg}>
			<Fade bottom>
				<ItemText>
					<h1 style={{fontWeight:"500"}}>{props.title}</h1>
					<p>{props.description}</p>
				</ItemText>
			</Fade>

			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{props.leftBtnText}</LeftButton>

						{props.rightBtnText && (
							<RightButton>{props.rightBtnText}</RightButton>
						)}
					</ButtonGroup>
				</Fade>
				<DownArrow src="./images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
};

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	// background-image: url('/images/model-s.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: ${(props) => `url("images/${props.bgImage}")`};
`

const ItemText = styled.div`
	padding-top: 15vh;
    font-size:1.2rem;
	text-align: center;
`
const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
    font-weight:700;
`

const RightButton = styled(LeftButton)`
	background: white;
	opacity: 0.75;
	color: black;
`

const DownArrow = styled.img`
	height: 40px;
    width:100px;
	filter:invert(1);
	display: block;
	margin: auto;
    margin-bottom:20px;
	overflow-x: hidden;
	animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`
