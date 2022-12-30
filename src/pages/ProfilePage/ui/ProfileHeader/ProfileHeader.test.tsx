import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { ProfileHeader } from './ProfileHeader';

describe('ProfileHeader', () => {
    test('if readOnly true', () => {
        componentRender(<ProfileHeader
            readOnly
        />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('editBtn')).toBeInTheDocument();
    });

    test('if readOnly false', () => {
        componentRender(<ProfileHeader
            readOnly={false}
        />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('cancelBtn')).toBeInTheDocument();
        expect(screen.getByTestId('saveBtn')).toBeInTheDocument();
    });
});
