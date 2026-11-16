// src/database/knex.ts
import pkg from "knex"

import config from "../../knexfile"

const { knex: createKnex } = pkg

export const knex = createKnex(config)