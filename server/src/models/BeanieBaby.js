const Model = require("./Model")

class BeanieBaby extends Model {
    static get tableName() {
        return "beanieBabies"
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
