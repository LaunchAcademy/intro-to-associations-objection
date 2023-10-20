import express from "express"
import { User } from "../../../models/index.js"

const usersRouter = new express.Router()


usersRouter.use("/:id", async (req, res) => {
    const userId = req.params.id
    const user = await User.query().findById(userId)
    // user.statuses = await Status.query().where({ userId: user.id })
    user.statuses = await user.$relatedQuery("statuses")
    
    user.slinkies = await user.$relatedQuery("slinkies")

    res.status(200).json({ user: user })
})

// const statusOne = await Status.query().first()
// await statusOne.user = statusOne.$relatedQuery("user")

export default usersRouter
