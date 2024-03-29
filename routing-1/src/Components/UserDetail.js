import React from 'react';
import { useParams } from 'react-router-dom';

export const UserDetail = () => {
    const { userId } = useParams();

    return (
        <div>
            <h1>User { userId }</h1>
        </div>
    );
};