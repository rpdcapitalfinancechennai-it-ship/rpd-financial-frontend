import { useState } from "react";
import axios from "axios";
import { API } from "../api";

export default function Chit() {
  const [form, setForm] = useState({
    customerId: "", name: "", contact: "", chitDate: "",
    chitAmount: "", chitGroup: "", chitMonth: "", totalMonth: "",
    modeOfTransfer: "", transactionId: "", collateralReceived: ""
  });
  const [errors, setErrors] = useState({});
  const [created, setCreated] = useState(null);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    ["customerId","name","contact","chitAmount","chitDate","chitGroup","chitMonth","totalMonth","collateralReceived","modeOfTransfer"].forEach(f => {
      if (!form[f]) newErrors[f] = "This field is required";
    });
    ["chitAmount","chitMonth","totalMonth"].forEach(f => {
      if (form[f] && isNaN(form[f])) newErrors[f] = "Must be a valid number";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return alert("Fix validation errors first");
    try {
      const { data } = await axios.post(`${API}/chit`, form);
      setCreated(data);
      alert("Chit created successfully!");
    } catch (err) {
      alert("Error creating chit: " + (err.response?.data?.error || err.message));
    }
  };

  const download = async () => {
    if (!created) return alert("Create chit first");
    try {
      const res = await fetch(`${API}/chit/${created._id}/pdf`);
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
    customerId: "Customer ID", name: "Name",
    contact: "Contact Details", chitDate: "Payment Date",
    chitAmount: "Chit Amount", chitGroup: "Chit Group", chitMonth: "Chit Month",
    totalMonth: "Total No.of month", modeOfTransfer: "Mode of Transfer",
    collateralReceived: "Collateral Received", transactionId: "Transaction Id"
  };

  const dateFields = ["chitDate"];

  return (
    <div className="container">
      <h2>Chit</h2>
      <form onSubmit={submit}>
        {Object.entries(fields).map(([key,label]) => (
              <label key={key}>
                <span>
                  {label} {["customerId","name","contact","chitAmount","chitDate","chitGroup","chitMonth","totalMonth","modeOfTransfer", "collateralReceived"].includes(key) && <span style={{color:'red'}}>*</span>}
                </span>
                {key === "modeOfTransfer" ? (
                  <select name={key} value={form[key]} onChange={change}>
                    <option value="">-- Select --</option>
                    <option value="NEFT/RTGS">NEFT/RTGS</option>
                    <option value="UPI">UPI</option>
                    <option value="CASH">CASH</option>
                    <option value="CHEQUE">CHEQUE</option>
                  </select>
                ) : key === "collateralReceived" ? (
                  <select name={key} value={form[key]} onChange={change}>
                    <option value="">-- Select --</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                ) : (
                  <input type={dateFields.includes(key) ? "date":"text"} name={key} value={form[key] || ""} onChange={change} />
                )}
                {errors[key] && <span className="error">{errors[key]}</span>}
              </label>
            ))}


        <div style={{gridColumn:'1 / -1'}}>
          <button type="submit">Create Chit</button>
          <button type="button" onClick={download} style={{marginLeft:'10px'}}>Download Receipt</button>
          {created && <span style={{marginLeft:'10px'}}>Receipt: {created.receiptNo}</span>}
        </div>
      </form>
    </div>
  );
}
