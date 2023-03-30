const { request } = require("../db/conn");

exports.getTotalUser = (req, res) => {
  const user = req.headers.id;
  request
    .query(
      `SELECT Nome, SUM(VALOR)AS Total FROM vmCartao WHERE ID = ${user} group by nome`
    )
    .then((result) => {
      res.json(result.recordset);
    });
};
