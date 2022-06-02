import { GoDiffAdded, GoTrashcan, GoChevronDown, GoCheck } from "react-icons/go";
import Checkbox from '../../elements/Checkbox';
import Boolean from '../../elements/Boolean';
import Rating from '../../elements/Rating';
import Email from '../../elements/Email';
import Textfield from '../../elements/Textfield';
import { useForm } from 'react-hook-form'
import Textarea from '../../elements/Textarea';
import { useEffect } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import { useForm } from 'react-hook-form'


export const RenderFields = ({e, watch, register, errors}) => { 

    

    let watchTaneps = watch(e.name['taneps'])

            console.log(watchTaneps)

            console.log(watchCategory)

            let showConsultant = e.visibleIf ? watchCategory[e.visibleIf['category']] ===  'consultant' : null;
            if(showConsultant) return

            let showContractor = e.visibleIf ? watchCategory[e.visibleIf['category']] ===  'contractor' : null;
            if(showContractor) return

            let watchValues = watch(e.name['taneps']) ;
            let showField = e.visibleIf ? watchValues[e.visibleIf['name']] === e.visibleIf['value'] : true;
            
            console.log(showField)
            if(!showField) return;

   

    switch(e.type){
        case 'text':            
            return (
               <Textfield e={e} register={register}/>                    
            )

        case 'email':
            return (                       
                <Email e={e} register={register}/>                     
            )

        case 'boolean': 
            return (                        
                  <Boolean e={e} register={register}/>                     
            )

        case 'radio': 
            return (                       
               <Checkbox e={e} register={register}/>                       
            )

        case 'rating':
            return (
                <Rating e={e} register={register}/>                   
            )

        case 'comment':
            return (
                <Textarea e={e} register={register}/>                   
            )
        default: 
                return(
                    <div>
                        <span>Invalid Field</span>
                    </div>
                )
    
}
}
