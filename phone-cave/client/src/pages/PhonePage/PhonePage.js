import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { ListGroup, Button } from "react-bootstrap"
import PhoneDetail from "./PhoneDetail"

const API_URL = process.env.REACT_APP_SERVER_URL

function PhonePage() {
  const [phones, setPhones] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPhone, setSelectedPhone] = useState(null)

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

  const findById = async (phoneId) => {
    try {
      const response = await axios.get(`${API_URL}/phones/${phoneId}`)
      const data = response.data
      setSelectedPhone(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h3 className="mb-4">List of Phones</h3>
      {isLoading ? (
        <h5>Loading...</h5>
      ) : (
        <div>
          {/* Render the PhoneDetail component if a phone is selected */}
          {selectedPhone && <PhoneDetail phone={selectedPhone} />}

          <ListGroup
            style={{
              display: "flex",
              margin: "10%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
            {phones.length > 0 ? (
              phones.map((phone) => (
                <ListGroup.Item
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                  key={phone.id}>
                  {phone.name}
                  <Button
                    onClick={() => findById(phone.id)} // Pass the phone id as an argument
                    style={{ maxWidth: "100px" }}>
                    see details
                  </Button>
                </ListGroup.Item>
              ))
            ) : (
              <h5>No phones available</h5>
            )}
          </ListGroup>
        </div>
      )}
    </>
  )
}

export default PhonePage
