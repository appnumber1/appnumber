const User = require("./collectionSchema");
exports.getUsers = (req, res) => {
  User.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getUser = (req, res) => {
  let id = req.params.id;
  let idusuarios =req.params.idusuarios;
  let username=req.params.username;
  let contraseña=req.params.contraseña;
  let usuariosregistrados=req.params.usuariosregistrados;
  let idusuariosregistrados=req.params.idusuariosregistrados;
  let nombre=req.params.nombre;
  let edad=req.params.edad;
  let ciudad=req.params.ciudad;
  let email=req.params.email;
  let grado=req.params.grado;

  User.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newUser);
  });
};

exports.updateUser = (req, res) => {
  let idusuarios=req.body.iduarios;
  User.findOneAndUpdate(
    req.params.id,req.body,{new:true },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
