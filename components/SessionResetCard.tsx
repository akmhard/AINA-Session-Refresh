import React, { useState } from 'react';
import { AgentType, ApiResponse, RequestStatus } from '../types';
import { resetUserSession } from '../services/sessionService';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import { ResultDisplay } from './ResultDisplay';

export const SessionResetCard: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [agent, setAgent] = useState<AgentType>(AgentType.AINA_MENTOR);
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) {
      return;
    }

    setStatus('loading');
    setApiResponse(null);

    const result = await resetUserSession({
      user_id: userId.trim(),
      agent: agent
    });

    setApiResponse(result);
    setStatus(result.ok ? 'success' : 'error');
  };

  const handleAgentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAgent(e.target.value as AgentType);
  };

  return (
    <div className="bg-white px-6 py-8 shadow-xl rounded-2xl ring-1 ring-slate-900/5 sm:px-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Reset Configuration</h2>
          <p className="text-sm text-slate-500 mb-6">Enter the user ID to clear their active session.</p>
          
          <div className="space-y-4">
            <Input
              id="userId"
              label="User ID"
              type="text"
              placeholder="e.g. 12345"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />

            <Select
              id="agentSelect"
              label="Select Agent"
              value={agent}
              onChange={handleAgentChange}
              options={[
                { value: AgentType.AINA_MENTOR, label: 'AINA_MENTOR' },
                { value: AgentType.AINA_VOICE, label: 'AINA_VOICE' }
              ]}
            />
          </div>
        </div>

        <div className="pt-2">
          <Button 
            type="submit" 
            isLoading={status === 'loading'}
            disabled={!userId.trim()}
          >
            {status === 'loading' ? 'Processing...' : 'Reset Session'}
          </Button>
        </div>
      </form>

      <ResultDisplay response={apiResponse} />
    </div>
  );
};