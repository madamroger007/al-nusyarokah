"use server";

import { del, put } from "@vercel/blob";

import { blogPostSchema, loginSchema, programSchema,GaleriSchema } from "@/lib/zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function addProgram(prevState, formData) {
  const validatedFields = programSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, description, picture } = validatedFields.data;
  const { url } = await put(name, picture, {
    access: "public",
    multipart: true,
    contentType: picture.type,
  });

  try {
    await prisma.program.create({
      data: {
        name,
        description,
       
        imageUrl: url,
      },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to add product",
      },
    };
  }

  revalidatePath("/dashboard/program");
  redirect("/dashboard/program");
}

export async function updateProgram(prevState, formData) {
  const validatedFields = programSchema.omit({ picture: true }).safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    shopeeUrl: formData.get("shopeeUrl"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    console.log("error", validatedFields.error.flatten().fieldErrors);
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, description } = validatedFields.data;

  try {
    await prisma.program.update({
      where: { id: prevState.id },
      data: {
        name,
        description,
     
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to update program",
      },
    };
  }

  revalidatePath("/dashboard/program");
  redirect("/dashboard/program");
}

export async function deleteProgram(id) {
  const program = await prisma.program.findUnique({
    where: { id },
  });

  if (!program) {
    return {
      error: {
        message: "program not found",
      },
    };
  }

  await del(program.imageUrl);
  try {
    await prisma.program.delete({
      where: { id },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to delete program",
      },
    };
  }

  revalidatePath("/dashboard/program");
}

/*************************************** Blog *******************************************/

export async function addBlogPost(prevState, formData) {
  const validatedFields = blogPostSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  console.log(validatedFields.success);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, description, picture } = validatedFields.data;
  const { url } = await put(title, picture, {
    access: "public",
    multipart: true,
    contentType: picture.type,
  });

  try {
    await prisma.blogPosts.create({
      data: {
        title,
        description,
        imageUrl: url,
      },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to add blog post",
      },
    };
  }

  revalidatePath("/dashboard/posts");
  redirect("/dashboard/posts");
}

export async function deleteBlogPost(id) {
  const blogPost = await prisma.blogPosts.findUnique({
    where: { id },
  });

  if (!blogPost) {
    return {
      error: {
        message: "Blog post not found",
      },
    };
  }
  await del(blogPost.imageUrl);
  try {
    await prisma.blogPosts.delete({
      where: { id },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to delete blog post",
      },
    };
  }

  revalidatePath("/dashboard/posts");
}


/*************************************** Galeri *******************************************/

export async function addGaleri(prevState, formData) {
  const validatedFields = GaleriSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  console.log(validatedFields.success);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, description, picture } = validatedFields.data;
  const { url } = await put(title, picture, {
    access: "public",
    multipart: true,
    contentType: picture.type,
  });

  try {
    await prisma.galeri.create({
      data: {
        title,
        description,
        imageUrl: url,
      },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to add galeri",
      },
    };
  }

  revalidatePath("/dashboard/galeri");
  redirect("/dashboard/galeri");
}



export async function deleteGaleri(id) {
  const blogPost = await prisma.galeri.findUnique({
    where: { id },
  });

  if (!blogPost) {
    return {
      error: {
        message: "Galeri not found",
      },
    };
  }
  await del(blogPost.imageUrl);
  try {
    await prisma.galeri.delete({
      where: { id },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to delete Galeri",
      },
    };
  }

  revalidatePath("/dashboard/posts");
}


/*************************************** Auth *******************************************/


export async function login(prevState, formData) {
  const validatedFields = loginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { username, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Username atau password salah" };
        default:
          return { error: "Username atau password salah" };
      }
    }

    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/auth/login" });
}
