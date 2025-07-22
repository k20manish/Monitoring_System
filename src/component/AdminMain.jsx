import React, { useState } from 'react';
import Complaint_Monitoring from './Complaint_Monitoring';

function AdminMain() {
  const [selectedOption, setSelectedOption] = useState('monitoring');
  const [showMenu, setShowMenu] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowMenu(false);
  };

  const renderRightContent = () => {
    if (selectedOption === 'monitoring') {
      return <Complaint_Monitoring />;
    }
    return null;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-blue-100 items-start p-6 space-x-6">
      
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-lg shadow-md p-4 h-full">
        <h2 className="text-lg font-bold mb-4 text-center text-blue-600">Admin Panel</h2>
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${selectedOption === 'monitoring' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => handleOptionClick('monitoring')}
            >
              Complaint Monitoring
            </button>
          </li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 justify-center items-center h-full overflow-hidden">
        {renderRightContent()}
      </div>
    </div>
  );
}

export default AdminMain;
