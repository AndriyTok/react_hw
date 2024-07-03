import { useState } from "react"

const useToogle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const toogle = () => {
        setValue(prevValue => !prevValue)
    }

    return[value, toogle] as const;
}

export default useToogle;