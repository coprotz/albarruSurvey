import React from 'react'
import {motion} from 'framer-motion'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  InstapaperShareButton, 
  MailruShareButton,
  MailruIcon,
  PocketShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  WorkplaceShareButton,
  FacebookMessengerIcon,
  FacebookIcon,
  InstapaperIcon,
  TelegramIcon,
  // TelegramShareButton
} from "react-share";

const Share = ({cuUser, activeQuestionnaire, setShare, userUrl}) => {

  const shareUrl = userUrl
  return (
  
             
              <div className="shared_icons">
                <WhatsappShareButton
                  url={shareUrl}>
                  <WhatsappIcon size={25} round={true}/>
                </WhatsappShareButton>
                <EmailShareButton
                  url={shareUrl} >                    
                  <EmailIcon size={25} round={true}/>
                </EmailShareButton>            
                <TwitterShareButton
                  url={shareUrl}>
                  <TwitterIcon size={25} round={true}/>
                </TwitterShareButton>
                <FacebookShareButton
                  url={shareUrl}>
                  <FacebookMessengerIcon size={25} round={true}/>
                </FacebookShareButton>
                <FacebookShareButton
                  url={shareUrl}>
                  <FacebookIcon size={25} round={true}/>
                </FacebookShareButton>
                <TelegramShareButton
                  url={shareUrl}>
                  <TelegramIcon size={25} round={true}/>
                </TelegramShareButton>

              </div>
   
  )
}

export default Share
