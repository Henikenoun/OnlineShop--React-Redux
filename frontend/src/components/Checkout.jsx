import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout() {
  return (
    <div className='pay'>
        <div className='checkout'>
        <h2>successfully!</h2>
        <p>Thanks for trusting us. I hope that we will continue to meet your expectations.
             We recently restocked our Phone, sending one. I hope you enjoy it.
             Best regards,
        </p>
        <div className="start-shopping">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" fill="currentColor"
                className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              <span>Back</span>
            </Link>
          </div>
          </div>
    </div>
  )
}
