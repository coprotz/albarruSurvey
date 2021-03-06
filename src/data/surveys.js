
export const Questionnaires = [
{
    userId: 'NDhSrMAjcFcLO6m8YWGhuUYP2dl2',
    type:'1',
    id: 'frXPvYTjoiVsOztljAUR',
    title: "Framework for Adoption of a Full-fledged e-Procurement System on Public Construction Projects in Tanzania",
    description: "My name is Ally Ally undertakes Phd Studies at Ardhi University. I am doing a study that aims at establishing a comprehensive and detailed findings on how the e-Procurement system was adopted in Tanzania, what level reached, what pending changes and new requirements needed and how a full-pledged e-Procurement automation system can be adopted on Public Construction Projects.\n\n My supervisors are Dr. Kikwasi and Dr. Monko. I would like you to be one of the key respondents in completing my Questionnaire. Thank you in advance.",
    pages: [
     {
       pageId:'1',
      name: "page1",
      title: "Tell something about your firm",
      description: "Firm's Particulars",
      elements: [
       {
        type: "text",
        name: 'fname',
        que_id:"fName",
        title: "Name of your firm",
        placeholder: 'Type your answer here',
        value: '',
        validation: {required :'Firm name is required'}, 
           
       },
       {
        type: "email",
        name: 'fEmail',
        que_id:"fEmail",
        title: "Your Email",
        placeholder: 'name@example.com',
        value: "",
        validation: {required :'Email adddress is invalid'},  

      
       },
       {
        type: "radio",
        name: "experience",
        title: "Your year(s) of firm experience",
        value: '',
        que_id:"experience",
        validation: {required :'Please choose firm experience'},   
     
        choices: [
         {
            que_id:'less5yrs',
          value: "less5yrs",
          label: "Less than 5 years",
          name: "experience",
         },
         {
            que_id:'bwt5_10',
          value: "bwt5_10",
          label: "Between 5 and 10 years",
          name: "experience",
         },
         {
            que_id:'abv10yrs',
          value: "abv10yrs",
          label: "More than 10 years",
          name: "experience",
         }
        ]
       },
       {
        type: "radio",
        name: "category",
        title: "Category of your firm",
        value: '',
        que_id: "category",       
        validation: {required :'Please choose category'}, 
  
        choices: [
         {
          value: "contractor",
          label: "Contractor",
          name: "category",
         },
         {
          value: "consultant",
          label: "Consultant",
          name: "category",
         },
         {
          value: "supplier",
          label: "Supplier",
          name: "category",
         }
        ]
       },
       {
        type: "contractor",
        name: "contractor",
        visibleIf: { name: 'category', value: 'contractor'},
        title: "Contractor",
        que_id:"contractor",
        value: "",     
        choices: [
         {
          value: "civil",
          label: "Civil",
          name: "contractor",
         },
         {
          value: "building",
          label: "Building",
          name: "contractor",
         },
         {
          value: "civil_building",
          label: "Civil and Building",
          name: "contractor",
         }
        ]
       },
       {
        type: "consultant",
        name: "consultant",
        visibleIf: { name: 'category', value: 'consultant'},
        title: "Consultant",
        value: "",
        que_id:"consultant",    
        choices: [
         {
          value: "architect",
          label: "Architect",
          name: "consultant",
         },
         {
          value: "qs",
          label: "Quantity Surveying",
          name: "consultant",
         },
         {
          value: "engineer",
          label: "Engineering",
          name: "consultant",
         }
        ]
       },
       {
        type: "boolean",
        name: "taneps",
        title: "Is your firm registered with TANeps?",
        value:true,
        que_id:"taneps"
       
       },
       {
        type: "rado",
        name: "whyNo",
        visibleIf:{ name: 'taneps', value: false},
        title: "Why your firm is not registered with TANeps?",
        value: "",
        que_id: "whyno",
        choices: [
         {
          value: "dont_know",
          label: "We don't know it",
          name: "whyNo",
        
         },
         {
          value: "not_ready",
          label: "We are not ready for now",
          name: "whyNo",
         },
         {
          value: "no_reason",
          label: "We don't have a genuine reason",
          name: "whyNo",
         }
        ],
        "hasOther": true
       }
      ],
      
     },
     {
      pageId:'2',
      name: "page2",
      title: "Establishment and implementation of e-Procurement system in the Country by TANeps",
      description: "Please rate how your firm's participation during the establishment of e-Procurememt system",
      visibleIf: { name: 'taneps', value: true},
      elements: [
       {
        type: "rating",
        name: "question7",
        que_id:"question7",
        title: "How is your firm attendance during the stakeholders??? meeting by TANeps before launching the system?",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        value:'',
       },
      
       {
        type: "rating",
        name: "question8",
        title: "How do you see the training and awareness campaign done by TANeps toward the e-Procurement system practices?",
        required: true,
        minRateDescription: "Poor",
        que_id:"question8",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question9",
        title: "How is your firm participation in the establishment of e-Procurement system ?",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question9",
        value:'',
       },
       {
        type: "rating",
        name: "question10",
        title: "How does your firm participate in tendering through TANeps ?",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question10",
        value:'',
       },
       {
        type: "rating",
        name: "question11",
        title: "How do you see the practices of the e-Procurement system on the public construction projects by the Construction stakeholders?",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question11",
        value:'',
       }
      ],
      
     },
     {
      pageId:'3',
      name: "page3",
      visibleIf: { name: 'taneps', value: true},
      elements: [
       {
        type: "rating",
        name: "question12",
        title: "Availability of user training documentation in the system",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question12",
        value:'',
       },
       {
        type: "rating",
        name: "question13",
        title: "System is easy to configure and use",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question13",
        value:'',
       },
       {
        type: "rating",
        name: "question14",
        title: "Online bid advertisement, bidder gets instant notification once the new bid has been uploaded into the system",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question14",
        value:'',
       },
       {
        type: "rating",
        name: "question15",
        title: "Online registration, including putting all relevant certificate numbers and no attachment are needed",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question15",
        value:'',
       },
       {
        type: "rating",
        name: "question16",
        title: "Online payments in purchasing of bids",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question16",
        value:'',
       },
       {
        type: "rating",
        name: "question17",
        title: "Fill electronic BOQ, forms, etc and no download and upload of hardcopies",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question17",
        value:'',
       },
       {
        type: "rating",
        name: "question18",
        title: "Secure the bid by putting digital signature and stamp",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question18",
        value:'',
       },
       {
        type: "rating",
        name: "question19",
        title: "Bidder can edit/update bids after submission but before the deadline of the bid submission",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question19",
        value:'',
       },
       {
        type: "rating",
        name: "question20",
        title: "Electronic submission of bid",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question20",
        value:'',
       },
       {
        type: "rating",
        name: "question21",
        title: "Online bid opening as the bidder gets notification through the secured email on the results of the bid opening in a few minutes after the bid deadline passes",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question21",
        value:'',
       },
       {
        type: "rating",
        name: "question22",
        title: "Bidders can attend online meeting during the opeing of bid",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question22",
        value:'',
       },
       {
        type: "rating",
        name: "question23",
        title: "Online bid evaluation",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question23",
        value:'',
       },
       {
        type: "rating",
        name: "question24",
        title: "Able to give complaints before final awarding",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question24",
        value:'',
       },
       {
        type: "rating",
        name: "question25",
        title: "Online help features",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        que_id:"question25",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question26",
        title: "Ability of search information regarding tenders, awards, bid openings",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        que_id:"question26",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question27",
        title: "The system is fully integrating with other stakeholders including banks, NIDA, TRA, BRELA, CRB, AQRB, ERB, Ministry of Trade (Licenses issued)",
        required: true,
        minRateDescription: "Poor",
        maxRateDescription: "Excellent",
        validation: {required :'Please choose one'}, 
        que_id:"question27",
        value:'',
       },
   
      ],
      title: "In the implementation of e-Procurement system through TANeps",
      description: "Please rate the extent of the following functions available in the TANeps"
     },
     {
      pageId:'4',
      name: "page4",
      visibleIf: { name: 'taneps', value: true},
      elements: [
       {
        type: "rating",
        name: "question29",
        title: "Lack of IT specialists",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question29",
        value:'',
       },
       {
        type: "rating",
        name: "question30",
        title: "My firm fails to afford cost implications of the system",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question30",
        value:'',
       },
       {
        type: "rating",
        name: "question31",
        title: "My firm fails to afford cost implications of the system",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question31",
        value:'',
       },
       {
        type: "rating",
        name: "question32",
        title: "My organization culture and top management resist changing into technological world",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question32",
        value:'',
       },
       {
        type: "rating",
        name: "question33",
        title: "Lack of competent human resource critically to manage e-Procurement system in my firm",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question33",
        value:'',
       },
       {
        type: "rating",
        name: "question34",
        title: "My firm worries on the security and safety of e-Procurement system",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question34",
        value:'',
       },
       {
        type: "rating",
        name: "question35",
        title: "Lack of reliable power supply",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question35",
        value:'',
       },
       {
        type: "rating",
        name: "question36",
        title: "Lack of reliable internet connections",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question36",
        value:'',
       },
       {
        type: "rating",
        name: "question37",
        title: "System is too difficult to understand/ to use",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question37",
        value:'',
       },
       {
        type: "rating",
        name: "question38",
        title: "Internal resistance to change",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question38",
        value:'',
       },
       {
        type: "rating",
        name: "question39",
        title: "Difficult to pay for bidding docs through control number",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question39",
        value:'',
       }
      ],
      title: "Challenges on the e-Procurement system implementation",
      description: "Please rate the challenges that your firm faces."
     },
     {
      pageId:'5',
      name: "page5",
      visibleIf: { name: 'taneps', value: true},
      elements: [
       {
        type: "rating",
        name: "question40",
        title: "Reduces procurement and transaction costs",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question40",
        value:'',
       },
       {
        type: "rating",
        name: "question41",
        title: "Enhancesvaluefor money",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question41",
        value:'',
       },
       {
        type: "rating",
        name: "question42",
        title: "Achieves fair competition",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question42",
        value:'',
       },
       {
        type: "rating",
        name: "question43",
        title: "Reduces fraud and corruptions in the procurement process",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question43",
        value:'',
       },
       {
        type: "rating",
        name: "question44",
        title: "Reduces procurement time",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question44",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question45",
        title: "Reduces maverick buying",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question45",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question46",
        title: "Improves work efficiency in the procurement process",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question46",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question47",
        title: "Better tracking procurement expenses",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question47",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question48",
        title: "Reduces cost of information",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question48",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question49",
        title: "Introduces uniformity into the procurement system",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question49",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question50",
        title: "Promotes integrity in public procurement.",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question50",
        validation: {required :'Please choose one'}, 
        value:'',
       },
     
      ],
      title: "Benefits of e-Procurement system implementation to your firm",
      "description": "Please rate how do your firm benefit from implementation of the current  e-Procurement system"
     },
     {
      pageId:'6',
      name: "page6",
      visibleIf: { name: 'taneps', value: true},
      elements: [
       {
        type: "rating",
        name: "question52",
        title: "All professional bodies should be well equipped with the IT infrastructures",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question52",
        value:'',
       },
       {
        type: "rating",
        name: "question53",
        title: "The government should support all professional bodies and other construction stakeholders to build system integration to the TANeps",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question53",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question54",
        title: "The professional bodies should change the organizational culture to the technological world",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question54",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question55",
        title: "The firms should change mentality to adapt the new technology within their firms",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        que_id:"question55",
        validation: {required :'Please choose one'}, 
        value:'',
       },
       {
        type: "rating",
        name: "question56",
        title: "The government should improve the legal frameworks to provide conclusive environment for full-fledged e-Procurement system",
        required: true,
        minRateDescription: "Strong Disagree",
        maxRateDescription: "Strong Agree",
        validation: {required :'Please choose one'}, 
        que_id:"question56",
        value:'',
       },
       {
        type: "comment",
        name: "comment",
        placeholder: 'Type your answer',
        title: "With your own words what is your general recommendations/ opinion/ editions/ comments/etc in establishing the full-fledged e-procurement system on public construction projects",
        required: true,
        que_id:"comment",
        validation: {required :'Please write something'}, 
        value:'',
       }
      ],
      title: "The way forward: What can you advise on the best way to achieve full-fledged e-Procurement system (Every thing to be done online - no paperwork) on the public construction projects?"
     }
    ]
   },
   {
    userId: 'vg2EyYjr1OegePahdyVFTzP7Aqa2',
    id: 'NwJpHkPpu1QYR7sm18D9',
    type:'2',
    title: "Sensa",
    description: "My name is Achi, please free to respond to my survey",
    pages: [
      {
        pageId:'1',
       name: "page1",
       title: "Tell something about you",
       description: "Respondent's Particulars",
       elements: [
        {
         type: "text",
         name: 'fname',
         que_id:"fName",
         title: "Name of your full name",
         placeholder: 'Type your answer here',
         value: "",
         validation: {required :'Full name is required'}, 
            
        },
        {
         type: "email",
         name: 'fEmail',
         que_id:"fEmail",
         title: "Your Email",
         placeholder: 'name@example.com',
         value: "",
         validation: {required :'Email adddress is invalid'},  
 
       
        },
      
         {
          type: "radio",
          name: "age",
          title: "Your Age",
          value: '',
          que_id:"age",
          validation: {required :'Please choose age'},   
       
          choices: [
           {
              que_id:'under18',
            value: "under18",
            label: "Under 18",
            name: "age",
           },
           {
              que_id:'btw18_35',
            value: "btw18_35",
            label: "Between 18 and 35",
            name: "age",
           },   
            {
              que_id:'btw35_55',
            value: "btw35_55",
            label: "Between 35 and 55",
            name: "age",
            }, 
            {
                que_id:'above55',
              value: "above55",
              label: "Above 55",
              name: "age",
            },        
          ]
         },
        {
         type: "radio",
         name: "gender",
         title: "Your gender",
         value: '',
         que_id:"gender",
         validation: {required :'Please choose gender'},   
      
         choices: [
          {
             que_id:'female',
           value: "female",
           label: "Female",
           name: "gender",
          },
          {
             que_id:'male',
           value: "male",
           label: "Male",
           name: "gender",
          },          
         ]
        },
        {
         type: "radio",
         name: "religion",
         title: "Your religion",
         value: '',
         que_id: "religion",       
         validation: {required :'Please choose religion'}, 
   
         choices: [
          {
           value: "muslem",
           label: "Muslem",
           name: "religion",
          },
          {
           value: "christian",
           label: "Christian",
           name: "religion",
          },
          {
           value: "other",
           label: "Other",
           name: "religion",
          }
         ]
        },
        {
          type: "radio",
          name: "education",
          title: "Your highest level of education",
          value: '',
          que_id: "education",       
          validation: {required :'Please choose education'}, 
    
          choices: [
           {
            value: "primary",
            label: "Primary",
            name: "education",
           },
           {
            value: "secondary",
            label: "Secondary",
            name: "education",
           },
           {
            value: "college",
            label: "College",
            name: "education",
           },
           {
            value: "versity",
            label: "University",
            name: "education",
           }
          ]
         },
         {
          type: "radio",
          name: "marital",
          title: "Your Merital Status",
          value: '',
          que_id: "marital",       
          validation: {required :'Please choose education'}, 
    
          choices: [
           {
            value: "single",
            label: "Single",
            name: "marital",
           },
           {
            value: "married",
            label: "Married",
            name: "marital",
           },
           {
            value: "divorce",
            label: "Divorce",
            name: "marital",
           },
           {
            value: "widor",
            label: "Widor",
            name: "marital",
           }
          ]
         },
         {
          type: "radio",
          name: "job",
          title: "Your Job Status",
          value: '',
          que_id: "job",       
          validation: {required :'Please choose education'}, 
    
          choices: [
           {
            value: "employee",
            label: "Employeed",
            name: "job",
           },
           {
            value: "student",
            label: "Student",
            name: "job",
           },
           {
            value: "unemployee",
            label: "Unemployee",
            name: "job",
           },
         
          ]
         },
      
      
       ],
       
      },
     
      
     ]
   },

  //  {
  //   userId: '3pOuGg4cWLTTvfdHbsbsWw0jSmP2',
  //   id: 'xTfFlN4yCszKWw7L6AOk',
  //   type:'3',
  //   title: "DESIGN AND BUILD CONTRACT FOR THE STANDARD GAUGE RAILWAY (SGR) LINE FROM MOROGORO TO MAKUTUPORA (336 KILOMETRES MAIN LINE AND 86 KM OF SIDINGS/PASSING LOOPS) ON AN ALIGNMENT PARALLEL TO THE EXISTING METER GAUGE LINE",
  //   description: "My study is about how the SGR project benefits the Country",
  //   pages: [
  //     {
  //       pageId:'1',
  //      name: "page1",
  //      title: "What is your name",
  //      description: "Respondents's Particulars",
  //      elements: [
  //       {
  //        type: "text",
  //        name: 'uname',
  //        que_id:"uname",
  //        title: "Full Name",
  //        placeholder: 'Type your answer here',
  //        value: "",
  //        validation: {required :'Name is required'}, 
            
  //       },
  //       {
  //        type: "email",
  //        name: 'uemail',
  //        que_id:"uemail",
  //        title: "Your Email",
  //        placeholder: 'name@example.com',
  //        value: "",
  //        validation: {required :'Email adddress is invalid'},  
 
       
  //       },
  //       {
  //        type: "radio",
  //        name: "sex",
  //        title: "Your year sex",
  //        value: '',
  //        que_id:"sex",
  //        validation: {required :'Please choose your sex'},   
      
  //        choices: [
  //         {
  //           que_id:'male',
  //          value: "male",
  //          label: "Male",
  //          name: "sex",
  //         },
  //         {
  //            que_id:'female',
  //          value: "female",
  //          label: "Female",
  //          name: "sex",
  //         },
      
  //        ]
  //       },
  //       {
  //         type: "radio",
  //         name: "stay",
  //         title: "Where do you stay?",
  //         value: '',
  //         que_id:"stay",
  //         validation: {required :'Please choose your location'},   
       
  //         choices: [
  //          {
  //            que_id:'town',
  //           value: "town",
  //           label: "Town",
  //           name: "stay",
  //          },
  //          {
  //             que_id:'rural',
  //           value: "rural",
  //           label: "Rural",
  //           name: "stay",
  //          },
       
  //         ]
  //        },
  
           
  //       {
  //        type: "radio",
  //        name: "religion",
  //       //  visibleIf:{ name: 'taneps', value: false},
  //        title: "What is your religion?",
  //        value: "",
  //        que_id: "religion",
  //        validation: {required :'Please choose your Religion'},   
  //        choices: [
  //         {
  //          value: "islam",
  //          label: "Islam",
  //          name: "religion",
         
  //         },
  //         {
  //          value: "christian",
  //          label: "Christian",
  //          name: "religion",
  //         },
  //         {
  //          value: "hindu",
  //          label: "Hindu",
  //          name: "religion",
  //         }
  //        ],
        
  //       }
  //      ],
       
  //     },
  //     {
  //      pageId:'2',
  //      name: "page2",
  //      title: "Establishment and implementation of e-Procurement system in the Country by TANeps",
  //      description: "Please rate how your firm's participation during the establishment of e-Procurememt system",
      
  //      elements: [
  //       {
  //        type: "rating",
  //        name: "question7",
  //        que_id:"question7",
  //        title: "How is your firm attendance during the stakeholders??? meeting by TANeps before launching the system?",
  //        required: true,
  //        minRateDescription: "Poor",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        value:'',
  //       },
       
  //       {
  //        type: "rating",
  //        name: "question8",
  //        title: "How do you see the training and awareness campaign done by TANeps toward the e-Procurement system practices?",
  //        required: true,
  //        minRateDescription: "Poor",
  //        que_id:"question8",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question9",
  //        title: "How is your firm participation in the establishment of e-Procurement system ?",
  //        required: true,
  //        minRateDescription: "Poor",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question9",
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question10",
  //        title: "How does your firm participate in tendering through TANeps ?",
  //        required: true,
  //        minRateDescription: "Poor",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question10",
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question11",
  //        title: "How do you see the practices of the e-Procurement system on the public construction projects by the Construction stakeholders?",
  //        required: true,
  //        minRateDescription: "Poor",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question11",
  //        value:'',
  //       }
  //      ],
       
  //     },
  //     {
  //      pageId:'3',
  //      name: "page3",
  //      title: "In the implementation of e-Procurement system through TANeps",
  //      description: "Please rate the extent of the following functions available in the TANeps",
  //      elements: [
  //       {
  //        type: "rating",
  //        name: "question12",
  //        title: "Availability of user training documentation in the system",
  //        required: true,
  //        minRateDescription: "Poor",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question12",
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question13",
  //        title: "System is easy to configure and use",
  //        required: true,
  //        minRateDescription: "Poor",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question13",
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question14",
  //        title: "Online bid advertisement, bidder gets instant notification once the new bid has been uploaded into the system",
  //        required: true,
  //        minRateDescription: "Poor",
  //        maxRateDescription: "Excellent",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question14",
  //        value:'',
  //       },
   
   
  
     
  //      ],
       
  //     },
      
  //     {
  //      pageId:'4',
  //      name: "page4", 
  //      title: "The way forward: What can you advise on the best way to achieve full-fledged e-Procurement system (Every thing to be done online - no paperwork) on the public construction projects?",
  //      elements: [
  //       {
  //        type: "rating",
  //        name: "question52",
  //        title: "All professional bodies should be well equipped with the IT infrastructures",
  //        required: true,
  //        minRateDescription: "Strong Disagree",
  //        maxRateDescription: "Strong Agree",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question52",
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question53",
  //        title: "The government should support all professional bodies and other construction stakeholders to build system integration to the TANeps",
  //        required: true,
  //        minRateDescription: "Strong Disagree",
  //        maxRateDescription: "Strong Agree",
  //        que_id:"question53",
  //        validation: {required :'Please choose one'}, 
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question54",
  //        title: "The professional bodies should change the organizational culture to the technological world",
  //        required: true,
  //        minRateDescription: "Strong Disagree",
  //        maxRateDescription: "Strong Agree",
  //        que_id:"question54",
  //        validation: {required :'Please choose one'}, 
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question55",
  //        title: "The firms should change mentality to adapt the new technology within their firms",
  //        required: true,
  //        minRateDescription: "Strong Disagree",
  //        maxRateDescription: "Strong Agree",
  //        que_id:"question55",
  //        validation: {required :'Please choose one'}, 
  //        value:'',
  //       },
  //       {
  //        type: "rating",
  //        name: "question56",
  //        title: "The government should improve the legal frameworks to provide conclusive environment for full-fledged e-Procurement system",
  //        required: true,
  //        minRateDescription: "Strong Disagree",
  //        maxRateDescription: "Strong Agree",
  //        validation: {required :'Please choose one'}, 
  //        que_id:"question56",
  //        value:'',
  //       },
  //       {
  //        type: "comment",
  //        name: "comment",
  //        placeholder: 'Type your answer',
  //        title: "With your own words what is your general recommendations/ opinion/ editions/ comments/etc in establishing the full-fledged e-procurement system on public construction projects",
  //        required: true,
  //        que_id:"comment",
  //        validation: {required :'Please write something'}, 
  //        value:'',
  //       }
  //      ],
       
  //     },
      
  //    ]
  //  },






]