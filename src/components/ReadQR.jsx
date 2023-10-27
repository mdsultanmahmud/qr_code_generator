import QrScanner from "qr-scanner";
import { useState } from "react";

const ReadQR = () => {
    const [text, setText] = useState('')
    const handleReadQRCode = async (e) => {
        e.preventDefault()
        const file = e.target.file.files[0]
        try {
            const result = await QrScanner.scanImage(file)
            setText(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="px-8">
            <h1 className="text-2xl font-semibold text-green-500 mb-8">Generate QR code with text or url</h1>
            <form onSubmit={handleReadQRCode}>
                <div className="flex items-center">
                    <input name="file" type="file" placeholder="Upload QR code" accept=".png, .jpg, .jpeg" required />
                    <button className="px-4 py-3  bg-blue-500 text-white uppercase outline-none hover:opacity-80 transition duration-200">Read</button>
                </div>
            </form>
            {text && <h3 className="font-semibold mt-8 text-sm">Data: <a href={text} target="_blank" rel="noreferrer" title="go to the link" className="text-green-500">{text}</a></h3>}
        </div>
    );
};

export default ReadQR;