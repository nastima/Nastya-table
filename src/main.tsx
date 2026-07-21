import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import {router} from './app/router';
import {store} from './store';
import {AppThemeProvider} from "./theme/ThemeContext.tsx";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <AppThemeProvider>
              <RouterProvider router={router} />
          </AppThemeProvider>
      </Provider>
  </React.StrictMode>,
)
