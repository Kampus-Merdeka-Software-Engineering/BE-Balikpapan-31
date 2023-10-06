const { prisma } = require('../config/prisma');

async function getAllDoctors() {
  try {
    const doctors = await prisma.doctor.findMany();

    return doctors;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

async function createDoctor(doctor) {
  try {
    const mappedDoctor = {
      data: {
        doctor_name: doctor.doctor_name,
        specialist: doctor.specialist,
        license: doctor.license,
        university: doctor.university,
        image: doctor.image,
      }
    };

    const createdDoctor = await prisma.doctor.create(mappedDoctor);

    return createdDoctor
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getAllDoctors,
  createDoctor
};