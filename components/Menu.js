import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MenuItem } from "./MenuItem";

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
	state = {
		top: new Animated.Value(screenHeight),
	};

	componentDidMount() {
		Animated.spring(this.state.top, {
			toValue: 0,
			useNativeDriver: false,
		}).start();
	}

	toggleMenu = () => {
		Animated.spring(this.state.top, {
			toValue: screenHeight,
		}).start();
	};

	render() {
		return (
			<AnimatedContainer style={{ top: this.state.top }}>
				<Cover>
					<Image source={require("../assets/background2.jpg")} />
					<Title>Anurag Pandey</Title>
					<Subtitle>To be Loved by All</Subtitle>
				</Cover>
				<TouchableOpacity
					onPress={this.toggleMenu}
					style={{
						position: "absolute",
						top: 120,
						left: "50%",
						marginLeft: -22,
						zIndex: 1,
					}}
				>
					<CloseView>
						<AntDesign
							name="closecircle"
							size={44}
							color="#EBEFF3"
						/>
					</CloseView>
				</TouchableOpacity>
				<Content>
					<MenuItem />
				</Content>
			</AnimatedContainer>
		);
	}
}

export default Menu;

const Container = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 10;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Cover = styled.View`
	background-color: black;
	height: 142px;
	align-items: center;
	justify-content: center;
`;
const Content = styled.View`
	height: ${screenHeight};
	color: #f0f3f5;
`;
const CloseView = styled.View`
	background-color: blue;
	height: 44px;
	width: 44px;
	border-radius: 22px;
	align-items: center;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: 600;
	color: white;
`;
const Subtitle = styled.Text`
	font-size: 13px;
	font-weight: 500;
	color: white;
	opacity: 0.5;
	margin-top: 8px;
`;

const Image = styled.Image`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
`;
