import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/commentTypes';
import cln from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    isLoading?: boolean;
    comment: Comment;
}

const avatarSize = 30;

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        isLoading,
        comment,
    } = props;

    const { user, text } = comment;
    const { avatar, username } = user;

    if (isLoading) {
        return (
            <div
                className={classNames(cln.CommentCard, {}, [className])}
            >
                <div className={cln.topBlock}>
                    {avatar && <Skeleton width={avatarSize} height={avatarSize} border="50%" />}
                    <Skeleton className={cln.title} width={150} height={15} />
                </div>
                <Skeleton className={cln.text} width="100%" height={20} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cln.CommentCard, {}, [className])}
        >
            <div className={cln.topBlock}>
                {avatar && (
                    <Avatar
                        src={avatar}
                        size={avatarSize}
                        alt="avatar"
                    />
                )}
                <Text
                    className={cln.title}
                    title={username}
                />
            </div>
            <Text
                className={cln.text}
                text={text}
            />
        </div>
    );
});
