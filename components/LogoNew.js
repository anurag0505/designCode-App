import React from "react";

import styled, { Styled } from "styled-components";

export const LogoNew = (props) => {
	return (
		<Container>
			<SmallImage source={props.image} resizeMode="contain" />
			<Title>{props.title}</Title>
		</Container>
	);
};

const Container = styled.View`
	background-color: white;
	padding: 12px 16px;
	height: 60px;
	flex-direction: row;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	margin: 3px 8px;
	
	flex-direction: row;
`;

const SmallImage = styled.Image`
	width: 36px;
	height: 36px;
`;
const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
	padding-left: 20px;
`;
