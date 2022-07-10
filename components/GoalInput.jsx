import { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	};

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Your course goal!'
					onChangeText={text => setEnteredGoalText(text)}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} />
					</View>

					<View style={styles.button}>
						<Button title='Cancel' onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
		padding: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},

	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '100%',
		padding: 10,
	},

	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},

	button: {
		width: 100,
		marginHorizontal: 8,
	},
});

export default GoalInput;
