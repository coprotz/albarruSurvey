import { divide } from "lodash";
import React from "react";
import { useEffect } from "react";
import useStorage from "../../hook/useStorage";
import './progress.css'

const ProgressBar = ({file, setFile}) => {

    const { url, perc } = useStorage(file)
   useEffect(() => {
        if (url) {
            setFile(null)
        }
   },[url, setFile])

    return (
        <div className="progress-bar" style={{width: perc + '%'}}></div>
    )
}

export default ProgressBar;