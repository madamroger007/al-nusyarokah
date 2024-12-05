import ProgramForm from '@/components/form/program-form';
import { addProgram } from '@/lib/actions';

export default function Page() {
  return <ProgramForm formAction={addProgram} initialData={null} />;
}
