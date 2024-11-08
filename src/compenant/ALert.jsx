function Alert({ message, type }) {
  const alertStyles = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div
      className={`p-4 mb-4 border-l-4 ${alertStyles[type]} border-l-4 rounded-lg`}
      role="alert"
    >
      <p className="font-medium">{message}</p>
    </div>
  );
}

export default Alert;
