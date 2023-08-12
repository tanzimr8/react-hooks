import { useState } from "react"; 
 import './App.css';
export default function App() { 
  const [formData, setFormData] = useState({
    email: '',
    number:''
  });
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(valiDateForm()){
      resetForm();
      alert('Form submitted! Thanks');
    }
    
  }
  const valiDateForm = ()=>{
    return (formData.email && formData.number.length >2);
  }
  const resetForm = ()=>{
    setFormData({email: '',number:''})
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className={!formData.email ? 'redBorder' : 'form-border'}/>
      <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Your Phone number" className={!formData.email ? 'redBorder' : 'form-border'}/>
      <button type="submit">Submit</button>
    </form>
  );
} 