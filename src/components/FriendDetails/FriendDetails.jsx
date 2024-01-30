import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>Everything this person is here</h3>
        </div>
    );
};

export default FriendDetails;