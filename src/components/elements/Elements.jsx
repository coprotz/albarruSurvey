import React, { useState, useEffect }  from 'react'
import Checkbox from './Checkbox';
import Boolean from './Boolean';
import Rating from './Rating';
import Email from './Email';
import Textfield from './Textfield';
import Textarea from './Textarea';
import { useForm } from 'react-hook-form'



const Elements = ({e, i, index, watch, errors, clearError, register, setError, test, p}) => {

    // console.log(test)


    // let watchTaneps = watch(e.name['taneps'])

    // console.log(watchTaneps)

    const [taneps, setTaneps] = useState(false)

    useEffect(() => {
        if(e.name === 'taneps' && e.value === true)
        setTaneps(true)
    }, [e.name && e.value])

    // let watchTaneps = e.name['taneps'] ;

    // console.log(taneps)
    // let showField = e.visibleIf.name === 'taneps' && e.visibleIf.value === taneps;
    
    // console.log(showField)
    // if(!showField) return e.name === 'whyNo';

    



    switch(e.type){
        case 'text':            
            return (
               <Textfield 
                    e={e} 
                    register={register} 
                    errors={errors} 
                    setError={setError} 
                    clearError={clearError} 
                    watch={watch}
                    test={test}
                    p={p}
                />                    
            )

        case 'email':
            return (                       
                <Email 
                    e={e} 
                    register={register}                            
                    errors={errors} 
                    test={test}
                />                     
            )

        case 'boolean': 
            return (                        
                <Boolean 
                    e={e} 
                    register={register} 
                    watch={watch}
                    test={test}
                />                     
            )

        case 'radio': 
            return (                       
               <Checkbox 
                    e={e} 
                    register={register} 
                    watch={watch}
                />                       
            )

        case 'rating':
            return (
                <Rating 
                    e={e} 
                    register={register}                                                     
                    errors={errors}
                    i={i} 
                    index={index}
                />                   
            )

        case 'comment':
            return (
                <Textarea 
                    e={e} 
                    register={register}
                    errors={errors} 
                    test={test}
                />                   
            )
        default: 
            return(
                <div>
                    <span>Invalid Field</span>
                </div>
            )
    
}
}

 


export default Elements
