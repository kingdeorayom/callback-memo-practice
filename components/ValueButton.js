import { memo } from 'react'
import { Button, StyleSheet, TouchableOpacity } from 'react-native'

const ValueButton = ({ increment, decrement, color }) => {

    console.log('2. ValueButton rendered')

    return (
        <>
            <TouchableOpacity style={styles.valueButton}>
                <Button
                    title='Increment +1'
                    onPress={increment}
                    color={color}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.valueButton}>
                <Button
                    title='Decrement -1'
                    onPress={decrement}
                    color={color}
                />
            </TouchableOpacity>
        </>
    )
}

export default memo(ValueButton)

const styles = StyleSheet.create({

    valueButton: {
        marginVertical: 7.5,
        width: '65%'
    },

})