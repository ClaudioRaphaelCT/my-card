const { request } = require("../db/conn");

exports.getValorAll = (req, res) => {
  request.query("SELECT SUM(VALOR) AS Total FROM CARTAO").then((result) => {
    res.json(result.recordset);
  });
};
