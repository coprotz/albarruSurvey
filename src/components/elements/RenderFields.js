import React, { useState, useEffect }  from 'react'
import Checkbox from './Checkbox';
import Boolean from './Boolean';
import Rating from './Rating';
import Email from './Email';
import Textfield from './Textfield';
import Textarea from './Textarea';
import { useForm } from 'react-hook-form'



const RenderFields = ({e, p, sub, setActiveField, setName, activeField, data, register, watch, errors}) => {


    let values = watch(e.name['name'])

    console.log('sub2', sub)


    let watchTaneps = watch(e.name['taneps'])


    let watchCategory = watch(e.name['category'])

    let showConsultant = e.visibleIf ? watchCategory[e.visibleIf['category']] ===  'consultant' : null;
    if(showConsultant) return

    let showContractor = e.visibleIf ? watchCategory[e.visibleIf['category']] ===  'contractor' : null;
    if(showContractor) return

    let watchValues = watch(e.name['taneps']) ;
    let showField = e.visibleIf ? watchValues[e.visibleIf['name']] === e.visibleIf['value'] : true;
            
    if(!showField) return;



    switch(e.type){
        case 'text':            
            return (
               <Textfield 
                    e={e}                 
                    setName={setName}                  
                    setActiveField={setActiveField}
                    register={register}
                    watch={watch}
                    errors={errors} 
                    sub={sub}
                    
                />                    
            )

        case 'email':
            return (                       
                <Email 
                    e={e} 
                    setActiveField={setActiveField}
                    setName={setName}
                    register={register}
                    watch={watch}
                    errors={errors} 
                    sub={sub}
                />                     
            )

        case 'boolean': 
            return (                        
                <Boolean 
                    e={e} 
                   
                    setName={setName}
                    setActiveField={setActiveField}
                    activeField={activeField}
                    register={register}
                    watch={watch}
                    errors={errors}
                    sub={sub}
                />                     
            )

        case 'radio' : 
            return (                       
               <Checkbox 
                    e={e} 
                   
                    setActiveField={setActiveField}
                    setName={setName}
                    activeField={activeField}
                    register={register}
                    watch={watch}
                    errors={errors} 
                    sub={sub}
                />                       
            )

        // case 'kido' : 
        //     return (                       
        //         <>{renderContractor(e, setName, setActiveField, activeField)}  </>                        
        //     )

        // case 'kidot' : 
        //     return (                       
        //         <>{renderConsultant(e, setName, setActiveField, activeField)}  </>                        
        //     )

        // case 'rado': 
        //     return (                       
        //          <>{renderWhyNo(e, setName, setActiveField, activeField)}  </>                 
        //     )

        case 'rating':
            return (
                <Rating 
                    e={e}                
                    setActiveField={setActiveField}
                    setName={setName}
                    register={register}
                    watch={watch}
                    errors={errors} 
                />                   
            )

        case 'comment':
            return (
                <Textarea 
                    e={e} 
                    
                    setActiveField={setActiveField}
                    setName={setName}
                    register={register}
                    watch={watch}
                    errors={errors} 
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

 


export default RenderFields