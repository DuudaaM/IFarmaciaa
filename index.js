const Sequelize= require("sequelize");
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const db = require("./db");
const cors = require('cors');
const express = require("express");
const Farmaceutico = require("./model/Farmaceutico")
const Farmacia = require("./model/Farmacia")
const Medicamento = require("./model/Medicamento")
const Medico = require("./model/Medico")
const Paciente = require("./model/Paciente")

/*
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


async function inserir(){
Farmacia.create({receita:"xxxx durante y dias, z vezes ao dia"})
}

async function consultar(){
  const farmacia = Farmacia.findAll();
  console.log(farmacia)
}

async function inserir(){
Medicamento.create({nome:"Dipirona"}),
Medicamento.create({quantidade:7})
}

async function consultar(){
  const medicamento = Medicamento.findAll();
  console.log(medicamento)
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

async function inserir(){
Paciente.create({nome:"Clara"})
Paciente.create({numero_SUS:2343616000})
Paciente.create({receita:"xxxxx durante y dias, z vezes ao dia"})

}

async function consultar(){
  const paciente = Paciente.findAll();
  console.log(paciente)
}
*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('API de Farmácia ativa!!!')
});

Route("/farmaceutico",app,new Service(Farmaceutico));
Route("/farmacia",app,new Service(Farmacia));
Route("/medicamento",app,new Service(Medicamento));
Route("/medico",app,new Service(Medico));
Route("/paciente",app,new Service(Paciente));

app.listen(3000, () => console.log("Servidor iniciado!"));