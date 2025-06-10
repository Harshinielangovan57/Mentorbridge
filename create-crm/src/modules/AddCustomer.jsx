import { Modal, Button,Form } from "react-bootstrap"
import { useState } from "react"


export const AddCustomer = ({close,save}) => {
       const [customer,setCustomer] = useState({
        name:"",
        email:"",
        phnNo:null,
        address:""
    })
    const handleClose=()=>{
        close()
    }
    const handleSave=()=>{
        save(customer)
        close()
    }
    const updateCustomer = (key, value) => {
     setCustomer({
      ...customer,
      [key]: value,
    });
  }

    return (
        
        <Modal show={true} backdrop="static" >
            <Modal.Header>
                <Modal.Title>Add Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="d-flex flex-column gap-3">

                    <Form.Group >
                        <Form.Label>CustomerName</Form.Label>
                        <Form.Control type="text" placeholder="name" onChange={(e)=> updateCustomer ("name",e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Customer Email</Form.Label>
                        <Form.Control type="email" placeholder="abc@gmail.com" onChange={(e)=> updateCustomer ("email",e.target.value)} />
                    </Form.Group>
                    <div className="d-flex gap-2">
                    <Form.Group className="w-100">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="Number" placeholder="12345678" onChange={(e)=> updateCustomer ("phnNo",e.target.value)} />
                    </Form.Group>
                    <Form.Group className="w-100">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Trichy" onChange={(e)=> updateCustomer ("address",e.target.value)}/>
                    </Form.Group>
                    </div>
                    </div>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}