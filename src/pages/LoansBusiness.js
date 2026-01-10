import Breadcrumb from "../components/Breadcrumb";
import { FaUser, FaBriefcase, FaHome } from "react-icons/fa";
import "./LoansBusiness.css";

export default function LoansPage() {
  return (
    <div className="loans-wrapper">

      <Breadcrumb />

      {/* PAGE HEADER */}
      <div className="loans-header">
        <h1>Loans</h1>
        <p>
          We provide structured and transparent loan solutions to meet personal
          and business financial requirements.
        </p>
      </div>

      {/* PERSONAL LOAN */}
      <section className="loan-section">
        <div className="loan-title">
          <FaUser />
          <h2>Personal Loan</h2>
        </div>

        <p>
          Personal loans are designed to meet individual financial needs such as
          education, medical expenses, family requirements, or planned investments.
          The process is simple, with clear terms and quick processing.
        </p>

        <ul>
          <li>Simple eligibility criteria</li>
          <li>Minimal documentation</li>
          <li>Quick processing and disbursement</li>
        </ul>
      </section>

      {/* BUSINESS LOAN */}
      <section className="loan-section">
        <div className="loan-title">
          <FaBriefcase />
          <h2>Business Loan</h2>
        </div>

        <p>
          Business loans support working capital needs, expansion plans, and
          operational requirements. These loans are structured to help maintain
          cash flow and long-term business stability.
        </p>

        <ul>
          <li>Flexible repayment structures</li>
          <li>Competitive interest rates</li>
          <li>Support for businesses at all stages</li>
        </ul>
      </section>

      {/* MORTGAGE LOAN */}
      <section className="loan-section">
        <div className="loan-title">
          <FaHome />
          <h2>Mortgage Loan</h2>
        </div>

        <p>
          Mortgage loans allow you to access funds by pledging residential or
          commercial property as security. This option provides higher loan
          eligibility with longer repayment tenures.
        </p>

        <ul>
          <li>Higher loan amounts</li>
          <li>Longer repayment tenure</li>
          <li>Property-backed security</li>
        </ul>
      </section>

    </div>
  );
}
