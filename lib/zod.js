import { z } from "zod";

export const programSchema = z.object({
  name: z.string().min(1, { message: "Nama tidak valid" }),
  description: z.string().min(1, { message: "Deskripsi harus ditambahkan" }),
  picture: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Gambar harus ditambahkan" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Hanya menerima file gambar",
    })
    .refine((file) => file.size < 2 * 1024 * 1024, {
      message: "Ukuran file harus kurang dari 2MB",
    }),
});

export const blogPostSchema = z.object({
  title: z.string().min(1, { message: "Masukkan judul postingan" }),
  description: z.string().min(1, { message: "Masukkan description postingan" }),
  picture: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Gambar harus ditambahkan" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Hanya menerima file gambar",
    })
    .refine((file) => file.size < 2 * 1024 * 1024, {
      message: "Ukuran file harus kurang dari 2MB",
    }),
});


export const GaleriSchema = z.object({
  title: z.string().min(1, { message: "Masukkan judul postingan" }),
  description: z.string().min(1, { message: "Masukkan description postingan" }),
  picture: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Gambar harus ditambahkan" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Hanya menerima file gambar",
    })
    .refine((file) => file.size < 2 * 1024 * 1024, {
      message: "Ukuran file harus kurang dari 2MB",
    }),
});

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Masukkan username" }),
  password: z.string().min(1, { message: "Masukkan password" }),
});
