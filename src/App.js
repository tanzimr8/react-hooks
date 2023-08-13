import './App.css';
import ReactReducer from './ReactReducer';
import { useState,useEffect } from "react";

export default function App() { 
  // const [formData, setFormData] = useState({
  //   email: '',
  //   number:''
  // });
  // const [btcData,setBtcData] = useState({});
  // useEffect(()=>{
  //   fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  //   .then(response => response.json())
  //   .then(jsonData => setBtcData(jsonData))
  //   .catch((error)=>{console.log(error)});
  // },[]);
  // const handleChange = (e)=>{
  //   setFormData({...formData, [e.target.name]: e.target.value});
  // }
  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   if(valiDateForm()){
  //     resetForm();
  //     alert('Form submitted! Thanks');
  //   }
    
  // }
  // const valiDateForm = ()=>{
  //   return (formData.email && formData.number.length >2);
  // }
  // const resetForm = ()=>{
  //   setFormData({email: '',number:''})
  // }
  return(
    <>
    {/* <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className={!formData.email ? 'redBorder' : 'form-border'}/>
      <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Your Phone number" className={!formData.email ? 'redBorder' : 'form-border'}/>
      <button type="submit">Submit</button>
    </form>
    <div className="btc-data">
      <h1>Current Btc Data</h1>
      <p>Code: {btcData.bpi.USD.code}</p>
      <p>Symbol: {btcData.bpi.USD.symbol}</p> 
      <p>Rate: {btcData.bpi.USD.rate}</p> 
      <p>Description: {btcData.bpi.USD.description}</p> 
      <p>Rate Float: {btcData.bpi.USD.rate_float}</p> 
    </div> */}
    <ReactReducer/>
    </>
  );
} 