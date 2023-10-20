/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("slinkies", (table) => {
    table.bigIncrements("id")
    table.string("name").notNullable()
    table.string("color").notNullable()
    table.string("material")

    table.bigInteger("userId").notNullable().index().unsigned().references("users.id")

    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("slinkies")
}
