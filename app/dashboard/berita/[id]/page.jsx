import BeritaForm from '@/components/form/berita-form';
import { updateBerita } from '@/lib/actions';
import { getBeritaById } from '@/lib/prismaFunctions';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const program = await getBeritaById(params.id);

  if (!program) {
    notFound();
  }

  return <BeritaForm formAction={updateBerita} initialData={program} />;
}
