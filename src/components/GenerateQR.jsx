import QRCode from 'qrcode'
import { useState } from 'react';
const GenerateQR = () => {
    const [qrImg, setQrImg] = useState()
    const handleQRGenerate = async (e) => {
        e.preventDefault()
        const text = e.target.text.value
        try {
            const generatedQR = await QRCode.toDataURL(text)
            setQrImg(generatedQR)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="px-8">
            <h1 className="text-2xl font-semibold text-green-500 mb-8">Generate QR code with text or url</h1>
            <form onSubmit={handleQRGenerate}>
                <div className="flex items-center">
                    <input name="text" type="text" placeholder="Enter text or url..." required className="w-full text-lg text-blue-500 px-4 outline-none py-2" style={{ border: "1px solid blue" }} />
                    <button className="px-4 py-3  bg-blue-500 text-white uppercase outline-none hover:opacity-80 transition duration-200">Generate</button>
                </div>
            </form>

            {
                qrImg && 
                    <div className='mt-12 text-center'>
                        <h2 className='text-green-500 text-lg text-center font-semibold'>Your generated QR Code!!</h2>
                        <img src={qrImg} alt="QR code" className='block mx-auto w-[200px]' />
                    </div>
            }
        </div>
    );
};

export default GenerateQR;