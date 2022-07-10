import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	const addGoalHandler = enteredGoalText => {
		setCourseGoals(prevState => [
			...prevState,
			{ text: enteredGoalText, id: prevState.length + 1 },
		]);
		endAddGoalHandler();
	};

	const deleteGoalHandler = id => {
		setCourseGoals(prevState => prevState.filter(goal => goal.id !== id));
	};

	return (
		<View style={styles.appContainer}>
			<Button
				title='Add New Goal'
				color='#5e0acc'
				onPress={startAddGoalHandler}
			/>

			{modalIsVisible && (
				<GoalInput
					onAddGoal={addGoalHandler}
					visible={modalIsVisible}
					onCancel={endAddGoalHandler}
				/>
			)}

			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					keyExtractor={item => item.id}
					renderItem={itemData => (
						<GoalItem
							text={itemData.item.text}
							id={itemData.item.id}
							onDeleteItem={deleteGoalHandler}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
	},
});
