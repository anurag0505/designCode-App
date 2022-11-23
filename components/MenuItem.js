import React from "react";
import styled from "styled-components";
import {
	Entypo,
	Octicons,
	AntDesign,
	MaterialCommunityIcons,
	MaterialIcons,
	FontAwesome5,
	Ionicons,
} from "@expo/vector-icons";

export const MenuItem = (Props) => {
	return (
		<Container>
			<Cover>
				<Entypo name="controller-play" size={32} color="blue" />
				<Wrapper>
					<Title>Accounts</Title>
					<Subtitle>settings</Subtitle>
				</Wrapper>
			</Cover>
			<Cover>
				<MaterialIcons name="payments" size={28} color="blue" />
				<Wrapper>
					<Title>Billings</Title>
					<Subtitle>Payment</Subtitle>
				</Wrapper>
			</Cover>
			<Cover>
				<AntDesign name="star" size={24} color="blue" />
				<Wrapper>
					<Title>Learn React </Title>
					<Subtitle>Build this App</Subtitle>
				</Wrapper>
			</Cover>
			<Cover>
				<MaterialCommunityIcons name="logout" size={28} color="blue" />
				<Wrapper>
					<Title>Logout</Title>
					<Subtitle>See You soon</Subtitle>
				</Wrapper>
			</Cover>
			<Cover>
				<Ionicons name="arrow-undo" size={24} color="blue" />
				<Wrapper>
					<Title>Mode</Title>
					<Subtitle>Light Or Dark</Subtitle>
				</Wrapper>
			</Cover>
		</Container>
	);
};

const Container = styled.View`
	width: 100%;
	height: 100%;
	padding-left: 40px;
	flex-direction: column;
	margin-top: 50px;
`;

const Cover = styled.View`
	flex-direction: column;
	height: 50px;
	margin-top: 35px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: black;
	opacity: 0.7;
`;
const Subtitle = styled.Text`
	font-size: 16px;
	font-weight: 400;
	color: black;
	opacity: 0.5;
	margin-bottom: 5px;
`;

const Wrapper = styled.View`
	padding-left: 20px;
`;
