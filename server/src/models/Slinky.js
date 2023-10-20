const Model = require("./Model")


class Slinky extends Model {
  static get tableName() {
    return "slinkies"
  }

  static get relationMappings() {
    const { User } = require("./index.js")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "slinkies.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Slinky