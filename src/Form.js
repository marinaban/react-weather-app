import React from "react";

export default function Form() {
  return (
    <div className="row justify-content-center">
      <div className="col-8 mb-3">
        <form className="input-group">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Enter city here"
            id="enter-city"
            style={{
              backgroundColor: "rgba(255, 228, 196, 0)",
              color: "rgb(255, 255, 255)",
            }}
          />
          <button
            type="submit"
            className="btn btn-outline-warning btn-sm ml-2"
            style={{ backgroundColor: "rgba(255, 228, 196, 0.05)" }}
          >
            <i className="bi bi-search pr-1"></i>🔍
          </button>
        </form>
      </div>
    </div>
  );
}
