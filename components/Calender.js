import React from "react"
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	TouchableOpacity,
	Text,
} from "react-native"
import { Card, Title, Paragraph } from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"
import { Agenda } from "react-native-calendars"

const CreatingHabit = () => {
	return (
		<Agenda
			items={{
				"2020-06-15": [
					{
						dateString: "2020-06-15",
						day: 15,
						month: 6,
						timestamp: 1592179200000,
						year: 2020,
					},
				],
				"2020-05-23": [{ name: "item 2 - any js object", height: 80 }],
				"2020-05-24": [],
				"2020-05-25": [
					{ name: "item 3 - any js object" },
					{ name: "any js object" },
				],
			}}
			// Callback that gets called when items for a certain month should be loaded (month became visible)
			loadItemsForMonth={(month) => {
				console.log("trigger items loading")
			}}
			// Callback that fires when the calendar is opened or closed
			onCalendarToggled={(calendarOpened) => {
				console.log(calendarOpened)
			}}
			// Callback that gets called on day press
			onDayPress={(day) => {
				console.log("day pressed", day)
			}}
			// Callback that gets called when day changes while scrolling agenda list
			onDayChange={(day) => {
				console.log("day changed")
			}}
			selected={"2020-06-13"}
			// Max amount of months allowed to scroll to the past. Default = 50
			pastScrollRange={50}
			// Max amount of months allowed to scroll to the future. Default = 50
			futureScrollRange={50}
			// Specify how each item should be rendered in agenda
			renderItem={(item, firstItemInDay) => {
				//console.log("as", item)
				return <View />
			}}
			// Specify how each date should be rendered. day can be undefined if the item is not first in that day.
			renderDay={(day, item) => {
				console.log("my first", item)
				return (
					<View>
						<Text>hello</Text>
					</View>
				)
			}}
			// Specify what should be rendered instead of ActivityIndicator
			renderEmptyData={() => {
				return (
					<View>
						<Text>NO Habits for the day</Text>
					</View>
				)
			}}
			// Specify your item comparison function for increased performance
			rowHasChanged={(r1, r2) => {
				return r1.text !== r2.text
			}}
			// By default, agenda dates are marked if they have at least one item, but you can override this if needed

			theme={{
				agendaDayTextColor: "yellow",
				agendaDayNumColor: "green",
				agendaTodayColor: "red",
				agendaKnobColor: "blue",
			}}
		/>
	)
}

export default CreatingHabit
