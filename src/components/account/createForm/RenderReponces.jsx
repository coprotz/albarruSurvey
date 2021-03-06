import React from 'react'
import Charts from '../Charts'
import Respondents from '../surveys/Respondents'
import Responce1 from '../createForm/survey1/Responce1'
import { useState } from 'react'
import Responce2 from './survey2/Responce2'


const RenderReponces = ({
    setActiveResponce, 
    activeQuestionnaire, 
    responces,
    activeResponce,
    cuUser,
    go,
    setPage,
    s
}) => {
    const [respondents, setRespondents] = useState(null)
    switch(activeResponce.id){
        case 'frXPvYTjoiVsOztljAUR':
            return(
                <Responce1 
                    responces={responces}
                    setActiveResponce={setActiveResponce}
                    activeResponce={activeResponce}
                    activeQuestionnaire={activeQuestionnaire}
                    cuUser={cuUser}
                    go={go}
                    s={s}
                    respondents={respondents}
                    setRespondents={setRespondents}
                    setPage={setPage}
                />
            )
            case 'NwJpHkPpu1QYR7sm18D9':
                return(
                    <Responce2 
                        responces={responces}
                        setActiveResponce={setActiveResponce}
                        activeResponce={activeResponce}
                        activeQuestionnaire={activeQuestionnaire}
                        cuUser={cuUser}
                        go={go}
                        s={s}
                        respondents={respondents}
                        setRespondents={setRespondents}
                        setPage={setPage}
                    />
                )
            default:
                return(
                    <div>
                        <span>Invalid Page</span>
                    </div>
                )
    }

}

export default RenderReponces
