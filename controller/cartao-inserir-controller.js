const { request } = require("../db/conn");

exports.insertUso = (req, res) => {
  const { id, local, valor, data } = req.headers;
  request
    .query(
      `INSERT INTO CARTAO (ID_USUARIO,LOCAL, VALOR, DATA) VALUES ( ${id} ,'${local}', ${valor}, '${data}')`
    )
    .then((result) => {
      res.json({ status: "Uso registrado com sucesso!" });
    });
};
