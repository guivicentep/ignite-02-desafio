import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { CheckoutPage } from './Pages/Checkout';
import { SuccessPage } from './Pages/Success';
import { DefaultLayout } from './Layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}
