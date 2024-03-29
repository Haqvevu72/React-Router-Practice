import React from 'react';
import { useNavigate } from 'react-router-dom';

export const OrderSummary = () => {

    const navigateBack = useNavigate();

    return (
        <div>
            <h1>Order Confirmed</h1>
            <button onClick = { () => navigateBack(-1) }>Back</button>
        </div>
    );
}