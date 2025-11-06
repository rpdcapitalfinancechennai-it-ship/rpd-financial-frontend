import { useState } from "react";
import axios from "axios";
import { API } from "../api";

export default function FixedDeposit() {
  const [form, setForm] = useState({
    customerId:'', name:'', date:'', accountNo:'',
    receivedWithThanksFrom:'', jointly:'', under:'',
    receivedDate:'', receivedAmount:'', period:'', roiPerAnnum:'',
    interestPayable:'', paymentDueDate:'', paymentDueAmount:'', payableTo:'',
    nomineeName:'', nomineeAddress:'', guardianName:'', guardianAddress:'', transactionId: "", accountDetails: "", monthlyInterest : ""
  });
  const [errors, setErrors] = useState({});
  const [created, setCreated] = useState(null);

  const change = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const required = [
      "customerId", "name", "date", "accountNo", "receivedWithThanksFrom", 
      "receivedDate", "receivedAmount", "period", "roiPerAnnum", 
      "interestPayable", "paymentDueDate", "paymentDueAmount", "payableTo", "monthlyInterest"
    ];
    required.forEach(field => {
      if (!form[field]) newErrors[field] = "This field is required";
    });

    ["receivedAmount", "roiPerAnnum", "paymentDueAmount", "monthlyInterest"].forEach(field => {
      if (form[field] && isNaN(form[field])) newErrors[field] = "Must be a valid number";
    });

    if (form.interestPayable !== "Monthly" && form.interestPayable !== "Maturity") {
      newErrors.interestPayable = "Please select a valid option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async e => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const { data } = await axios.post(`${API}/fd`, form);
      setCreated(data);
      alert("FD created successfully!");
    } catch (err) {
      if (err.response) {
        alert((err.response.data.error || "Server error"));
      } else if (err.request) {
        alert("No response from server. Please try again.");
      } else {
        alert("Error: " + err.message);
      }
    }
  };

  const download = async () => {
    if (!created) return alert('Please create FD first');
    try {
      const res = await fetch(`${API}/fd/${created._id}/pdf`);
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${created.receiptNo}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert("Error downloading FD: " + err.message);
    }
  };

  const fields = {
    customerId:'Customer ID', name:'Name', date:'Date',
    accountNo:'Account No', receivedWithThanksFrom:'Received with thanks from',
    jointly:'Jointly', under:'Under', receivedDate:'Received Date',
    receivedAmount:'Received Amount', period:'Period (Months/Year)',
    roiPerAnnum:'ROI Per Annum', paymentDueDate:'Payment Due Date',
    paymentDueAmount:'Payment Due Amount', payableTo:'Payable to',
    nomineeName:'Nominee name', nomineeAddress:'Nominee address',
    guardianName:'Guardian name', guardianAddress:'Guardian address', transactionId: "Transaction Id", accountDetails: "Account Details", monthlyInterest : "Monthly Interest Payable"
  };

  const dateFields = ["date", "receivedDate", "paymentDueDate"];

  // Required fields list
  const requiredFields = [
    "customerId", "name", "date", "accountNo", "receivedWithThanksFrom", 
    "receivedDate", "receivedAmount", "period", "roiPerAnnum", 
    "interestPayable", "paymentDueDate", "paymentDueAmount", "payableTo", "monthlyInterest"
  ];

  return (
    <div className="container">
      <h2>Fixed Deposit</h2>
      <form onSubmit={submit}>
        {Object.entries(fields).map(([key,label])=> (
          <label key={key}>
            <span>
              {label}{" "}
              {requiredFields.includes(key) && <span style={{color:"red"}}>*</span>}
            </span>
            <input 
              type={dateFields.includes(key) ? "date" : "text"} 
              name={key} 
              value={form[key]||''} 
              onChange={change} 
            />
            {errors[key] && <span className="error">{errors[key]}</span>}
          </label>
        ))}

        <label>
          <span>
            Interest Payable{" "}
            <span style={{color:"red"}}>*</span>
          </span>
          <select name="interestPayable" value={form.interestPayable} onChange={change}>
            <option value="">-- Select --</option>
            <option value="Monthly">Monthly</option>
            <option value="Maturity">Maturity</option>
          </select>
          {errors.interestPayable && <span className="error">{errors.interestPayable}</span>}
        </label>

        <div>
          <button type='submit'>Create FD</button>
          <button type='button' onClick={download} style={{marginLeft:'10px'}}>Download Receipt</button>
          {created && <span style={{marginLeft:'10px'}}>Created: {created.receiptNo}</span>}
        </div>
      </form>
    </div>
  );
}
