import React from "react";
import styled from "styled-components";

const Card = (props) => (
	<Container>
		<Cover>
			<Image source={props.image} />
			<Title>{props.title}</Title>
		</Cover>
		<Content>
			<Logo source={props.logo} />
			<Wrapper>
				<Caption>{props.caption} </Caption>
				<Subtitle>{props.subtitle} </Subtitle>
			</Wrapper>
		</Content>
	</Container>
);

export default Card;

const Container = styled.View`
	height: 285px;
	width: 280px;
	background-color: white;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	margin-top: 20px;
	margin-left: 20px;
	border-radius: 14px;
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
	overflow: hidden;
`;

const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;
const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
	margin-top: 20px;
	margin-left: 20px;
	color: white;
	width: 170px;
`;
const Image = styled.Image`
	height: 100%;
	width: 100%;
	position: absolute;
	
`;
const Content = styled.View`
	padding-left: 20px;
	flex-direction: row;
	align-items: center;
	height: 80px;
`;
const Logo = styled.Image`
	height: 40px;
	width: 44px;
`;
const Caption = styled.Text`
	font-size: 20px;
	font-weight: 600;
	color: #3c4560;
`;

const Subtitle = styled.Text`
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	color: #b8bece;
	margin-top: 4px;
`;

const Wrapper = styled.View`
	padding-left: 10px;
`;
