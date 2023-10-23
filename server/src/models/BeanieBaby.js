const Model = require("./Model")

class BeanieBaby extends Model {
  static get tableName() {
    return "beanieBabies"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        color: { type: "string" },
        hasTag: { type: ["boolean", "string"] },
        releaseYear: { type: ["integer", "string"] },
        userId: { type: ["integer", "string"] }
      }
    }
  }

  // BeanieBaby >- User
  // BeanieBaby belongs to a User
  static get relationMappings() {
    const User = require("./User")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "beanieBabies.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = BeanieBaby