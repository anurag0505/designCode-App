import { StatusBar } from "expo-status-bar";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Ionicons } from "@expo/vector-icons";
import { LogoNew } from "./components/LogoNew";
import { Course } from "./components/Course";
import Menu from "./components/Menu";

export default function App() {
	return (
		<Container>
			<Menu />
			<SafeAreaView>
				<ScrollView>
					<TitleBar>
						<Avatar
							source={require("./assets/avatar-default.jpg")}
						/>
						<Title>Welcome Back,</Title>
						<Name>Anurag</Name>
						<Ionicons
							name="notifications"
							size={24}
							color="#4775f2"
							style={{ position: "absolute", right: 20, top: 5 }}
						/>
					</TitleBar>
					<ScrollView
						horizontal={true}
						style={{ paddingTop: 30 }}
						showsHorizontalScrollIndicator={false}
					>
						{Logos.map((logo, index) => (
							<LogoNew
								key={index}
								image={logo.image}
								title={logo.title}
							/>
						))}
					</ScrollView>
					<Subtitle> Continue learning </Subtitle>
					<ScrollView
						horizontal={true}
						style={{ paddingBottom: 30 }}
						showsHorizontalScrollIndicator={false}
					>
						{Cards.map((card, index) => (
							<Card
								key={index}
								title={card.title}
								image={card.image}
								caption={card.caption}
								logo={card.logo}
								subtitle={card.subtitle}
							/>
						))}
					</ScrollView>
					<Subtitle>Popular Courses</Subtitle>
					{Courses.map((course, index) => (
						<Course
							key={index}
							image={course.image}
							caption={course.caption}
							logo={course.logo}
							subtitle={course.subtitle}
							title={course.title}
							author={course.author}
							avatar={course.avatar}
						/>
					))}
				</ScrollView>
			</SafeAreaView>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
`;

const Title = styled.Text`
	font-size: 16px;
	color: #b8bece;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background-color: black;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;
const Subtitle = styled.Text`
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	color: #b8bece;
	margin-top: 20px;
	margin-left: 20px;
`;

const Logos = [
	{
		image: require("./assets/logo-framerx.png"),
		title: "Framer X",
	},
	{
		image: require("./assets/logo-figma.png"),
		title: "Figma",
	},
	{
		image: require("./assets/logo-studio.png"),
		title: "Studio",
	},
	{
		image: require("./assets/logo-react.png"),
		title: "React",
	},
	{
		image: require("./assets/logo-swift.png"),
		title: "Swift",
	},
	{
		image: require("./assets/logo-sketch.png"),
		title: "Sketch",
	},
];

const Cards = [
	{
		title: "React Native for Designers",
		image: require("./assets/background11.jpg"),
		caption: "React Native",
		logo: require("./assets/logo-react.png"),
		subtitle: "1 of 12 sections",
	},

	{
		title: "Styled Components ",
		image: require("./assets/background12.jpg"),
		caption: "React Native",
		logo: require("./assets/logo-react.png"),
		subtitle: "2 of 12 sections",
	},
	{
		title: "Arrays & Loops",
		image: require("./assets/background13.jpg"),
		caption: "React Native",
		logo: require("./assets/logo-react.png"),
		subtitle: "3 of 12 sections",
	},
	{
		title: "Props and Static Data",
		image: require("./assets/background14.jpg"),
		caption: "React Native",
		logo: require("./assets/logo-react.png"),
		subtitle: "4 of 12 sections",
	},
];

const Courses = [
	{
		image: require("./assets/background15.jpg"),
		logo: require("./assets/logo-studio.png"),
		title: "Prototype in Invasion Studio",
		subtitle: "10 Section",
		author: "Sandeep Pandey",
		avatar: require("./assets/avatar.jpg"),
		caption: "Delisting of Commodities",
	},
	{
		image: require("./assets/background16.jpg"),
		logo: require("./assets/logo-swift.png"),
		title: "Prototype in Invasion Studio",
		subtitle: "11 Section",
		author: "Mark Waugh",
		avatar: require("./assets/avatar.jpg"),
		caption: "Passing Data on React Native",
	},
	{
		image: require("./assets/background14.jpg"),
		logo: require("./assets/logo-vue.png"),
		title: "GraphQL with Contentful",
		subtitle: "12 Section",
		author: "Sachin Tendulkar",
		avatar: require("./assets/avatar.jpg"),
		caption: "Fetch Api Data ",
	},
	{
		image: require("./assets/background13.jpg"),
		logo: require("./assets/logo-xcode.png"),
		title: "Prototype in Invasion Studio",
		subtitle: "13 Section",
		author: "Sadagopan Ramesh",
		avatar: require("./assets/avatar.jpg"),
		caption: "HTML & Markdown",
	},
];
