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

const Share = () => {

  const shareUrl = 'https://www.albarrusurvey.com/amzuu/questionnaire'
  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
          <div className="share_inner">
              <h2>Share your questionnaire to your respondents through the following platforms;</h2>
              <div className="shared_icons">
                <WhatsappShareButton
                  url={shareUrl}                  >
                    <WhatsappIcon size={40} round={true}/>
                </WhatsappShareButton>
                <EmailShareButton>
                    <EmailIcon size={40} round={true}/>
                </EmailShareButton>
                <MailruShareButton>
                  <MailruIcon size={40} round={true}/>
                </MailruShareButton>
                <TwitterShareButton>
                  <TwitterIcon size={40} round={true}/>
                </TwitterShareButton>
                <FacebookShareButton>
                  <FacebookMessengerIcon size={40} round={true}/>
                </FacebookShareButton>
                <FacebookShareButton>
                  <FacebookIcon size={40} round={true}/>
                </FacebookShareButton>
                {/* <InstapaperShareButton>
                  <InstapaperIcon size={40} round={true}/>
                </InstapaperShareButton> */}
                <TelegramShareButton>
                  <TelegramIcon size={40} round={true}/>
                </TelegramShareButton>

              </div>
          </div>
      
    </motion.div>
  )
}

export default Share
