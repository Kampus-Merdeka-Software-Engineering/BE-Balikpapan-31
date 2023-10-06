const { pasienService } = require('../services')

async function getPasiens(req, res)  {
  const pasiens = await pasienService.getAllPasiens();

  res.status(200).json(pasiens);
}

async function createPasien(req, res) {
  const pasien = req.body;

  const createdPasien = await pasienService.createPasien(pasien);

  res.status(201).json({
    message: 'pasien created',
    data: createdPasien
  });
}

module.exports = {
  getPasiens,
  createPasien
};