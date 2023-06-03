const Registration = require("../models/registration");

exports.createRegistration = (req, res, next) => {
  const register = new Registration({
    firstName: req.body.firstName,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
  });

  register
    .save()
    .then(() => {
      res
        .status(201)
        .json({ success: true, message: "Participant enregistré." });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ error: error, message: "Erreur d'enregistrement." });
    });
};

exports.readRegistration = (req, res, next) => {
  Registration.find()
    .then((registers) => {
      res.status(200).json({ success: true, registers: registers });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
        message: "Erreur dans le chargement des données.",
      });
    });
};
