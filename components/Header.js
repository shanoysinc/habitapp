import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Appbar } from "react-native-paper"
const Header = () => {
	return (
		<Appbar.Header>
			<Appbar.Content title="Habita" subtitle={"Subtitle"} />
		</Appbar.Header>
	)
}

export default Header
