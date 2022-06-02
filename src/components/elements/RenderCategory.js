import Checkbox from "./Checkbox"

   const RenderCategory = ({e, p, setActiveField, setName, activeField, data}) => {
    if(activeField?.value == 'contractor') {
        return (
            <Checkbox 
                e={e}                
                setActiveField={setActiveField}
                setName={setName}
                activeField={activeField}
            /> 
        )
    }else if( activeField?.value === 'consultant'){
        return (
            <Checkbox 
                e={e}                
                setActiveField={setActiveField}
                setName={setName}
                activeField={activeField}
            /> 
        )
    }else 
        return undefined
    

    // console.log('e', e.name)
}




export default RenderCategory