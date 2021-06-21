import React from 'react';
import { useParams } from "react-router-dom";

export default function TestList() {
    let { period } = useParams();

    return (
        <div>
            Hier kommt die Test-Liste hin:
            { period }
        </div>
    )
}