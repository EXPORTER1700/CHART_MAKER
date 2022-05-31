import React from 'react';
import classes from "./MyTitle.module.css"

const MyTitle = ({children, ...props}) => {
    return (
        <p className={classes.p} {...props}>{children}</p>
    );
};

export default MyTitle;