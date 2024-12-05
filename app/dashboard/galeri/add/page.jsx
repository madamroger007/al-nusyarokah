import GaleriForm from '@/components/form/galeri-form';
import { addGaleri } from '@/lib/actions';

export default function Page() {
  return <GaleriForm formAction={addGaleri} initialData={null} />;
}
