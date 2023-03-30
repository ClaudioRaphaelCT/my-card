const express = require("express");
const router = express.Router();
const { query } = require("../db/conn");

//Controllers
const cartaoAll = require("../controller/cartao-controller");
const cartaoTotal = require("../controller/cartao-total-controller");
const cartaoInserir = require("../controller/cartao-inserir-controller");
const cartaoTotalUser = require("../controller/cartao-user-controller");
const userTotal = require("../controller/user-total-controller");
//ROTAS
router.get("/cartao", cartaoAll.getAll);
router.get("/cartao-total", cartaoTotal.getValorAll);
router.post("/cartao-inserir", cartaoInserir.insertUso);
router.get("/cartao-usuario", cartaoTotalUser.getUser);
router.get("/usuario-total", userTotal.getTotalUser);
module.exports = router;
