import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { getRouteProfile } from '@/shared/consts/router';
import { Text } from '@/shared/ui/deprecated/Text';
import { Comment } from '../../model/types/commentTypes';
import cln from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    isLoading?: boolean;
    comment?: Comment;
}

const avatarSize = 30;

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, isLoading, comment } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cln.CommentCard, {}, [
                    className,
                    cln.loading,
                ])}
            >
                <div className={cln.topBlock}>
                    <Skeleton
                        width={avatarSize}
                        height={avatarSize}
                        border="50%"
                    />
                    <Skeleton className={cln.title} width={150} height={15} />
                </div>
                <Skeleton className={cln.text} width="100%" height={20} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    const { user, text } = comment;
    const { avatar, username } = user;

    return (
        <div
            data-testid="CommentCard.Content"
            className={classNames(cln.CommentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(user.id)} className={cln.topBlock}>
                {avatar && (
                    <Avatar src={avatar} size={avatarSize} alt="avatar" />
                )}
                <Text className={cln.title} title={username} />
            </AppLink>
            <Text className={cln.text} text={text} />
        </div>
    );
});
