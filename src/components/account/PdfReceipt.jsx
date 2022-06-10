import React from 'react'
import {motion} from 'framer-motion'
import Logo from '../images/logo-icon.png'
import Pdf from 'react-to-pdf'
import { jsPDF } from "jspdf";

const ref = React.createRef();


const PdfReceipt = ({setViewInvoice, pdfReceipt, user, cuUser, setActive, setPage, setPdfReceipt}) => {

  const generatePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#pdfReceipt"), {
      callback: function(pdf){
        const pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount)
        pdf.save("maydoc.pdf")
      }
    })
  }
  
  


 
  return (

    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
          <div className="pdf_wrapper">
              {/* <Pdf targetRef={ref} filename={pdfReceipt.invoiceNo}>
                {({ toPdf }) => <button className='btn' onClick={toPdf}>Download Pdf</button>}
              </Pdf> */}
              <button className='btn' onClick={() => generatePdf()}>Generate Pdf</button>
              <button className='cancel' onClick={() => {setPdfReceipt(null); setPage(0); setActive(1); setViewInvoice(null)}}>Cancel</button>
          </div>
         
          {/* <div className="receipt_btn">
              
                 
          </div> */}
          <div className="receipt_wrapper" ref={ref} id='pdfReceipt'>
            <div className="rec_tp">
              <div className="comp_info">
                <div className="comp_logo">
                  <img src={Logo} alt="ALBARRU" />
                </div>                
                <span className='slogan'>save time, stay better</span>
              </div>
              <div className="receipt_info">
                <h2>Receipt</h2>
                <span>Date: <small>{new Date(pdfReceipt?.timeStamp?.seconds * 1000).toLocaleDateString("en-US")}</small></span>
                <span>Receipt #: <small>[{pdfReceipt.invoiceNo}]</small></span>
              </div>
              
            </div>
            <div className="receipt_body">
              <div className="payment_method">
                <h4>Received From:</h4>
                <h2 className='receivedFrm'>{pdfReceipt.name}</h2>
                <small>{user.email}</small>
               
              </div>
              <div className="table_info">
                <table className="table1">
                    <thead>
                      <th>NO</th>
                      <th>Item Description</th>                
                      <th>Price.</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </thead>
                    <tbody>                   
                        <tr>                      
                          <td data-label='Title'>1</td>  
                          <td data-label='Title' className='form_clm'>
                            <h3>Creating and Hosting:</h3>
                            <span>{pdfReceipt.questionnaires} Questionnaires for {pdfReceipt.period} period for the title <div>{pdfReceipt.title}</div></span>
                          </td> 
                          <td data-label='Title'>${pdfReceipt.totalCost}</td> 
                          <td data-label='Title'>1</td> 
                          <td data-label='Title'>${pdfReceipt.totalCost}</td>  
                                  
                      </tr>
                     
                      
                    </tbody>
                  </table>
                  <div className="sub_total">
                    <h6>SUBTOTAL <span> ${pdfReceipt.totalCost}</span></h6>
                    <small>Tax Vat 18% <span>00.00</span></small>
                    <small>Discount <span>00.00</span> </small>
                    <div className="gandTotal">
                      <h6>Grand Total <span>${pdfReceipt.totalCost}</span></h6>
                    </div>
                  </div>

              </div>
            </div>
            <div className="receipt_footer">
              <h5>Thank you for your business</h5>
              <div className="company_details">
                <span>Albarru Survey,</span>
                <span>LA 25625 West Camp,</span>
                <span>+44 425 4251 2235,</span>
                <span>info@albarrusurvey.com,</span>
                {/* <span>www.albarrusurvey.com</span> */}
              </div>
            </div>
          </div>
    
    </motion.div>
  )
}

export default PdfReceipt
