import { useState } from "react";
import axios from "axios";
import { API } from "../api";

export default function Loan() {
  const [form, setForm] = useState({
    customerId:"", loanNo:"", name:"", contact:"",
    loanOpenDate:"", loanClosingDate:"", loanAmount:"",
    modeOfTransfer:"", rateOfInterest:"", paymentMethod:"", interestPerMonth:"", transactionId: "", collateralReceived: ""
  });
  const [errors, setErrors] = useState({});
  const [created, setCreated] = useState(null);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    ["customerId","loanNo","name","contact","loanOpenDate","loanClosingDate","loanAmount","rateOfInterest","interestPerMonth","modeOfTransfer","paymentMethod", "collateralReceived"].forEach(f => {
      if (!form[f]) newErrors[f] = "This field is required";
    });
    ["loanAmount","interestPerMonth"].forEach(f => {
      if (form[f] && isNaN(form[f])) newErrors[f] = "Must be a valid number";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return alert("Fix validation errors first");
    try {
      const { data } = await axios.post(`${API}/loan`, form);
      setCreated(data);
      alert("Loan created successfully!");
    } catch (err) {
      alert((err.response?.data?.error || err.message));
    }
  };

  const download = async () => {
    if (!created) return alert("Create loan first");
    try {
      const res = await fetch(`${API}/loan/${created._id}/pdf`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${created.receiptNo}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert("Error downloading receipt: " + err.message);
    }
  };

  const fields = {
    customerId:"Customer ID", loanNo:"Loan Number", name:"Name",
    contact:"Contact Details", loanOpenDate:"Loan Open Date", loanClosingDate:"Loan Closing Date",
    loanAmount:"Loan Amount", modeOfTransfer:"Mode of Transfer", rateOfInterest:"Rate of Interest",
    paymentMethod:"Payment Method", interestPerMonth:"Interest Amonut", transactionId: "Transaction Id",
    collateralReceived: "Collateral Received",
  };

  const dateFields = ["loanOpenDate","loanClosingDate"];

  return (
    <div className="container">
      <h2>Loan</h2>
      <form onSubmit={submit}>
        {Object.entries(fields).map(([key,label]) => (
            <label key={key}>
              <span>
                {label} {["customerId","loanNo","name","contact","loanOpenDate","loanClosingDate","loanAmount","rateOfInterest","interestPerMonth","paymentMethod", "modeOfTransfer", "collateralReceived"].includes(key) && <span style={{color:'red'}}>*</span>}
              </span>
              {key === "modeOfTransfer" ? (
                <select name={key} value={form[key]} onChange={change}>
                  <option value="">-- Select --</option>
                  <option value="NEFT/RTGS">NEFT/RTGS</option>
                  <option value="UPI">UPI</option>
                  <option value="CASH">CASH</option>
                  <option value="CHEQUE">CHEQUE</option>
                </select>
              ) : key === "paymentMethod" ? (
                <select name={key} value={form[key]} onChange={change}>
                  <option value="">-- Select --</option>
                  <option value="MI">MI</option>
                  <option value="ME">ME</option>
                  <option value="DR">DR</option>
                </select>
              ): key === "collateralReceived" ? (
                  <select name={key} value={form[key]} onChange={change}>
                    <option value="">-- Select --</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                )
               : (
                <input type={dateFields.includes(key) ? "date":"text"} name={key} value={form[key]||""} onChange={change} />
              )}
              {errors[key] && <span className="error">{errors[key]}</span>}
            </label>
          ))}

        <div>
          <button type="submit">Create Loan</button>
          <button type="button" onClick={download} style={{marginLeft:'10px'}}>Download Receipt</button>
          {created && <span style={{marginLeft:'10px'}}>Receipt: {created.receiptNo} | Loan No: {created.loanNo}</span>}
        </div>
      </form>
    </div>
  );
}
