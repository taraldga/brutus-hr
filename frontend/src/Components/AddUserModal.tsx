import React from 'react';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({isOpen, onClose}) => {
  const addUser = async () => {
    const newUser = {
      "first_name": (document.getElementById("first_name") as HTMLInputElement).value,
      "last_name": (document.getElementById("last_name") as HTMLInputElement).value,
      "age": (document.getElementById("age") as HTMLInputElement).value,
      "street": (document.getElementById("street") as HTMLInputElement).value,
      "city": (document.getElementById("city") as HTMLInputElement).value,
      "state": (document.getElementById("state") as HTMLInputElement).value,
      "latitude": (document.getElementById("latitude") as HTMLInputElement).value,
      "longitude": (document.getElementById("longitude") as HTMLInputElement).value,
      "ccnumber": (document.getElementById("ccnumber") as HTMLInputElement).value 
    }

    await fetch('http://localhost:3600/employee', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    onClose();
  }

  return(
    <div className={`modal ${isOpen && 'active'}`} id="modal-id">
      <a href="#close" className="modal-overlay" aria-label="Close" onClick={() => onClose()}></a>
      <div className="modal-container">
        <div className="modal-header">
          <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={() => onClose()}></a>
          <div className="modal-title h5">Modal title</div>
        </div>
        <div className="modal-body">
          <div className="content">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input className="form-input" type="text" id="first_name" placeholder="First Name" />
              <label className="form-label">Last Name</label>
              <input className="form-input" type="text" id="last_name" placeholder="Last Name" />
              <label className="form-label">Age</label>
              <input className="form-input" type="text" id="age" placeholder="Age" />
              <label className="form-label">Street</label>
              <input className="form-input" type="text" id="street" placeholder="Street" />
              <label className="form-label">City</label>
              <input className="form-input" type="text" id="city" placeholder="City" />
              <label className="form-label">State</label>
              <input className="form-input" type="text" id="state" placeholder="State" />
              <label className="form-label">Latitude</label>
              <input className="form-input" type="text" id="latitude" placeholder="Latitude" />
              <label className="form-label">Longitude</label>
              <input className="form-input" type="text" id="longitude" placeholder="Longitude" />
              <label className="form-label">CCNumber</label>
              <input className="form-input" type="text" id="ccnumber" placeholder="CCNumber" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={() => addUser()}>Add user</button>
        </div>
      </div>
    </div>
  )
}


export default AddUserModal;