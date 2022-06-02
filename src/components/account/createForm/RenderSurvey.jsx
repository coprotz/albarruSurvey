import { Questionnaires } from "../../../data/surveys"
import { useParams } from 'react-router-dom';
import Survey1 from "./survey1/Survey1"
import Survey2 from "./survey2/Survey2"
import Survey3 from "./survey3/Survey3"




const RenderSurvey = ({activeQuestionnaire, share,setShare,setActiveQuestionnaire,setActiveResponce, responces, currentQue }) => {

    const { queId } = useParams();

    const activeQue = Questionnaires?.find(q => q.id === queId)

    console.log('active', activeQuestionnaire)

    console.log('active', activeQue)

    switch(currentQue?.type || activeQue?.type){
        case '1':
            return(
                <Survey1 
                    activeQuestionnaire={activeQuestionnaire} 
                    share={share} 
                    setShare={setShare} 
                    setActiveQuestionnaire={setActiveQuestionnaire}
                    setActiveResponce={setActiveResponce}
                    responces={responces}
                    Questionnaires={Questionnaires}
                    activeQue={activeQue}
                />
            )
            case '2':
                return(
                    <Survey2 
                        activeQuestionnaire={activeQuestionnaire} 
                        share={share} 
                        setShare={setShare} 
                        setActiveQuestionnaire={setActiveQuestionnaire}
                        setActiveResponce={setActiveResponce}
                        responces={responces}
                        Questionnaires={Questionnaires}
                        activeQue={activeQue}
                    />
                )
        case '3':
            return(
                <Survey3 
                    activeQuestionnaire={activeQuestionnaire} 
                    share={share} 
                    setShare={setShare} 
                    setActiveQuestionnaire={setActiveQuestionnaire}
                    setActiveResponce={setActiveResponce}
                    responces={responces}
                    Questionnaires={Questionnaires}
                    activeQue={activeQue}
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

export default RenderSurvey