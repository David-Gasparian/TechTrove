import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

describe('EditableProfileCardHeader', () => {
    test('if readOnly true', () => {
        componentRender(<EditableProfileCardHeader
            readOnly
            canEdit
        />);
        expect(screen.getByTestId('EditableProfileCardHeader.header')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.editBtn')).toBeInTheDocument();
    });

    test('if readOnly false', () => {
        componentRender(<EditableProfileCardHeader
            readOnly={false}
            canEdit
        />);
        expect(screen.getByTestId('EditableProfileCardHeader.header')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.cancelBtn')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.saveBtn')).toBeInTheDocument();
    });

    test('if canEdit false', () => {
        componentRender(<EditableProfileCardHeader
            readOnly={false}
            canEdit={false}
        />);
        expect(screen.queryByTestId('EditableProfileCardHeader.editBtn')).not.toBeInTheDocument();
        expect(screen.queryByTestId('EditableProfileCardHeader.cancelBtn')).not.toBeInTheDocument();
        expect(screen.queryByTestId('EditableProfileCardHeader.saveBtn')).not.toBeInTheDocument();
    });
});
