const { doctorService } = require('../services')

async function getDoctors(req, res)  {
  const doctors = await doctorService.getAllDoctors();

  res.status(200).json(doctors);
}

async function createDoctor(req, res) {
  const doctor = req.body;

  const createdDoctor = await doctorService.createDoctor(doctor);

  res.status(201).json({
    message: 'doctor created'
  });
}

module.exports = {
  getDoctors,
  createDoctor
};