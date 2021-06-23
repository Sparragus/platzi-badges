import React from "react"

function pageLoading() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{marginTop: "40vh",}} >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div> 
  )
}

export default pageLoading;
