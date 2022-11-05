const CSRTableItem = ({ csr }) => {
  return (
    <div className="csr-table-item">
      <ul>
        <li>
          <div
            className="category-icon"
            style={{ backgroundColor: csr.icon }}
          ></div>
        </li>
        <li>{csr.name}</li>
        <li className="value">Bereikt: {csr.value}</li>
        <li className="threshold">Doel: {csr.threshold.value}</li>
      </ul>
    </div>
  );
};

export default CSRTableItem;
