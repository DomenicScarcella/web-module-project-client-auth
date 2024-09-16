import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then((res) => {
                setFriends(res.data);
            })
            .catch((err) => console.log({ err }));
    }, []);

    return (
        <div>
           <h3>Current friends</h3>
           <div>
               {friends.map(friend => (
                   <p className='friendCard' key={friend.id}>
                       <strong>{friend.name}</strong><br />
                       <i>Age: </i>{friend.age}<br />
                       {friend.email}
                    </p>
                ))}
            </div> 
        </div>
    );
}

export default FriendsList;