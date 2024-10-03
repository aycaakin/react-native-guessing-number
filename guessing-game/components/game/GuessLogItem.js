import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';

function GuessLogItem({roundNumber, guess}) {
    return (
    <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Oppent's Guess: {guess}</Text>
    </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary600,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary600,
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.50,
        shadowRadius: 3,
    },

    
});