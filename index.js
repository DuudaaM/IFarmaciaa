const Sequelize= require("sequelize");
const RouteGeneric = require('./routes/RouteGeneric')
const ServiceGeneric = require('./service/ServiceGeneric')
const db = require("./db");
const cors = require('cors');
const express = require("express");
const Farmaceutico = require("./model/Farmaceutico")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Farmaceutico.create({nome:"Carla"}),
Farmaceutico.create({email:"fulano00@gmail"}),
Farmaceutico.create({senha:"1234ffx"})
}

async function consultar(){
  const farmaceutico = Farmaceutico.findAll();
  console.log(farmaceutico)
}

sincronizar();
inserir();
consultar();

const Sequelize= require("sequelize");
const RouteGeneric = require('./routes/RouteGeneric')
const ServiceGeneric = require('./service/ServiceGeneric')
const db = require("./db");
const cors = require('cors');
const express = require("express");
const Farmacia = require("./model/Farmacia")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Farmacia.create(receita:"xxxx durante y dias, z vezes ao dia")
}

async function consultar(){
  const farmacia = Farmacia.findAll();
  console.log(farmacia)
}

sincronizar();
inserir();
consultar();

const Sequelize= require("sequelize");
const RouteGeneric = require('./routes/RouteGeneric')
const ServiceGeneric = require('./service/ServiceGeneric')
const db = require("./db");
const cors = require('cors');
const express = require("express");
const Medicamento = require("./model/Medicamento")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Medicamento.create({nome:"Dipirona"}),
Medicamento.create({quantidade:7})
}

async function consultar(){
  const medicamento = Medicamento.findAll();
  console.log(medicamento)
}

sincronizar();
inserir();
consultar();

const Sequelize= require("sequelize");
const RouteGeneric = require('./routes/RouteGeneric')
const ServiceGeneric = require('./service/ServiceGeneric')
const db = require("./db");
const cors = require('cors');
const express = require("express");
const Medico = require("./model/Medico")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Medico.create({nome:"Carlos"}),
Medico.create({crm:34578790}),
Medico.create({email:"cicrano11@gmail.com"}),
Medico.create({senha:"546763ggx"})
}

async function consultar(){
  const medico = Medico.findAll();
  console.log(medico)
}

sincronizar();
inserir();
consultar();


const Sequelize= require("sequelize");
const RouteGeneric = require('./routes/RouteGeneric')
const ServiceGeneric = require('./service/ServiceGeneric')
const db = require("./db");
const cors = require('cors');
const express = require("express");
const Paciente = require("./model/Paciente")

async function sincronizar(){
  await db.sync();
}

async function inserir(){
Paciente.create({nome:"Clara"})
Paciente.create({numero_SUS:2343616000})
Paciente.create({receita:"xxxxx durante y dias, z vezes ao dia"})

}

async function consultar(){
  const paciente = Paciente.findAll();
  console.log(paciente)
}

sincronizar();
inserir();
consultar();

ROU


