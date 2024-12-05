import  prisma from './prisma';

export async function getTotalProgram() {
  try {
    const totalProgram = await prisma.program.count();
    return totalProgram;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTotalPosts() {
  try {
    const totalPosts = await prisma.blogPosts.count();
    return totalPosts;
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

export async function getAllPosts() {
  try {
    const posts = await prisma.blogPosts.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return posts;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getPostById(id) {
  try {
    const post = await prisma.blogPosts.findUnique({
      where: {
        id,
      },
    });

    return post;
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
