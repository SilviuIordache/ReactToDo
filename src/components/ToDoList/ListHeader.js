export default function ListHeader(props) {
  let className = "mb-2 d-flex justify-content-between mb-4";
  if (props.allCompleted) {
    className += " text-success";
  }
  return (
    <div className={className}>
      <div className="d-flex">
        <h2>Completed</h2>
        {props.allCompleted && <i className="fas fa-2x fa-check ms-2"></i>}
      </div>
      <h2 className="d-flex justify-content-between">
        <p>
          {props.completedItemsCount}/{props.totalItems}
        </p>
      </h2>
    </div>
  );
}
