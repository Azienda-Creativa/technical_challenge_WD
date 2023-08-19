import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Container, ListGroup, Image, Col, Button } from "react-bootstrap"

const API_URL = process.env.REACT_APP_SERVER_URL

function PhoneDetail({ phone }) {
  return (
    <div>
      <div>
        <h2>Phone Details</h2>
        <h3>Name: {phone.name}</h3>
        <p>Brand: {phone.brand}</p>
        <p>Price: ${phone.price}</p>PhoneDetail
        <p>{phone.image}</p>
      </div>
    </div>
  )
}

export default PhoneDetail
