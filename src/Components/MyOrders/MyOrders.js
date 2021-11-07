import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Table, Button, Container } from "react-bootstrap";
const MyOrders = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    axios
      .get(
        `https://eerie-eyeballs-83616.herokuapp.com/myBookings/${user?.email}`
      )
      .then((result) => setBookings(result?.data));
  }, [user.email, isLoading]);
 
  // Handle Booking Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you really want to Cancel this order?");
    if (proceed) {
    axios
      .delete(
        `https://eerie-eyeballs-83616.herokuapp.com/deleteBooking/${id}`
      )
      .then((result) => {
        console.log(result);
        if (result.data.deletedCount) {
          setIsLoading(!false);
        }
      });
    }
  };

 //Handle Status
  const handleApprove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to approve this Booking?");
    if (proceed) {
      axios
        .put(
          `https://tour-tush.herokuapp.com/approveBooking/${id}`
        )
        .then((result) => {
          if (result.data.modifiedCount) {
            setIsLoading(!false);
          }
        });
    }
  }




  return ( <div className="container">
    
    
    
    <Container style={{ minHeight: "80vh" }}>
      <Table responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Booking Code</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((BR, index) => (
            <tr key={BR._id}>
              <td>{index + 1} </td>
              <td>{BR?.name}</td>
              <td>{BR?.email}</td>
              <td>{BR?.date}</td>
              <td>{BR?.BookingCode}</td>
              
             
              
              <td>
              <Button variant="info" className="text-white"onClick={() => handleApprove(BR._id)}>{BR?.status}</Button> 
              
              </td>
              <td>
              <Button onClick={() => handleRemove(BR._id)}> Cancel </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
);
};
 
export default MyOrders; 