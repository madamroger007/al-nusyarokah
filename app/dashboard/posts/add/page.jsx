import BlogForm from '@/components/form/blog-form';
import { addBlogPost } from '@/lib/actions';

export default function Page() {
  return <BlogForm formAction={addBlogPost} initialData={null} />;
}
