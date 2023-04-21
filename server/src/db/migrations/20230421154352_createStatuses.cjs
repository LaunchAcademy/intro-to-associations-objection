/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("statuses", (table) => {
    table.bigIncrements("id")
    table.string("body").notNullable()
    table.string("privacy").notNullable()

    table.bigInteger("userId").notNullable().unsigned().index().references("users.id")

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
