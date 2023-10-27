const ReadQR = () => {
    return (
        <div className="px-8">
            <h1 className="text-2xl font-semibold text-green-500 mb-8">Generate QR code with text or url</h1>
            <form>
                <div className="flex items-center">
                    <input type="file" placeholder="Upload QR code" required />
                    <button className="px-4 py-3  bg-blue-500 text-white uppercase outline-none hover:opacity-80 transition duration-200">Read</button>
                </div>
            </form>
        </div>
    );
};

export default ReadQR;