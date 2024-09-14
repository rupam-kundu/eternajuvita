export default function Services() {
    return (
      <div className="bg-gray-50 my-12 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-900">Technology Licensing</h3>
              <p className="mt-4 text-lg text-gray-600">
                Helping businesses access groundbreaking innovations from universities and research institutions.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-900">Fund Raising</h3>
              <p className="mt-4 text-lg text-gray-600">
                Facilitating grant applications and helping entrepreneurs connect with seed investors to fund their ventures.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-900">Investment Opportunity Assessment</h3>
              <p className="mt-4 text-lg text-gray-600">
                Evaluating the commercial potential of university innovations and identifying investment opportunities for investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  