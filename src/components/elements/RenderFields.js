import React, { useState, useEffect }  from 'react'
import Checkbox from './Checkbox';
import Boolean from './Boolean';
import Rating from './Rating';
import Email from './Email';
import Textfield from './Textfield';
import Textarea from './Textarea';
import { useForm } from 'react-hook-form'



const RenderFields = ({e, p, sub, setActiveField, setName, activeField, data, register, watch, errors}) => {

    let watchCategory = watch(e.name['category'])  

    let watchTaneps = watch(e.name['taneps']) ;
   



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

            case 'rado' :  
             return (   
                 <>
                {!watchTaneps.taneps &&                    
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
                }   
                </>                 
            )

            case 'contractor' :  
            return (   
                <>
               {watchCategory.category == 'contractor' &&                    
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
               }   
               </>                 
           )

           case 'consultant' :  
           return (   
               <>
              {watchCategory.category == 'consultant' &&                    
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
              }   
              </>                 
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
            return (
                <div>
                    <span>Invalid Field</span>
                </div>
            )
    
    }
}

 


export default RenderFields