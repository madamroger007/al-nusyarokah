import ProductForm from '@/components/form/program-form';
import { updateProgram } from '@/lib/actions';
import { getProgramById } from '@/lib/prismaFunctions';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const product = await getProgramById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductForm formAction={updateProgram} initialData={product} />;
}
