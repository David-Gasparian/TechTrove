import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Profile } from '@/entities/Profile';

import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'lastname',
    age: 23,
    currency: Currency.DOL,
    country: Country.AMERICA,
    city: 'city',
    username: 'admin',
    avatar: '',
};

const options = {
    initialValue: {
        profile: {
            readOnly: true,
            form: profile,
            data: profile,
        },

        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducer: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard', () => {
    test('if readOnly true', async () => {
        componentRender(
            <EditableProfileCard
                profileId="1"
            />,
            options,
        );

        const editBtn = screen.getByTestId('EditableProfileCardHeader.editBtn');

        expect(editBtn).toBeInTheDocument();
        expect(screen.queryByTestId('EditableProfileCardHeader.cancelBtn')).not.toBeInTheDocument();

        await userEvent.click(editBtn);

        expect(editBtn).not.toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.cancelBtn')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.saveBtn')).toBeInTheDocument();
    });
});
