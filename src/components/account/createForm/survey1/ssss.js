const PageDisplay = () => {
    if(page === 0){
      return <Welcome {...props}/>
    }else if(page === 1){
      return <FirmDetails {...props}/>
    }else if(page === 2){
      return <Establishment {...props}/>
    }else if(page === 3){
      return <Implementation {...props}/>
    }else if(page === 4){
      return <Challenges {...props}/>
    }else if (page === 5){
      return <Benefits />
    }else if(page === 6){
      return <ThewayForward {...props}/>    
    }
    
    
  }