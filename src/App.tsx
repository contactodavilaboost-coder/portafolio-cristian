/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center text-muted-foreground">
                  Cargando...
                </div>
              }>
                <PortfolioPage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
