export default function BusinessAddress({ country, address, zipCode, city, state, onChange }:{country: string, address: string, zipCode: string, city: string, state: string, onChange: (field: string, value: string) => void}) {
    const countries = [
      { value: 'US', label: 'United States' },
    ];
  
    const states = [
      { value: '', label: 'Select a state' },
      { value: 'AL', label: 'Alabama' },
      { value: 'AK', label: 'Alaska' },
      { value: 'AZ', label: 'Arizona' },
      { value: 'CA', label: 'California' },
      { value: 'CO', label: 'Colorado' },
      { value: 'FL', label: 'Florida' },
      { value: 'GA', label: 'Georgia' },
      { value: 'IL', label: 'Illinois' },
      { value: 'NY', label: 'New York' },
      { value: 'TX', label: 'Texas' },
      { value: 'WA', label: 'Washington' },
    ];
  
    return (
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Business address</h2>
        <p className="text-sm text-gray-600 mb-6">Address used for this order. Sales tax is based on this address.</p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select
              required
              id="country"
              value={country}
              onChange={(e) => onChange('country', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {countries.map(country => (
                <option key={country.value}  value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              required
              type="text"
              id="address"
              value={address}
              onChange={(e) => onChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter street address"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                ZIP code
              </label>
              <input
                required
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => onChange('zipCode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter ZIP code"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text" 
                required
                id="city"
                value={city}
                onChange={(e) => onChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter city"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <select
              required
              id="state"
              value={state}
              onChange={(e) => onChange('state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {states.map(state => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
