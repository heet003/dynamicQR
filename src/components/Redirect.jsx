/*eslint-disable */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Redirect() {
    const { ID } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:5000/qr/${ID}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (!response.ok) {
                    throw new Error("Error");
                }
                const data = await response.json();
                window.location.href = data.OriginalUrl;
            } catch (err) {
                console.error(err);
            }
        }

        if (ID) {
            fetchData();
        }
    }, [ID]);

    return (
        <div className='p-10'>
            <h1 className='text-2xl bg-black text-white'>Redirection page....</h1>
        </div>
    );
}

export default Redirect;