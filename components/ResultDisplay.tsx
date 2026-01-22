import React from 'react';
import { ApiResponse } from '../types';

interface ResultDisplayProps {
  response: ApiResponse | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ response }) => {
  if (!response) return null;

  const isSuccess = response.ok;

  return (
    <div className={`mt-6 rounded-lg border ${isSuccess ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'} p-4`}>
      <div className="flex items-center gap-3">
        <div className={`flex-shrink-0 rounded-full p-1 ${isSuccess ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
          {isSuccess ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div>
          <h3 className={`text-sm font-medium ${isSuccess ? 'text-emerald-800' : 'text-red-800'}`}>
            {isSuccess ? 'Session Reset Successful' : 'Session Reset Failed'}
          </h3>
          <p className={`text-xs mt-0.5 ${isSuccess ? 'text-emerald-600' : 'text-red-600'}`}>
             Status Code: {response.status || 'Network Error'}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="relative rounded-md bg-slate-900 p-3 shadow-inner overflow-hidden">
          <div className="absolute top-2 right-2 text-[10px] text-slate-500 font-mono uppercase">JSON Output</div>
          <pre className="text-xs text-slate-50 font-mono overflow-auto max-h-48 scrollbar-thin scrollbar-thumb-slate-700">
            {JSON.stringify(response.body || { error: response.error }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};