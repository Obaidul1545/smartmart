import LoginForm from '@/components/LoginForm';
import ProductsSkeleton from '@/components/ProductsSkeleton';
import { Suspense } from 'react';

const LoginPage = () => {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
