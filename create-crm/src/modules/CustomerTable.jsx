import { useState } from "react";
import { Table } from "react-bootstrap";

export const CustomerTable=({customers})=>{
 
    return(
        <div>
            <Table striped bordered>
                <thead>
                    <tr>

                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer,i)=>{
                            
                            return <tr key={i}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phnNo}</td>
                                <td>{customer.address}</td>

                            </tr>
                        })
                    }
                    
                </tbody>
            </Table>

        </div>
    )
    
}