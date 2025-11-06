import { useState } from "react";
import axios from "axios";
import { API } from "../api";

export default function Report() {
  const [type, setType] = useState("CHIT");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // <-- 10 rows per page

  const fetchReport = async () => {
    if (!start || !end) return alert("Select start and end dates");
    setLoading(true);
    try {
      const res = await axios.get(`${API}/report`, {
        params: { type, start, end, t: Date.now() },
      });
      setData(res.data);
      setCurrentPage(1); // reset to first page
    } catch (err) {
      console.error("Error fetching report:", err.message);
      alert("Failed to fetch report");
    } finally {
      setLoading(false);
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h2>Report</h2>

<div
  className="form-row"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
    gap: "15px",
    maxWidth: "800px",
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    alignItems: "end" // align button to bottom
  }}
>
  <label style={{ display: "flex", flexDirection: "column", fontWeight: "500" }}>
    Type:
    <select value={type} onChange={e => setType(e.target.value)} style={{ padding: "6px", borderRadius: "4px", marginTop: "5px" }}>
      <option value="CHIT">CHIT</option>
      <option value="FD">FD</option>
      <option value="LOAN">LOAN</option>
    </select>
  </label>

  <label style={{ display: "flex", flexDirection: "column", fontWeight: "500" }}>
    Start Date:
    <input type="date" value={start} onChange={e => setStart(e.target.value)} style={{ padding: "6px", borderRadius: "4px", marginTop: "5px" }} />
  </label>

  <label style={{ display: "flex", flexDirection: "column", fontWeight: "500" }}>
    End Date:
    <input type="date" value={end} onChange={e => setEnd(e.target.value)} style={{ padding: "6px", borderRadius: "4px", marginTop: "5px" }} />
  </label>

  <button
    onClick={fetchReport}
    disabled={loading}
    style={{
      backgroundColor: "#4a90e2",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "500",
      padding: "10px 0"
    }}
  >
    {loading ? "Loading..." : "Get Report"}
  </button>
</div>


      <div className="report-table">
        {currentData.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Receipt No</th>
                  <th>Chit/FD/Loan No</th>
                  <th>Created At</th>
                  <th className="text-center">Downloads</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.receiptNo || "-"}</td>
                    <td>{item.chitGroup || item.accountNo || item.loanNo || "-"}</td>
                    <td>{item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-success"
                        onClick={() => window.open(`${API}/${type.toLowerCase()}/${item._id}/pdf`, "_blank")}
                        style={{ marginTop: 0, fontSize: "18px" }}
                      >
                        <i className="bi bi-download fs-5 me-1"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Buttons */}
            <div className="pagination" style={{ marginTop: "15px", textAlign: "center" }}>
              <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
                >
                  {i + 1}
                </button>
              ))}
              <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
          </>
        ) : (
          <p>No records found</p>
        )}
      </div>
    </div>
  );
}
