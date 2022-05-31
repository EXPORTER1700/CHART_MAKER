import React, {useState} from 'react';
import ChartComponent from "./ChartComponent";
import {useLabels} from "../hooks/useLabels";
import {useDatasets} from "../hooks/useDatasets";
import MyInput from "../ui/MyInput/MyInput";
import MyTitle from "../ui/MyTitle/MyTitle";
import MyButton from "../ui/MyButton/MyButton";
import classes from "./ChartApp.module.css"

const ChartApp = () => {
    const [xAxis, setXAxis] = useState('')
    const [yAxis, setYAxis] = useState([
        {id: 1, value: '', label: 'Y-axis', changes: false, color: '#d9552b'}
    ])
    const [type, setType] = useState('bar')
    const labels = useLabels(xAxis)
    const datasets = useDatasets(yAxis)
    const axisValueChange = (event, id) => {
        setYAxis(yAxis.map(item => item.id === id ? {...item, value: event.target.value} : item))
    }
    const axisLabelChange = (value, id) => {
        if (value.trim().length) {
            setYAxis(yAxis.map(item => item.id === id ? ({...item, label: value}) : item))
        }
    }
    const toggleAxis = (value, id) => {
        setYAxis(yAxis.map(item => item.id === id ? ({...item, changes: !item.changes}) : item))
    }
    const addYAxis = () => {
        setYAxis([...yAxis, {id: Date.now(), value: '', label: 'Y-axis', changes: false, color: '#d9552b'}])
    }
    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>Chart maker</h1>
            <label className={classes.label}>
                <MyTitle>X-Axis</MyTitle>
                <MyInput type="text" value={xAxis} onChange={event => setXAxis(event.target.value)}/>
            </label>
            {yAxis.map(item => <label className={classes.label} key={item.id}>
                {item.changes
                    ? <MyInput placeholder="Enter new title" onBlur={event => toggleAxis(event.target.value, item.id)}
                               onChange={(event) => axisLabelChange(event.target.value, item.id)}/>
                    : <MyTitle onClick={event => toggleAxis(event.target.value, item.id)}>{item.label}</MyTitle>
                }
                <MyInput value={item.value} onChange={event => axisValueChange(event, item.id)}/>
            </label>)}
            <MyButton onClick={addYAxis}>Add</MyButton>
            <form className={classes.form} onChange={event => setType(event.target.value)}>
                <label className={classes.radioLabel}>
                    Bar
                    <input className={classes.radio} type="radio" name="type" defaultChecked={type === 'bar'} value={'bar'}/>
                </label>
                <label className={classes.radioLabel}>
                    Line
                    <input className={classes.radio} type="radio" name="type" defaultChecked={type === 'line'} value={'line'}/>
                </label>
            </form>
            <ChartComponent type={type} labels={labels} datasets={datasets}/>
        </div>
    );
};

export default ChartApp;