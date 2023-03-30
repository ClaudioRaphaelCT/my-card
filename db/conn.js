const sql = require("mssql/msnodesqlv8");

var connection = {
  database: "MYDB",
  server: "TOPAZ-B6581K3\\",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

sql
  .connect(connection)
  .then(() => console.log("Conexão ao BD bem sucedida"))
  .catch((err) => console.log(err));

const request = new sql.Request();

module.exports = {
  connection,
  request,
};

/*sql.connect(connection, (err) => {
  if (err) {
    console.log(err);
  }
  var request = new sql.Request();

  request.query("select * from cartao", (err, recordSet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(recordSet);
    }
  });
});*/
