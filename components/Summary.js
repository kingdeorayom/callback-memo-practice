import { memo } from "react"
import { Text } from "react-native"

const Summary = memo(({ color }) => {

    // for (let i = 0; i <= 10000000; i++) { }

    console.log('5. Summary rendered')

    return (
        <Text style={{ color: color }}>
            I am a component that will only re-render if you change the color theme because I accept the 'color' state as prop and that because I am handled by React.memo().{"\n\n"}I don't accept the 'count' state used in the value of count text component so I won't render when the value is incremented or decremented.
        </Text>
    )
})

export default memo(Summary)