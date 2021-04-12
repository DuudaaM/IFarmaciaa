const Sequelize= require("sequelize");
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const db = require("./db");
const cors = require('cors');
const express = require("express");
const Farmaceutico = require("./model/Farmaceutico")
const Farmacia = require("./model/Farmacia")
const Estoque = require("./model/Estoque")
const Medico = require("./model/Medico")
const Paciente = require("./model/Paciente")
const Receita = require("./model/Receita")

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authorization = require("./authorization")

async function sincronizar(){
  await db.sync({force:true});
}
//sincronizar()
/*
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
Estoque.create({nome:"Dipirona"}),
Estoque.create({quantidade:7})
}

async function consultar(){
  const estoque = Estoque.findAll();
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

Route("/farmacia",app,new Service(Farmacia),  authorization);
Route("/estoque",app,new Service(Estoque),  authorization);
Route("/medico",app,new Service(Medico),  authorization);
Route("/paciente",app,new Service(Paciente),  authorization);
Route("/receita",app,new Service(Receita),  authorization);


app.get("/estoque/:id/nome", async (req, res) => {
  const nome = await Nome.findAll({where:{EstoqueId:req.params.id}});
  res.send({nome});
});
app.get("/estoque/:id/quantidade", async (req, res) => {
  const quantidade = await Quantidade.findAll({where:{EstoqueId:req.params.id}});
  res.send({quantidade});
});

app.listen(3000, () => console.log("Servidor iniciado!"));

async function gerarHash(password) {
  return await bcryptjs.hash(password, 10)
}

app.post("/cadastrar", async (req, res) => {
  const {nome, email, senha} = req.body;
  const u = await Farmaceutico.create({nome, email, senha:(await gerarHash(senha))});
  u.senha = undefined;
  res.send(u);
})

app.post("/autenticar", async (req, res) => {
  const {email, senha} = req.body;
  const usu = await Farmaceutico.findOne({where:{email}});
  if(!usu || !senha) {
    res.status(400).send("Credenciais inválidas");
  } else if(bcryptjs.compareSync(senha, usu.senha)){
    const token = jwt.sign(
      {email},
      process.env.SECRET,
      {expiresIn:3600}
    );
    res.send({email, token})
  } else {
    res.status(400).send("Credenciais inválidas")
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})

