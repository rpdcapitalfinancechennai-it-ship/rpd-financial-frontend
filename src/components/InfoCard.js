export default function InfoCard({ title, children }) {
  return (
    <div className="biz-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
