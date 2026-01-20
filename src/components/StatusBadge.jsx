const statusStyles = {
  Applied: "bg-blue-100 text-blue-700",
  Interview: "bg-yellow-100 text-yellow-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function statusBadge({ status }) {
  return (
    <span
      className={`px-2 py-1 text-xs rounded font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
