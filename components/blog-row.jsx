import { TableRow, TableCell } from "@/components/ui/table";
import DeleteBlogButton from "@/components/delete-blog-button";
import Image from "next/image";

export default function BlogRow({ id, title,imageUrl, createdAt }) {
  const date = createdAt.toLocaleString();

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Blog image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={imageUrl}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell className="hidden md:table-cell">{date}</TableCell>
      <TableCell>
        <DeleteBlogButton id={id} />
      </TableCell>
    </TableRow>
  );
}
