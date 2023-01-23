import express from "express"
import { User } from "../../../models/index.js"
import UserSerializer from "../../../serializers/UserSerializer.js"

const usersRouter = new express.Router()


usersRouter.get("/", async (req, res) => {
    const users = await User.query()
    const serializedUsers = UserSerializer.getSummary(users)

    res.status(200).json({ users: serializedUsers })
})

usersRouter.get("/:id", async (req, res) => {
    const userId = req.params.id
    const user = await User.query().findById(userId)
    const serializedUser = await UserSerializer.getDetails(user)
    // user.statuses = await user.$relatedQuery("statuses")

    res.status(200).json({ user: serializedUser })
})

export default usersRouter
