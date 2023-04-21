const Model = require("./Model")

class Status extends Model {
  static get tableName() {
    return "statuses"
  }

  static get relationMappings() {
    const User = require("./User")


    // Status belongs to a User (singular)
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "statuses.userId",
          to: "users.id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["body", "privacy"],
      properties: {
        body: { type: "string", minLength: 1, maxLength: 255 },
        privacy: { type: "string" },
        userId: { type: "integer" }
      }
    }
  }
}

module.exports = Status
