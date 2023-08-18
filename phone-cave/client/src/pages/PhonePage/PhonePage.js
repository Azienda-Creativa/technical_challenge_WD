import "./PhonePage.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Container, ListGroup, Image, Col, Button } from "react-bootstrap"

const API_URL = process.env.REACT_APP_SERVER_URL

function PhonePage() {
  const [phones, setPhones] = useState([])
  const [isLoading, setIsLoading] = useState(null)

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${API_URL}/phones`)
        const data = response.data
        setPhones(data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(error)
      }
    }
    getData()
  }, [])

  const getDetails = async () => {
    const response = axios.get(`${API_URL}/phones/${id}`)
    const data = response.data
  }

  if (isLoading) return <h3 className="alert"> Loading...</h3>
  if (!phones) return <h3 className="alert"> No phones available </h3>
  else
    return (
      <>
        {" "}
        {/* Apply custom class for styling */}
        <h3 className="mb-4">List of Phones</h3>
        {isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <ListGroup style={{ display: "flex", margin: "10% ", flexWrap: "wrap", justifyContent: "center" }}>
            {phones.length > 0 ? (
              phones.map((phone) => (
                <ListGroup.Item
                  style={{ display: "flex", flexDirection: "column", padding: "10px" }}
                  key={phone.id}>
                  {phone.name}
                  <Button
                    onClick={() => getDetails()}
                    style={{ maxWidth: "100px" }}>
                    see details
                  </Button>
                </ListGroup.Item>
              ))
            ) : (
              <h5>No phones available</h5>
            )}
          </ListGroup>
        )}
      </>
    )
}

export default PhonePage
