/*eslint-disable */
import React, { useState } from 'react';
function QRCode() {
    const apiUrl = import.meta.env.VITE_API_QRCODE;
    const [OriginalUrl, setOriginalUrl] = useState("");
    const [data, setData] = useState({});
    const [ShortUrl, setShortUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/qr/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ OriginalUrl })
            })
            if (!response.ok) {
                throw new Error("Error")
            }
            const data = await response.json();
            setData(data);
            setShortUrl(data.ShortUrl);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/qr/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ OriginalUrl, ShortUrl })
            })
            if (!response.ok) {
                throw new Error("Error")
            }
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="p-2 h-screen flex flex-col items-center gap-5">
            <div className="flex flex-col gap-5 items-center">
                <div className='flex gap-4 items-center'>
                    <input type="text" id='OriginalUrl' name='OriginalUrl' value={OriginalUrl} placeholder="Enter target OriginalUrl here"
                        onChange={(e) => setOriginalUrl(e.target.value)} className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className='flex gap-4 items-center'>
                    <input type="text" id='ShortUrl' name="ShortUrl" value={data && data.ShortUrl && data.ShortUrl || ""}
                        onChange={(e) => setShortUrl(e.target.value)} placeholder="shorten OriginalUrl" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className='flex gap-5  '>
                    <button onClick={handleSubmit} className="p-2 border border-gray-400 hover:bg-black hover:text-white transition duration-300 hover:border-none hover:scale-105 rounded-lg">Generate QR Code</button>
                    <button onClick={handleUpdate} className="p-2 border border-gray-400 hover:bg-black hover:text-white transition duration-300 hover:border-none hover:scale-105 rounded-lg">Update</button>
                </div>
            </div>
            <div>
                <img src={data && data.qr_code && data.qr_code || apiUrl || ""} alt='QR Code' />
            </div>
        </div>
    );
}

export default QRCode;