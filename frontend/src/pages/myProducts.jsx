import React, { useState, useEffect } from "react";

function MyProducts() {
    const [products, setProducts] = useState([]);
    const [email, setEmail] = useState("");

    const fetchProducts = (email) => {
        if (!email) return;

        fetch(`http://localhost:8000/api/products?email=${email}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data.products || []);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setProducts([]);
            });
    };

    return (
        <div className="min-h-screen flex justify-center p-8">
            <div className="text-white bg-neutral-800 p-8 rounded-xl">
                <h1 className="text-center text-2xl font-bold mb-4">My Products</h1>
                <input
                    type="email"
                    className="border border-black rounded px-2 py-1 mb-4"
                    placeholder="Enter email to filter"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => fetchProducts(email)}
                >
                    Fetch Products
                </button>

                {products.length === 0 ? (
                    <div className="text-center mt-4">No products found.</div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {products.map((product) => (
                            <div key={product.id} className="border p-4 rounded bg-gray-700">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyProducts;
