const router = require("express").Router()
const data = require("../data/phones.json")

router.get("/", (req, res, next) => {
  res.status(200).send(data)
})

router.get("/:id", (req, res, next) => {
  const id = req.params.id
  console.log(id)
  const details = data.find((phone) => {
    return phone.id === id
  })

  if (details) {
    res.json(details)
    console.log(details)
    res.status(200)
  } else {
    res.status(404).send("404 - Details not found")
  }
})

router.get("/*", (req, res, next) => {
  res.status(404).send("404 - Not Found")
})

module.exports = router
