import Background from "../components/Background";
import Button from "../components/Button";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";

{
	/* The home page list the non operational elevators  */
}
{
	/* The modifier page change the  elevators status  */
}

const Modifier = ({ navigation, route }) => {
	{
		/* get the email and the ID from the last call of API   */
	}
	const id = route.params.id;
	var status = route.params.status;
	const setStatus = (id, status) => {
		changeStatus(id, status);
		navigation.navigate("Success", {
			id: id,
			status: "Active",
			onGoBack: () => this.refresh(),
		});
	};
	const changeStatus = (id, status) => {
		if (status == "Inactive" || status == "Intervention") {
			return axios
				.put(
					`https://restapisaadeddine.azurewebsites.net/api/SetElevators/${id}/Active`
				)
				.then(function (response) {
					if (response.status == 200) {
						console.log(response);
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	return (
		<View style={styles.container}>
			<Background>
				<Logo />
				<View style={styles.viewStyle}>
					<Text style={styles.headerText}>
						NON OPERATIONAL ELEVATORS ID: {id}
					</Text>
					<Text style={styles.headerText}>Status: {status} </Text>
					<Text>Do you want to activate ?</Text>
					<TouchableOpacity
						style={styles.active}
						onPress={() => setStatus(id, status)}
					>
						<Text style={styles.textbutton}> ACTIVATION </Text>
					</TouchableOpacity>
				</View>

				<View style={{ flexDirection: "row" }}>
					<View>
						<Button
							style={styles.active2}
							onPress={() =>
								navigation.reset({
									index: 0,
									routes: [{ name: "Home" }],
								})
							}
						>
							<Text style={{ color: "white" }}>HOME</Text>
						</Button>
					</View>
					<View>
						<Button
							style={styles.active2}
							onPress={() =>
								navigation.reset({
									index: 0,
									routes: [{ name: "StartScreen" }],
								})
							}
						>
							<Text style={{ color: "white", marginLeft: 3 }}>LOGOUT</Text>
						</Button>
					</View>
				</View>
			</Background>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
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
	textbutton: {
		marginVertical: 15,
		fontSize: 15,
		color: "#ecf0f1",
	},

	viewStyle: {
		flex: 1,
		marginTop: 5,
		alignItems: "center",
	},
	buttonStyle: {},
	active: {
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

export default Modifier;
