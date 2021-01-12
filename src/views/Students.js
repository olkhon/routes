import React from 'react';
import {useParams} from 'react-router-dom';

export default function Students () {
const {studentName} = useParams();

    return (

        <div>Student view : {studentName}</div>
    )
}