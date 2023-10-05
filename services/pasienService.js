const { prisma } = require('../config/prisma');

async function getAllPasiens() {
  try {
    const pasiens = await prisma.pasien.findMany();

    return pasiens;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

async function createPasien(pasien) {
  try {
    const mappedPasien = {
      data: {
        pasien_name: pasien.pasien_name,
        gender: pasien.gender,
        age: pasien.age,
        phone_number: pasien.phone_number,
        email: pasien.email,
        service: pasien.service,
        doctor_name: pasien.doctor_name,
        complaint: pasien.complaint,
      }
    };

    const createdPasien = await prisma.pasien.create(mappedPasien);

    return createdPasien
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getAllPasiens,
  createPasien
};