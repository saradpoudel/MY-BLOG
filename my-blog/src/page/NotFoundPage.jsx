function NotFoundPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
                <p className="text-lg mb-4">The page you are looking for does not exist.</p>
                <img src="https://via.placeholder.com/400" alt="404 Not Found" className="mx-auto mb-8" />
                <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Home</a>
            </div>
        </div>
    )
}

export default NotFoundPage;