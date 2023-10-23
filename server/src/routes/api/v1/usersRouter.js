import express from "express"
import { User } from "../../../models/index.js"

const usersRouter = new express.Router()


usersRouter.get("/:id", async (req, res) => {
    const userId = req.params.id
    const user = await User.query().findById(userId)

    const beanieBabiesArray = await user.$relatedQuery("beanieBabies")
    user.beanieBabies = beanieBabiesArray

    res.status(200).json({ user: user })
})

export default usersRouter
