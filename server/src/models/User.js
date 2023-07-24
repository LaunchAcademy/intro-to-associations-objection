const Model = require("./Model")

class User extends Model {
  static get tableName() {
    return "users"
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

  static get relationMappings() {
    const { BeanieBaby } = require("./index")

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
}

module.exports = User
