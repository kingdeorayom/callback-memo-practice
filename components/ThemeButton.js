import { memo } from 'react'
import { Button, TouchableOpacity, StyleSheet } from 'react-native'

const ThemeButton = ({ changeColor, color }) => {

    console.log('4. ThemeButton rendered')

    return (
        <>
            <TouchableOpacity style={styles.themeButton}>
                <Button
                    title={`Change color theme to ${color === 'crimson' ? 'darkblue' : 'crimson'}`}
                    onPress={changeColor}
                    color={color}
                />
            </TouchableOpacity>
        </>
    )
}

export default memo(ThemeButton)

const styles = StyleSheet.create({

    themeButton: {
        marginVertical: 15,
        width: '75%'
    }

})