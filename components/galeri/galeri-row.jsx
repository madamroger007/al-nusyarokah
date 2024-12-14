import { TableRow, TableCell } from "@/components/ui/table";
import Image from "next/image";
import { ConvertTime } from "@/lib/time";
import DeleteGaleriButton from "./delete-galeri-button";


export default function GaleriRow({ id, title, imageUrl, createdAt }) {

    const { timeAgo } = ConvertTime(createdAt);
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
            <TableCell className="hidden md:table-cell">{timeAgo}</TableCell>
            <TableCell className="hidden md:table-cell">  <DeleteGaleriButton id={id} /></TableCell>


        </TableRow>
    );
}
