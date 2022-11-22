import React from "react";
import styled from "styled-components";

export const Course = (props) => {
	return (
		<Container>
			<Cover>
				<Image source={props.image} />
				<Logo source={props.logo} />
				<Subtitle>{props.subtitle}</Subtitle>
				<Title>{props.title}</Title>
			</Cover>
			<Content>
				<Avatar source={props.avatar} />
				<Caption>{props.caption}</Caption>
				<Author> Taught by: {props.author}</Author>
			</Content>
		</Container>
	);
};

const Container = styled.View`
	width: 345px;
	height: 335px;
	background-color: white;
	margin: 10px 20px;
	border-radius: 14px;
`;
const Cover = styled.View`
	height: 260px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
	justify-content: flex-end;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Logo = styled.Image`
	width: 48px;
	height: 48px;
	position: absolute;
	top: 106px;
	left: 50%;
	margin-left: -24px;
`;

const Subtitle = styled.Text`
	font-size: 14px;
	font-weight: 500;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.8);
	padding-left: 20px;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: white;
	margin-top: 4px;
	margin-bottom: 20px;
	padding-left: 20px;
	width: 200px;
`;

const Content = styled.View`
	margin-left: 20px;
	justify-content: center;
	height: 75px;
`;
const Avatar = styled.Image`
	width: 32px;
	height: 32px;
	position: absolute;
	top: 20px;
	border-radius: 16px;
	margin-top: 5px;
`;
const Caption = styled.Text`
	font-size: 20px;
	font-weight: 300;
	margin-left: 50px;
`;
const Author = styled.Text`
	font-size: 12px;
	font-weight: 100;
	color: black;

	margin-left: 50px;
`;
