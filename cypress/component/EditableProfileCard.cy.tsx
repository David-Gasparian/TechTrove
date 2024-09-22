import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/test/componentRender/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialValue: {
                        user: {
                            authData: {
                                id: USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard profileId={USER_ID} />
            </TestProvider>,
        );
    });
});
