import { useState } from 'react';
import { AddCustomer } from '../modules/AddCustomer';
import { CustomerTable } from '../modules/CustomerTable';
import { Button } from 'react-bootstrap';
export const CustomerDetails = () =>{
    const [inAddCustomer,setInAddCustomer]=useState(false)
    const [saveCustomer,setSaveCustomer]=useState([])
    console.log(saveCustomer)

    return(
        <div className='d-flex flex-column gap-3 mt-3'>
            <div className='d-flex justify-content-end'>
                <Button onClick={()=>setInAddCustomer(true)}>Add Customer</Button>
            </div>
            <CustomerTable customers={saveCustomer}/>
            {
              inAddCustomer &&  (<AddCustomer close={()=>{setInAddCustomer(false)}}
                                             save={(updateCustomer)=>setSaveCustomer([...saveCustomer,updateCustomer])}/>)
            }


        </div>
    )
}