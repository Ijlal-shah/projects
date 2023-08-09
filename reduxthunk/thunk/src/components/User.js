import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/userSlice';

const User = () => {
    const [userId, setUserId] = useState(1);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.user);

    const handleFetchUser = () => {
        dispatch(fetchUser(userId));
    };

    return (
        <div>
            <h1>User Details</h1>
            <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button onClick={handleFetchUser}>Fetch User</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                </div>
            )}
        </div>
    );
};

export default User;
