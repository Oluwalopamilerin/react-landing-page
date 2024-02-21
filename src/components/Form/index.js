import AppInput from "../AppInput/AppInput";
import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="Form">
      <form>
        <AppInput label="Your Name" name="name"/>
        <AppInput label="Email" type="email" name="email"/>
        <AppInput label="Subject" name="subject"/>
        <AppInput label="Message" name="message" rows="6" inputType="textarea"/>
        {/* <label>Your name</label>
        <input type = "text"></input>

        <label>Email</label>
        <input type = "email"></input>

        <label>Subject</label>
        <input type = "text"></input> */}

        {/* <label>Message</label>
        <textarea rows= "6" placeholder = "Type your message here"/> */}

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form