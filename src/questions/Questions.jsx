import React from 'react'
import Home from '../Home'
import './main.css'
import { useForm, useStep } from 'react-hooks-helper'
import Welcome from './Welcome'
import Appreciation from './Appreciation'
import Que1 from './Que1'
import FirmName from './FirmName'
import Email from './Email'
import Expe from './Expe'
import Category from './Category'
import Contractor from './Contractor'
import Consultant from './Consultant'
import Taneps from './Taneps'
import Que2 from './Que2'
import Register from './Register'
import Attendance from './Attendance'
import Participant from './Participant'
import Compaign from './Compaign'
import Establish from './Establish'
import Practices from './Practices'
import Que3 from './Que3'
import Training from './Training'
import Configure from './Configure'
import Notif from './Notif'
import Attach from './Attach'
import Payment from './Payment'
import Boq from './Boq'
import Secure from './Secure'
import Update from './Update'
import Submission from './Submission'
import Opening from './Opening'
import Evaluation from './Evaluation'
import Complaints from './Complaints'
import Help from './Help'
import Ability from './Ability'
import System from './System'
import Que4 from './Que4'
import Specialists from './Specialists'
import Afford from './Afford'
import Changes from './Changes'
import Compentent from './Compentent'
import Worries from './Worries'
import Power from './Power'
import Internet from './Internet'
import Difficult from './Difficult'
import Resistant from './Resistant'
import Control from './Control'
import Que5 from './Que5'
import Values from './Values'
import Costs from './Costs'
import Competitions from './Competitions'
import Fraud from './Fraud'
import Time from './Time'
import Maverick from './Maverick'
import Effeciency from './Effeciency'
import Expenses from './Expenses'
import Information from './Information'
import Uniformity from './Uniformity'
import Integrity from './Integrity'
import Que6 from './Que6'
import BidData from './BidData'
import Interoperable from './Interoperable'
import Signature from './Signature'
import Criminals from './Criminals'
import Meeting from './Meetings'
import Virtual from './Virtual'
import Electronic from './Electronic'
import Que7 from './Que7'
import ProBody from './ProBody'
import Govt from './Govt'
import Culture from './Culture'
import Mentality from './Mentality'
import Legal from './Legal'
import Opinion from './Opinion'
import Submit from './Submit'
import Introduction from './Introduction'

const steps = [
    {id: '1', Component: Introduction},
    {id: '2', Component: Welcome},
    {id: '3', Component: Appreciation},
    {id: '4', Component: Que1},
    {id: '5', Component: FirmName},
    {id: '6', Component: Email},
    {id: '7', Component: Expe},
    {id: '8', Component: Category},
    {id: '9', Component: Contractor},
    {id: '10', Component: Consultant},
    {id: '11', Component: Taneps},
    {id: '12', Component: Que2},
    {id: '13', Component: Register},
    {id: '14', Component: Attendance},
    {id: '15', Component: Participant},
    {id: '16', Component: Compaign},
    {id: '17', Component: Establish},
    {id: '18', Component: Practices},
    {id: '19', Component: Que3},
    {id: '20', Component: Training},
    {id: '21', Component: Configure},
    {id: '22', Component: Notif},
    {id: '23', Component: Attach},
    {id: '24', Component: Payment},
    {id: '25', Component: Boq},
    {id: '26', Component: Secure},
    {id: '27', Component: Update},
    {id: '28', Component: Submission},
    {id: '29', Component: Opening},
    {id: '30', Component: Meeting},
    {id: '31', Component: Evaluation},
    {id: '32', Component: Complaints},
    {id: '33', Component: Help},
    {id: '34', Component: Ability},
    {id: '35', Component: System},
    {id: '36', Component: Que4},
    {id: '37', Component: Specialists},
    {id: '38', Component: Afford},
    {id: '39', Component: Changes},
    {id: '40', Component: Compentent},
    {id: '41', Component: Worries},
    {id: '42', Component: Power},
    {id: '43', Component: Internet},
    {id: '44', Component: Difficult},
    {id: '45', Component: Resistant},
    {id: '46', Component: Control},
    {id: '47', Component: Que5},
    {id: '48', Component: Costs},
    {id: '49', Component: Values},
    {id: '50', Component: Competitions},
    {id: '51', Component: Fraud},
    {id: '52', Component: Time},
    {id: '53', Component: Maverick},
    {id: '54', Component: Effeciency},
    {id: '55', Component: Expenses},
    {id: '56', Component: Information},
    {id: '57', Component: Uniformity},
    {id: '58', Component: Integrity},
    {id: '59', Component: Que6},
    {id: '60', Component: BidData},
    {id: '61', Component: Interoperable},
    {id: '62', Component: Signature},
    {id: '63', Component: Criminals},
    {id: '64', Component: Virtual},
    {id: '65', Component: Electronic},
    {id: '66', Component: Que7},
    {id: '67', Component: ProBody},
    {id: '68', Component: Govt},
    {id: '69', Component: Culture},
    {id: '70', Component: Mentality},
    {id: '71', Component: Legal},
    {id: '72', Component: Opinion},
    {id: '73', Component: Submit}
]

const defaultData  = {
  firmname: '',
  email: '',
  experience: '',
  category: '',
  Contractor: '',
  consultant: '',
  taneps: '',
  register: '',
  attendance: '',
  participant: '',
  compaign: '',
  establish: '',
  practice: '',
  training: '',
  configure: '',
  notification: '',
  attachment: '',
  payment: '',
  boq: '',
  secure: '',
  update: '',
  submission: '',
  opening: '',
  meeting: '',
  evaluation: '',
  complaints: '',
  help: '',
  ability: '',
  system: '',
  specialist: '',
  afford: '',
  changes: '',
  compentent: '',
  worries: '',
  power:'',
  internet: '',
  difficult: '',
  resistant: '',
  control: '',
  costs: '',
  value: '',
  competitions: '',
  fraud: '',
  time: '',
  maverick: '',
  effeciency: '',
  expenses: '',
  information: '',
  uniformity:'',
  integrity: '',
  bidData: '',
  interoperable: '',
  signatures: '',
  criminals: '',
  virtual: '',
  electronic: '',
  probody: '',
  govt: '',
  culture: '',
  mentality: '',
  legal: '',
  opinion: ''

}

const Questions = () => {
    const { step, navigation, index } = useStep({ steps, initialStep: 0 })
    const { Component } = step
    const [formData, setForm] = useForm(defaultData)
    const {firmname, email, experience, category, Contractor, consultant, taneps, register, attendance, participant, compaign, establish, practice, training, configure, notification, attachment, payment, boq, secure, update, submission, opening, meeting, evaluation, complaints, help, ability, system, specialist, afford, changes, compentent, worries, power, internet, difficult, resistant, control, costs, value, competition, fraud, time, maverick, effeciency, expenses, information, uniformity, integrity, biddata, interoperable, signatures, criminals, virtual, electronic, probody, govt, culture, mentality, legal, opinion } = formData
    const { go, next, previous } = navigation
    const props = { go, next, previous, steps, formData, setForm }

    const width = (step.id/steps.length)*100

    console.log(width)
  return (
    <div className="account_body">
      <div className='progress'>
        <div className="lineer_progress" style={{width:`${width}%`}}>
          {/* {step.id} step */}
        </div>
        
      </div>
      <div className="main_body">  
        <Component {...props} />
      </div>
     </div>
  )
}

export default Questions
