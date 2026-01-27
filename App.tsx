import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Part1Hook from './pages/Part1Hook';
import Part2Mistakes from './pages/Part2Mistakes';
import Part3System from './pages/Part3System';
import Part4Offer from './pages/Part4Offer';

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <div id="hook">
                <Part1Hook />
            </div>
            <div id="mistakes">
                <Part2Mistakes />
            </div>
            <div id="system">
                <Part3System />
            </div>
            <div id="offer">
                <Part4Offer />
            </div>
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