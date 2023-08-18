import "./PhonePage.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, ListGroup, Image, Col } from "react-bootstrap"

function PhonePage() {
  const [phones, setPhones] = useState([])
  const [isLoading, setIsLoading] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:5006/phones")
      .then((res) => res.data)
      .then((data) => {
        setPhones(data)
        setIsLoading(false)
        //console.log(data)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error(error)
      })
  }, [])

  if (isLoading) return <h3 className="alert"> Loading...</h3>
  if (!phones) return <h3 className="alert"> No phones available </h3>
  //  <-- use bootsrap classes
  else
    return (
      <>
        {" "}
        {/* Apply custom class for styling */}
        <h3 className="mb-4">List of Phones</h3>
        {isLoading ? <h5>Loading...</h5> : <ListGroup>{phones.length > 0 ? phones.map((phone) => <ListGroup.Item key={phone.id}>{phone.name}</ListGroup.Item>) : <h5>No phones available</h5>}</ListGroup>}
      </>
    )
}

export default PhonePage
