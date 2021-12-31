import React from 'react'
import { useState, useEffect } from "react";

export default function Expire(props) {
    
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, props.delay)
    }, [props.delay])
    
    return visible ? <div>{props.children}</div> : <div />;
}
