import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/provider/themeProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundaries';
import 'app/styles/index.scss';
import { App } from './app/App';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
