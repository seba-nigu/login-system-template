const config = require("./dbConfig");
const sql = require("mssql");

const createRegister = async (Login) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool
      .request()
      .query(
        `INSERT INTO [user] VALUES('${Login.username}', '${Login.email}', '${Login.password}');`
      );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLogin = async (email) => {
  try {
    let pool = await sql.connect(config);
    let data = pool
      .request()
      .query(`SELECT * FROM [user] WHERE email ='${email}'`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRegister,
  getLogin,
};
