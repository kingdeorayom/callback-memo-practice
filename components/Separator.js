import { memo } from 'react'
import { StyleSheet, View } from 'react-native'

const Separator = () => {

    console.log('3. Separator rendered')

    return (
        <View style={styles.separator} />
    )
}

export default memo(Separator)

const styles = StyleSheet.create({

    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#808080',
        marginTop: 10,
        marginBottom: 5
    }

})