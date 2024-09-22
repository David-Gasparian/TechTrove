import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { StarRating } from '@/shared/ui/StarRating';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { AppInput } from '@/shared/ui/AppInput';
import { AppButton, AppButtonTheme } from '@/shared/ui/AppButton';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingProps {
    className?: string;
    title: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    cancel?: (selectedStarsCount: number) => void;
    accept?: (selectedStarsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        cancel,
        accept,
        rate = 0,
    } = props;

    const { t } = useTranslation('translation');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStarsCount, setSelectedStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onHandleSelect = useCallback(
        (selectedStars: number) => {
            setSelectedStarsCount(selectedStars);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                accept?.(selectedStars);
            }
        },
        [accept, hasFeedback],
    );

    const onHandleAccept = useCallback(() => {
        setIsModalOpen(false);
        accept?.(selectedStarsCount, feedback);
    }, [accept, selectedStarsCount, feedback]);

    const onHandleCancel = useCallback(() => {
        setIsModalOpen(false);
        cancel?.(selectedStarsCount);
    }, [cancel, selectedStarsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} size={TextSize.S} />
            <AppInput
                value={feedback}
                data-testid="RatingCard.Input"
                onChange={setFeedback}
                placeholder={t('your_feedback')}
            />
        </>
    );

    return (
        <Card
            data-testid="RatingCard"
            fullWidth
            className={classNames('', {}, [className])}
        >
            <VStack max align="center" gap={8}>
                <Text
                    title={
                        selectedStarsCount
                            ? t('thank_you_for_the_feedback')
                            : title
                    }
                    size={TextSize.S}
                />
                <StarRating
                    size={40}
                    onSelect={onHandleSelect}
                    selectedStars={selectedStarsCount}
                />
            </VStack>
            <BrowserView>
                <Modal onClose={onHandleCancel} isOpen={isModalOpen}>
                    <VStack gap={32}>
                        {modalContent}
                        <HStack justify="end" gap={8} max>
                            <AppButton
                                onClick={onHandleCancel}
                                theme={AppButtonTheme.OUTLINED_RED}
                            >
                                {t('cancel')}
                            </AppButton>
                            <AppButton
                                data-testid="RatingCard.Send"
                                onClick={onHandleAccept}
                                theme={AppButtonTheme.OUTLINED}
                            >
                                {t('send')}
                            </AppButton>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer onClose={onHandleCancel} isOpen={isModalOpen}>
                    <VStack gap={16}>
                        {modalContent}
                        <AppButton
                            fullWidth
                            onClick={onHandleAccept}
                            theme={AppButtonTheme.OUTLINED}
                        >
                            {t('send')}
                        </AppButton>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
