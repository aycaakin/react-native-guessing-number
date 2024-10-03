import { Text, StyleSheet } from "react-native";
import Colors from "@/constants/colors";

function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>

}
export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.primary600,
        fontSize: 24,
        padding: 12
    },

});