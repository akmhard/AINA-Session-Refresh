import React from 'react';
import { SessionResetCard } from './components/SessionResetCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-brand-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Session Manager
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Clear and refresh user sessions for AINA agents
          </p>
        </div>

        <SessionResetCard />

        <div className="text-center text-xs text-slate-400">
          <p>Protected System • Authorized Personnel Only</p>
        </div>
      </div>
    </div>
  );
};

export default App;