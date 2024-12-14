import { TableRow, TableCell } from "@/components/ui/table";
import DeleteBeritaButton from "@/components/berita/delete-berita-button";
import Image from "next/image";
import { ConvertTime } from "@/lib/time";
import EditBeritaButton from "./edit-berita-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

export default function BeritaRow({ id, title, imageUrl, createdAt, updatedAt }) {

  const { timeAgo:created } = ConvertTime(createdAt);
  const { timeAgo:updated } = ConvertTime(updatedAt);

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Berita image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={imageUrl}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell className="hidden md:table-cell">{created}</TableCell>
      <TableCell className="hidden md:table-cell">{updated}</TableCell>
      <TableCell>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup='true' size='icon' variant='ghost'>
              <MoreHorizontal className='h-4 w-4' />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' >
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            <EditBeritaButton id={id} />
            <DeleteBeritaButton id={id} />

          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
