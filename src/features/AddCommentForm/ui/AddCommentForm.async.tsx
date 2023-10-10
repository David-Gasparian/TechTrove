import React, { FC } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = React.lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
