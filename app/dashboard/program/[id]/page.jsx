import ProgramForm from '@/components/form/program-form';
import { updateProgram } from '@/lib/actions';
import { getProgramById } from '@/lib/prismaFunctions';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const program = await getProgramById(params.id);

  if (!program) {
    notFound();
  }

  return <ProgramForm formAction={updateProgram} initialData={program} />;
}
