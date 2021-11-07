import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import './Orders.css'

import useAuth from "../../hooks/useAuth";
const Orders = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [resorts, setResorts] = useState([]);
  
  const [matchedData, setMatchedData] = useState({});
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios
 
      .get("https://eerie-eyeballs-83616.herokuapp.com/products")
      .then((result) => {
        setResorts(result.data);
      });
  }, []);
 
  useEffect(() => {
    const matched = resorts.find((d) => d._id == id);
    setMatchedData(matched);
  }, [id, resorts]);
 
  console.log(user.email);
  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "Pending"
    axios
      .post("https://eerie-eyeballs-83616.herokuapp.com/orders", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Successfully Booking Added");
          reset();
        }
      });
  };
  return (
    <div className="container">
    <Container>
      <Row className="w-100 py-5">
        <Col md={6} className=" ">
          <div className="booking-image-div">
            <img className="img-fluid" src={matchedData?.image} alt="" />
          </div>
          <div>
            <h2 className="text-warning my-3">{matchedData?.name}</h2>
            <h4>
              Booking Code :{" "}
              <span className="text-warning"> {matchedData?.bookingCode}</span>{" "}
            </h4>
            <p className="text-secondary booking-desc mt-3">
              {matchedData?.description}
            </p>
          </div>
        </Col>
        <Col md={6} className="border-start border-2 ">
          <div className="add-booking-container container">
            <h2 className="text-center text-warning"> Book Your Package</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-3 form-wrapper"
            >
              <input
                {...register("name", { required: true })}
                placeholder=" your name"
                className="border-0 field"
              />
 
              <input
                type="number"
                {...register("email", { required: true })}
                placeholder=" your phone number "
                className="border-0 field"
              />
              <input
                type="date"
                className="border-0 field"
                {...register("date", { required: true })}
              />
 
              <input
                {...register("package", { required: true })}
                placeholder=" add package name"
                className="border-0 field"
              />
              <input
                {...register("BookingCode", { required: true })}
                placeholder="add booking code"
                className="border-0 field"
              />
              {errors.exampleRequired && <span>This field is required</span>}
 
              <input
                className="border-0 field bg-info"
                type="submit"
                value="Add Booking"
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
 
export default Orders;
