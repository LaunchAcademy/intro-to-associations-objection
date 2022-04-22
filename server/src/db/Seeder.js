/* eslint-disable no-console */
import { connection } from "../boot.js"
import configuration from "../config.js"

import User from "../models/User.js"
import Status from "../models/Status.js"

class Seeder {
  static async seed() {
    console.log("seeding...")
    const fang = await User.query().insert({ username: "Fang", email: "pork@buns.com" })
    const kerrin = await User.query().insert({ username: "Kerrin", email: "right@meow.com" })

    await fang.$relatedQuery("statuses").insert({ body: "Pretty cold out today", privacy: "no" })
    // await Status.query().insert({ userId: fang.id, body: "Pretty cold out today", privacy: "no" })

    await fang
      .$relatedQuery("statuses")
      .insert({ body: "Hunter x Hunter was good, but it really jumps around", privacy: "yes" })
    await fang
      .$relatedQuery("statuses")
      .insert({ body: "I'm feeling pretty hungry today. Maybe...pizza?", privacy: "no" })

    await kerrin
      .$relatedQuery("statuses")
      .insert({ body: "The cats are at war and I'm stuck in the middle", privacy: "no" })
    await kerrin.$relatedQuery("statuses").insert({ body: "Going to a BBQ", privacy: "yes" })
    await kerrin.$relatedQuery("statuses").insert({
      body: "Would you rather fight 100 chicken sized T-Rex's or 1 T-Rex sized Chicken?",
      privacy: "no"
    })

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
