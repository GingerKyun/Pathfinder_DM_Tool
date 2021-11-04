import * as React from 'react';
import { useParams } from 'react-router';

export default function RoomDetails() {

    const {id} = useParams()
    return(
    <div style={{padding: '10px'}}>
        {id}
    </div>
    );
}