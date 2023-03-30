const { request } = require("../db/conn");

exports.getAll = (req, res) => {
  request.query("SELECT * FROM vmCartao").then((result) => {
    res.json(result.recordset);
  });
};
