import {useMemo} from "react";

export const useDatasets = (axis) => {
    const datasets = useMemo(() => {
        return axis.map(item => ({
            label: item.label,
            data: item.value.split(','),
            borderColor: item.color,
            backgroundColor: item.color
        }))
    }, [axis])
    return datasets
}