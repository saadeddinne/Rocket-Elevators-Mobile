import React, { useState, useEffect } from "react";
// import Background from '../components/BackgroundHome'
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import {
	View,
	Text,
	ImageBackground,
	FlatList,
	TouchableOpacity,
} from "react-native";
import axios from "axios";
import { theme } from "../core/theme";
import { useIsFocused } from "@react-navigation/native";

{
	/* The home page list the non operational elevators  */
}
{
	/* The modifier page change the  elevators status  */
}
const Home = ({ navigation }) => {
	{
		/* Set the components */
	}

	const [elevators, setElevators] = useState([]);
	{
		/* every time we show the page (load or goback) we call the API and refresh the list. for this reason i use useEffect with parameters useIsFocus */
	}
	const isVisible = useIsFocused();

	useEffect(() => {
		{
			/* Call the API and make changes*/
		}
		if (isVisible) {
			axios
				.get("https://restapisaadeddine.azurewebsites.net/api/ElevatorsOff")
				.then((response) => {
					console.log(response.data);
					setElevators(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [isVisible]);
	{
		/* after success redirect user and send the specific params */
	}
	const setStatus = (id, status) => {
		navigation.navigate("Modifier", {
			id: id,
			status: status,
		});
	};
	return (
		<View style={styles.container}>
			<Background>
				<Logo />
				<Text style={{ color: "#ee5253", fontSize: 13, textAlign: "left" }}>
					{" "}
					Home
				</Text>
				<View
					style={{
						width: 80,
						borderBottomWidth: 2,
						borderBottomColor: "#ee5253",
					}}
				></View>
				<View style={styles.viewStyle}>
					<Text style={styles.headerText}>NON OPERATIONAL ELEVATORS</Text>

					<FlatList
						showsVerticalScrollIndicator={false}
						keyExtract={(elevators) => elevators.id}
						data={elevators}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={styles.list}
									onPress={() => setStatus(item.id, item.elevatorStatus)}
								>
									<Text style={styles.textbutton}>
										{" "}
										Elev: {item.id} [{item.elevatorStatus}]
									</Text>
								</TouchableOpacity>
							);
						}}
					/>
					<Button
						mode="outlined"
						style={styles.active2}
						onPress={() =>
							navigation.reset({
								index: 0,
								routes: [{ name: "StartScreen" }],
							})
						}
					>
						<Text style={{ color: "white" }}>Logout</Text>
					</Button>
				</View>
			</Background>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
	},
	textbutton: {
		marginVertical: 15,
		fontSize: 15,
		color: "#ecf0f1",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},

	viewStyle: {
		flex: 1,
		marginTop: 5,
		alignItems: "center",
	},
	button: {
		alignSelf: "stretch",
		backgroundColor: "rgba(52, 152, 219,0.30)",
		paddingTop: 15,
		paddingBottom: 15,
	},
	headerText: {
		fontSize: 14,
		color: "#E1332D",
		fontWeight: "bold",
		marginBottom: 15,
		alignItems: "center",
	},
	list: {
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: "skyblue",
		marginTop: 3,
		borderRadius: 8,
	},
	active2: {
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: "#0B64A0",
		marginTop: 3,
		borderRadius: 3,
		textColor: "white",
		margin: 5,
		width: 150,
	},
};

export default Home;
