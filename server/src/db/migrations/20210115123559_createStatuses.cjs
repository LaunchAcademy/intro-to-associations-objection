/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("statuses", (table) => {
    table.bigIncrements("id").primary()
    table.text("body").notNullable()
    table.string("privacy").notNullable()

    // unsigned: positive integer 
    // index: improves query time against this column IF there are many records, and if a number
    // refrences: our queries will work without this. however, this adds a dependency such that a status cant be added without a user, and a user cant be deleted without also deleting the statuses
    table.bigInteger("userId").unsigned().notNullable().references("users.id").index()

    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("statuses")
}
