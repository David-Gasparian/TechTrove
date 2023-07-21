import React, { FC } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = React.lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
