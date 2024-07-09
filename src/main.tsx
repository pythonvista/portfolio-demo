import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import posthog from 'posthog-js';
import {PostHogProvider} from 'posthog-js/react';
import './index.css';

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only'
});

//Production
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);

//Development
// ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
