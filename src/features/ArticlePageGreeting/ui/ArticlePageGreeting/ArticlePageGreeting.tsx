import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { Drawer } from '@/shared/ui/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('articles');
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { isArticlePageWasOpen } = useJsonSettings();

    useEffect(() => {
        if (!isArticlePageWasOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpen: true }));
        }
    }, [isArticlePageWasOpen, dispatch]);

    const onClose = () => setIsOpen(false);

    const content = (
        <Text
            title={t('articles_welcome_to_the_articles+_page')}
            text={t(
                'articles_here_you_can_search_and_browse_articles_on_various_topics',
            )}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy onClose={onClose} isOpen={isOpen}>
                {content}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {content}
        </Modal>
    );
});
