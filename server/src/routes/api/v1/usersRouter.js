import express from "express"
import { User } from "../../../models/index.js"
import UserSerializer from "../../../serializers/UserSerializer.js"

const usersRouter = new express.Router()


usersRouter.get("/", async (req, res) => {
    const users = await User.query()

    res.status(200).json({ users })
})

usersRouter.get("/:id", async (req, res) => {
    const id = req.params.id 

    const user = await User.query().findById(id)

    const serializedUser = await UserSerializer.getDetails(user)

    res.status(200).json({ user: serializedUser })
})

export default usersRouter
