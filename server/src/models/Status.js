const Model = require("./Model")

class Status extends Model {
  static get tableName() {
    return "statuses"
  }

  // ... 

  
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
