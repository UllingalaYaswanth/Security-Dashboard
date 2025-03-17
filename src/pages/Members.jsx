import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/64x64?text=Product+1',
    name: 'Soft Metal Shirt',
    category: 'Furniture',
    price: 109.89,
    description: 'Experience the orange brilliance of our Soap, perfect for flickering environments.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/64x64?text=Product+2',
    name: 'Premium Wooden Chair',
    category: 'Furniture',
    price: 150.0,
    description: 'A comfortable chair made from premium wood.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/64x64?text=Product+3',
    name: 'Classic Desk Lamp',
    category: 'Electronics',
    price: 49.99,
    description: 'A sleek desk lamp for your workspace.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/64x64?text=Product+4',
    name: 'Modern Sofa',
    category: 'Furniture',
    price: 799.99,
    description: 'A stylish sofa for your living room.',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/64x64?text=Product+5',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    description: 'High-quality wireless headphones for music lovers.',
  },
];

function ProductTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter products based on search term
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate products
  const indexOfLastProduct = currentPage * rowsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination handlers
  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <p className="text-sm text-gray-500">Manage products (Server-side table functionalities).</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2">
          <svg
            className="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 9h6v6h-6v-6zm-8 6H3v-6h6v6zM7 3V1h6v2H7z" />
          </svg>
          <span>Add New</span>
        </button>
      </div>

      {/* Search Bar and Categories Button */}
      <div className="flex items-center mb-6 space-x-4">
        <input
          type="text"
          placeholder="Search name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:border-purple-500"
        />
        <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-100">
          Categories
        </button>
      </div>

      {/* Product Table */}
      <table className="w-full border-collapse bg-white shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left text-gray-600">IMAGE</th>
            <th className="border p-3 text-left text-gray-600">NAME</th>
            <th className="border p-3 text-left text-gray-600">CATEGORY</th>
            <th className="border p-3 text-left text-gray-600">PRICE</th>
            <th className="border p-3 text-left text-gray-600">DESCRIPTION</th>
            <th className="border p-3 text-left text-gray-600">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border p-3">
                <img src={product.image} alt={`Product ${product.id}`} className="w-12 h-12" />
              </td>
              <td className="border p-3">{product.name}</td>
              <td className="border p-3">{product.category}</td>
              <td className="border p-3">${product.price.toFixed(2)}</td>
              <td className="border p-3">{product.description}</td>
              <td className="border p-3 text-right">
                <button className="text-gray-500 hover:text-gray-700">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">
            Showing {indexOfFirstProduct + 1} to{' '}
            {Math.min(indexOfLastProduct, filteredProducts.length)} of{' '}
            {filteredProducts.length} entries
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500">Rows per page:</p>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing rows per page
            }}
            className="border border-gray-300 rounded-md p-1"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded disabled:opacity-50"
            >
              «
            </button>
            <p className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded disabled:opacity-50"
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;