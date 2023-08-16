
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Table from './Table'
import Table1 from './Table1'
import './form.css'
import {FiAlertTriangle} from 'react-icons/fi'
const Form = () => {

    const [table, setTable] = useState(false)
    const [verify, setVerify] = useState(false)

    const changeTable=()=>{
        setTable(true);
    }
     const changeTable1=()=>{
        setTable(!true);
    }
    function onChange(value) {
    console.log("Captcha value:", value);
    setVerify(true)
}
  return (
    <div>
      <div className='form'>
        <div className='warning'>
         <div className='warning-icon'>
            <FiAlertTriangle className='alert-icon'/>
         </div>
            <p>Your wallet is connected to Fantom Testnet, so you are requesting Fantom Testnet Link/ETH.</p>
        </div>
        <div className='info_form'>
            <form>
                <div className='wallet_address'>
                <label> Wallet Address</label>
                <div className='input_Wall'>
                    <input type='text' placeholder='Your Wallet Address...' name='walletName' />
                </div>
                </div>
                <div id='Request_Type' className='req-type '>
                    <label >Request Type</label>
                    <div className='inputFields'>
                        <div className='left_Input'>
                            <input type='text' placeholder='Test Link' disabled value='20 Test Link' className='input_class' />
                        </div>
                        <div className='rightInput'>
                            <input type='text' placeholder='Test Link' disabled value='0.5 ETH' className='input_class' />
                        </div>
                    </div>
                    <div className='recapture'>
                         <ReCAPTCHA
                         sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                        />
                    </div>
                </div>
                <div className='req-button'>
                    <button type='submit' disabled={verify}>Send Request</button>
                </div>
            </form>
        </div>
        <div className='req_history'>
            <h2>Request History</h2>
            <div className='taps'>
                <div>
               <button onClick={changeTable1} className= {`history-eth ${!table && "active_tabs" }`}>ETH Transation History</button>
                <span ></span>
                </div>
                <div>
                <button onClick={changeTable} className={`history-eth ${table && "active_tabs" }`}>TestLink Transation History</button>
                </div>
        </div>
        <div className='history-text'>
        <div className='history'>
        {
            table ? (<div><Table1/></div>) : (<div> <Table /></div>)
        }
           
        </div>

        </div>

        </div>
      </div>
    </div>
  )
}

export default Form
