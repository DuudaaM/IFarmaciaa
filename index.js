const Sequilize = require("sequilize");
const db = require("./db");
const Farmaceutico = require("./model/Farmaceutico")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Farmaceutico.create({nome:"Carla"})
}

async function consultar(){
  const farmaceutico = Farmaceutico.findAll();
  console.log(farmaceutico)
}

sincronizar();
inserir();
consultar();

const Sequilize = require("sequilize");
const db = require("./db");
const Farmacia = require("./model/Farmacia")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Farmacia.create(receita)
}

async function consultar(){
  const farmacia = Farmacia.findAll();
  console.log(farmacia)
}

sincronizar();
inserir();
consultar();

const Sequilize = require("sequilize");
const db = require("./db");
const Medicamento = require("./model/Medicamento")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Medicamento.create({nome:"Carla"})
}

async function consultar(){
  const farmaceutico = Farmaceutico.findAll();
  console.log(farmaceutico)
}

sincronizar();
inserir();
consultar();

