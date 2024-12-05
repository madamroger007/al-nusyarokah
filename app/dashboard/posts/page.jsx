import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";

import { PlusCircle } from "lucide-react";
import BlogRow from "@/components/blog-row";
import { getAllPosts } from "@/lib/prismaFunctions";

export default async function Page() {
  const blogs = await getAllPosts();
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/dashboard/posts/add"
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="not-sr-only sm:whitespace-nowrap">
                Buat Postingan Berita
              </span>
            </Link>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Postingan Berita</CardTitle>
              <CardDescription>Kelola postingan Berita </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Dibuat pada
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs.map((blog) => (
                    <BlogRow
                      key={blog.id}
                      id={blog.id}
                      title={blog.title}
                      imageUrl={blog.imageUrl}
                      createdAt={blog.createdAt}
                    />
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
