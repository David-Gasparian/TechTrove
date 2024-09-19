import { fireEvent, render, screen } from '@testing-library/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import { ProfileCard } from './ProfileCard';

describe('ProfileCard', () => {
    test('check elements', () => {
        render(
            <ProfileCard />,
        );
        expect(screen.getByTestId('profile-card')).toBeInTheDocument();
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument();
        expect(screen.queryByTestId('error')).toBeNull();
        expect(screen.queryByTestId('loading')).toBeNull();
    });

    test('check error prop', () => {
        render(
            <ProfileCard
                error='error'
            />,
        );
        expect(screen.getByTestId('error')).toBeInTheDocument();
        expect(screen.queryByTestId('profile-card')).toBeNull();
    });

    test('check isLoading prop', () => {
        render(
            <ProfileCard
                isLoading
            />,
        );
        expect(screen.getByTestId('loading')).toBeInTheDocument();
        expect(screen.queryByTestId('profile-card')).toBeNull();
    });

    test('check profileData prop', () => {
        const data = {
            id: '1',
            first: 'David',
            lastname: 'Gasparyan',
            age: 22,
            currency: Currency.DOL,
            country: Country.AMERICA,
            city: 'Yerevan',
            username: 'admin',
            avatar: 'avatar',
        };

        const wrapper = render(
            <ProfileCard
                profileData={data}
            />,
        );
        expect(screen.getByTestId('avatarWrapper')).toBeInTheDocument();

        wrapper.rerender(
            <ProfileCard
                profileData={{ ...data, avatar: '' }}
            />,
        );

        expect(screen.queryByTestId('avatarWrapper')).toBeNull();
    });

    test('check changeName prop', () => {
        const mockFn = jest.fn();

        componentRender(
            <ProfileCard
                onHandleChangeName={mockFn}
            />,
        );

        const nameInput = screen.getByTestId('ProfileCard.firstname');

        fireEvent.change(nameInput, { target: { value: 'test' } });

        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledWith('test');
        expect(nameInput).toHaveValue('test');
    });
});
