import express from "express"
import { User } from "../../../models/index.js"

const usersRouter = new express.Router()


usersRouter.use("/:id", async (req, res) => {
    const userId = req.params.id
    const user = await User.query().findById(userId)
    user.statuses = await user.$relatedQuery("statuses")

    res.status(200).json({ user: user })
})

export default usersRouter
