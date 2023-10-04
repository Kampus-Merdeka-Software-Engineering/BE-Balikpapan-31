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
        nama: pasien.nama,
        email: pasien.email,
        no_hp: pasien.no_hp,
        nama_dokter: pasien.nama_dokter,
        pesan: pasien.pesan,
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