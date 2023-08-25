const router = require("express").Router()
const data = require("../data/phones.json")

router.get("/", (req, res, next) => {
  res.status(200).send(data)
})

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const details = await data.find((phone) => {
      return phone.id === id
    })

    if (details) {
      res.status(200).send(details)
      console.log(` Details : ${details}`)
    } else {
      res.status(404).send("404 - Phone id not found" + error.message)
    }
  } catch (error) {
    res.status(500).send("internal error: " + error.message)
  }
})

router.get("/*", (req, res, next) => {
  res.status(404).send("404 - Not Found")
})

module.exports = router
