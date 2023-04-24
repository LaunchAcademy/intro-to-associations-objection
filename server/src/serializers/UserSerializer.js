import BeanieBabySerializer from "./BeanieBabySerializer.js"

class UserSerializer {
  static getSummary(users) {
    // intended to serializer an array of users

    // define necessary/ wanted attributes
    const requiredAttributes = ["id", "username"]
    // iterate over all the users, filter for required attributes
    const serializedUsers = users.map((user) => {
      // create an object to assign properties to
      let serializedUser = {}
      
      // iterate over the attributes 
      for (const attribute of requiredAttributes) {
        // assign value of passed user to serialized user object
        serializedUser[attribute] = user[attribute]
      }
      // return the new object
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

    const beanieBabies = await user.$relatedQuery("beanieBabies")

    const serializedBeanieBabies = BeanieBabySerializer.getSummary(beanieBabies)

    serializedUser.beanieBabies = serializedBeanieBabies

    return serializedUser
  }
}

export default UserSerializer