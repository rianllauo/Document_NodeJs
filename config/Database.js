import { Sequelize } from "sequelize";

const db = new Sequelize('jwt_auth', 'root', '', {
   host : "localhost",
   dialect: "mysql"
})

export default db