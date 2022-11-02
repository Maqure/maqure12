import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/GetCreditPage.css"

function GetCreditPage() {
  return (
    <>
      <div className="get_credit_page_main_div">
        <h1>Coming Soon...!</h1>
      </div>
      <p className="get_credit_page_p">If you're a Buyer, Go to <Link to="/Buyers" className="get_credit_page_p_link">Buyers Page</Link>.</p>
      <p className="get_credit_page_p">If you're a Seller, Go to <Link to="/Sellers" className="get_credit_page_p_link">Sellers Page</Link>.</p>
    </>
  )
}

export default GetCreditPage