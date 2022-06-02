const RenderButtons = ({page, nextPage, errors, isValid}) => {
 

    if (page > 5){
        return undefined
    }else if (page < 5) {
        return (
            <div className='ques_submit'>
            <button
                disabled={!isValid}
                className='btn_submit'
                type='button'
                onClick={nextPage}
                >Next
            </button>
        </div>
        )
    }

    else {
        return (
        <div className='ques_submit'>
        <button 
            disabled={!isValid}
            className='btn_submit'
            type='submit'
           
            >Submit
        </button> 
         </div>
        )
    }
}

export default RenderButtons
