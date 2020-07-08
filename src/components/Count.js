import React from "react";
import Paper from "@material-ui/core/Paper";

function Count() {
  const [value, setValue] = React.useState(0);
  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleDecrease = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  return (
    <Paper className="container w-50">
      <div className="row">
        <div className="col text-center ">
          <strong> Count: </strong>
          {value > 0 ? (
            <strong className="h5 text-success pl-1">{value}</strong>
          ) : (
            <strong className="h5 text-danger pl-1">{value}</strong>
          )}
        </div>
      </div>
      <div className="row text-center mt-5 pb-3">
        <div className="col">
          <div
            className="btn btn-outline-danger mr-1 "
            onClick={handleDecrease}
          >
            -
          </div>

          <div className="btn btn-outline-secondary mr-1" onClick={handleReset}>
            reset
          </div>

          <div className="btn btn-outline-success " onClick={handleIncrease}>
            +
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Count;
