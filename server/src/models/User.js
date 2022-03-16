const Model = require("./Model")

class User extends Model {
  static get tableName() {
    return "users"
  }

  static get relationMappings() {
    const Status = require("./index")

    return {
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
