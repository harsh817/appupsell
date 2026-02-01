// Test Hostinger deployment
import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Part1Hook from './pages/Part1Hook.tsx';

// Lazy load below-the-fold pages for better initial load performance
const Part2Mistakes = lazy(() => import('./pages/Part2Mistakes.tsx'));
const Part3System = lazy(() => import('./pages/Part3System.tsx'));
const Part4Offer = lazy(() => import('./pages/Part4Offer.tsx'));

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <div id="hook">
                <Part1Hook />
            </div>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-white/40">Loading...</div></div>}>
                <div id="mistakes">
                    <Part2Mistakes />
                </div>
                <div id="system">
                    <Part3System />
                </div>
                <div id="offer">
                    <Part4Offer />
                </div>
            </Suspense>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;