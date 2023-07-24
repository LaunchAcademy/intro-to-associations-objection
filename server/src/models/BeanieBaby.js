const Model = require("./Model")

class BeanieBaby extends Model {
  static get tableName() {
    return "beanieBabies"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "color", "releaseYear"],
      properties: {
        name: { type: "string" },
        color: { type: "string" },
        releaseYear: { 
          type: ["integer", "string"],
          minimum: 1960
        },
        hasTag: { type: ["boolean", "string"] }
      }
    }
  }

  static get relationMappings() {
    const { User } = require("./index")

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