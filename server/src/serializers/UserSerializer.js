class UserSerializer {
  static getSummary(users) {
    // intended to serializer an array of users

    // define necessary/ wanted attributes
    const requiredAttributes = ["id", "username"]
    // iterate over all the users, filter for required attributes
    const serializedUsers = users.map((user) => {
      let serializedUser = {}
      // debugger
      for (const attribute of requiredAttributes) {
        // debugger
        serializedUser[attribute] = user[attribute]
      }
      return serializedUser
    })

    // debugger
    return serializedUsers
  }

  static async getDetails(user) {
    const requiredAttributes = ["id", "username", "email"]
    let serializedUser = {}

    for (const attribute of requiredAttributes) {
      serializedUser[attribute] = user[attribute]
    }

    serializedUser.statuses = await user.$relatedQuery("statuses")

    return serializedUser
  }
}

export default UserSerializer