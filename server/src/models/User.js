const Model = require("./Model")

class User extends Model {
  static get tableName() {
    return "users"
  }

  static get relationMappings() {
    const { BeanieBaby } = require("./index")

    // `from` indicates the table we're coming from aka this current model
    // coming "from" THIS model
    // going "to" the associated model table, specifying the column
    return {
      beanieBabies: {
        relation: Model.HasManyRelation,
        modelClass: BeanieBaby,
        join: {
          from: "users.id",
          to: "beanieBabies.userId"
        }
      }
    }
  }

  // const nick = await User.query().insertAndFetch({ userName: "Nick", email: "nick@nick.com"})

  // await nick.$relatedQuery("beanieBabies")


  static get jsonSchema() {
    return {
      type: "object",
      required: ["username", "email"],
      properties: {
        username: { type: "string", minLength: 1, maxLength: 20 },
        email: { type: "string", format: "email" }
      }
    }
  }
}

module.exports = User
