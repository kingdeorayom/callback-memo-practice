import { memo } from 'react'
import { StyleSheet, Text } from 'react-native'

const CountView = ({ count }) => {

    console.log('1. CountView rendered')

    return (
        <Text style={styles.count}>{count}</Text>
    )
}

export default memo(CountView)

const styles = StyleSheet.create({

    count: {
        fontSize: 72,
        marginBottom: 30,
    }

})