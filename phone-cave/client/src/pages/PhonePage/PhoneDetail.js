import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Container, ListGroup, Image, Col, Button } from "react-bootstrap"

const API_URL = process.env.REACT_APP_SERVER_URL

function PhoneDetail({ phone }) {
  // const imageUrl = `${API_URL}${phone.image}`
  // console.log(imageUrl)
  return (
    <>
      <h2>Phone Details</h2>
      <h3>Name: {phone.name}</h3>
      <p>Brand: {phone.brand}</p>
      <p>Price: ${phone.price}</p>
      <p>Color : {phone.color}</p>
      <p>Processor : {phone.processor}</p>
      <img
        src={phone.image}
        h={phone.image}
        alt={phone.name}
        style={{ width: "auto", height: "200px", padding: "16px" }}
      />
    </>
  )
}

export default PhoneDetail
