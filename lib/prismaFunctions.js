import  prisma from './prisma';

export async function getTotalProgram() {
  try {
    const totalProgram = await prisma.program.count();
    return totalProgram;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTotalBerita() {
  try {
    const totalBerita = await prisma.berita.count();
    return totalBerita;
  } catch (e) {
    throw new Error(e);
  }
}


export async function getTotalGallery() {
  try {
    const totalGaleri = await prisma.galeri.count();
    return totalGaleri;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getAllProgram() {
  try {
    const program = await prisma.program.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return program;
  } catch (e) {
    console.error("Error fetching all programs:", e);
    throw new Error(e.message);
  }
}

export async function getProgramById(id) {
  try {
    const program = await prisma.program.findUnique({
      where: {
        id,
      },
    });

    return program;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getAllBerita() {
  try {
    const Berita = await prisma.berita.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return Berita;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getBeritaById(id) {
  try {
    const berita = await prisma.berita.findUnique({
      where: {
        id,
      },
    });

    return berita;
  } catch (e) {
    throw new Error(e);
  }
}


export async function getAllGaleri() {
  try {
    const galeri = await prisma.galeri.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return galeri;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getGaleriById(id) {
  try {
    const galeri = await prisma.galeri.findUnique({
      where: {
        id,
      },
    });

    return galeri;
  } catch (e) {
    throw new Error(e);
  }
}
