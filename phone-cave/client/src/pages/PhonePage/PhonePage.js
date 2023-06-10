import "./PhonePage.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, ListGroup, ListGroupItem, Image, Col } from "react-bootstrap"

function PhonePage({ phones }) {
  return (
    <Container>
      <h1>Phone page</h1>
      <ListGroup as={"ul"}>
        {phones.map((phone) => {
          return (
            <ListGroupItem
              className="justify-content-center "
              key={phone.id}>
              <Image
                className="p-3 m-3 d-flex-center"
                src={`/assets/images/${phone.image}`}
                alt="flag"
              />
            </ListGroupItem>
          )
        })}
      </ListGroup>
    </Container>
  )
}

export default PhonePage
