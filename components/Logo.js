import React from "react";
import styled from "styled-components";

const Logo = (props) => (
	<Container>
		<SmallImage source={props.image} />
		<Title>{props.title}</Title>
	</Container>
);

export default Logo;

const Container = styled.View`
	background-color: white;
	padding: 12px 16px;
	margin-left: 0 10px;
	height: 80px;
	flex-direction: row;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
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
