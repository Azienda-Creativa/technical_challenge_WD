const router = require("express").Router()
const data = require("../data/phones.json")

router.get("/", (req, res, next) => {
  res.json(data)
})

router.get("/:id", (req, res, next) => {
  const { id } = req.params
  const details = data.find((phone) => {
    return phone.id === id
  })

  res.json("GET phones works", data)
  console.log(details)
})

router.get("/*", (req, res, next) => {
  res.status(404).send("404 - Not Found")
})

module.exports = router
