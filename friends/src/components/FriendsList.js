import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err.response)
            });
    }, []);

    return (
        <div>
            <h1>Friends List</h1>
            {
                friends.map(friend => {
                    <h3>{friend.name}</h3>
                    <p><strong>Age:&nbsp;</strong>{friend.age}<br />
                    {friend.email}<br /><br /></p>
                })
            }
        </div>
    )
}

export default FriendsList;