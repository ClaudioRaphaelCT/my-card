const { request } = require("../db/conn");

exports.getUser = (req, res) => {
  const user = req.headers.id;
  request.query(`SELECT * FROM vmCartao WHERE ID = ${user}`).then((result) => {
    res.json(result.recordset);
  });
};
