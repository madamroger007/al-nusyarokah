import BeritaForm from '@/components/form/berita-form';
import { addBerita } from '@/lib/actions';

export default function Page() {
  return <BeritaForm formAction={addBerita} initialData={null} />;
}
