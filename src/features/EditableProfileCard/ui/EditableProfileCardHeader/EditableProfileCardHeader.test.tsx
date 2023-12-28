import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

describe('EditableProfileCardHeader', () => {
    test('if readOnly true', () => {
        componentRender(<EditableProfileCardHeader
            readOnly
            canEdit
        />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('editBtn')).toBeInTheDocument();
    });

    test('if readOnly false', () => {
        componentRender(<EditableProfileCardHeader
            readOnly={false}
            canEdit
        />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('cancelBtn')).toBeInTheDocument();
        expect(screen.getByTestId('saveBtn')).toBeInTheDocument();
    });

    test('if canEdit false', () => {
        componentRender(<EditableProfileCardHeader
            readOnly={false}
            canEdit={false}
        />);
        expect(screen.queryByTestId('editBtn')).not.toBeInTheDocument();
        expect(screen.queryByTestId('cancelBtn')).not.toBeInTheDocument();
        expect(screen.queryByTestId('saveBtn')).not.toBeInTheDocument();
    });
});
