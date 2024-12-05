import { LoginForm } from '@/components/form/login-form';
import { login } from '@/lib/actions';

export default function Page() {
  return <LoginForm formAction={login} initialData={null} />;
}
