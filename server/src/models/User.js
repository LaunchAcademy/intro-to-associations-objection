const Model = require("./Model")

class User extends Model {
  static get tableName() {
    return "users"
  }

  // User -< BeanieBabies
  // User has many BeanieBabies
  static get relationMappings() {
    const { Status, BeanieBaby } = require("./index")
    // const BeanieBaby = require("./BeanieBaby")

    return {
      beanieBabies: {
        relation: Model.HasManyRelation,
        modelClass: BeanieBaby,
        join: {
          from: "users.id",
          to: "beanieBabies.userId"
        }
      },
      statuses: {
        relation: Model.HasManyRelation,
        modelClass: Status,
        join: {
          from: "users.id",
          to: "statuses.userId"
        }
      }
    }
  }

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
