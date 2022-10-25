import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  services: "gmail",
  auth: {
    user: "1234@gmail.com",
    pass:"Testing1234",
  },
  tls:{
    rejectUnauthorized:false,
  }
})

let mailOptions = {
  from: "1234@gmail.com",
  to: "ankur@gmail.com",
  subject: "Testing",
  text: "First Email sent from Nodejs using Nodemailer",
};

transporter.sendMail(mailOptions, function(err, success){
  if(err) {
    console.log(err)
  } else {
    console.log("Email sent successfully!")
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
