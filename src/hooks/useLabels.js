import {useMemo} from "react";

export const useLabels = (axis) =>{
    const labels = useMemo(() => {
        return axis.split(',')
    }, [axis])
    return labels
}
