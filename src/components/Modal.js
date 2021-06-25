import React from 'react'
import './styles/Badge.css'

export default function Modal(props) {

  return (    
    <div className="container-modal" >
    <div className="modal fade "  tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content border-0">
          <div className="modal-header border-0 ">
            <button type="button" className="btn-close"></button>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column p-3">
            <h3 className="fw-bold" >ARE YOU SURE?</h3>
            <p>You are about to delete {props.firstName} {props.lastName} from the Conf </p>
          </div>
          <div className="modal-footer justify-content-center border-0">
            <button type="button" className="btn btn-danger mx-3" onClick={props.onClick} >Delete</button>    
            <button type="button" className="btn btn-primary mx-3" onClick={() => {"hacer una funcion que cierre el modal"}} >Cancel</button>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}
