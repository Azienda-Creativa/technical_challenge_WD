const router = require("express").Router()
const data = require("../../../data/phones.json")
//console.log(data)

router.get("/", (req, res, next) => {
  res.json("All good in here at home")
})

router.get("/phones", (req, res, next) => {
  // Send the phones as a response
  res.json("GET phones works", data)
  console.log(data)
})

router.get("/phones/:id"),
  (req, res, next) => {
    const { phoneId } = req.params
    res.json("GET phone works", data.phoneId)
    console.log(data.phoneId)
  }

module.exports = router
