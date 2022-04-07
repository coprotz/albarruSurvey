import React from 'react'
import {motion} from 'framer-motion'
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton, 
  MailruShareButton,
  PocketShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton
} from "react-share";

const Share = () => {

  const shareUrl = 'localhost:3000/amzuu/questionnaire'
  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
          <div className="share_inner">
              <h2>Share your questionnaire to your respondents</h2>
              <div className="shared_icons">
                <WhatsappShareButton
                  url={shareUrl}                  >
                    <WhatsappIcon size={40} round={true}/>
                </WhatsappShareButton>

              </div>
          </div>
      
    </motion.div>
  )
}

export default Share
