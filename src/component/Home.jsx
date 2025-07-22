import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import UserMain from './UserMain';
import AdminMain from './AdminMain';

function Home() {
  const [selected, setSelected] = useState('user');
  const [indicatorX, setIndicatorX] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setIndicatorX(selected === 'user' ? 0 : containerWidth / 2);
    }
  }, [selected]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">MyPortal</div>

        {/* Toggle Button */}
        <div
          ref={containerRef}
          className="relative w-52 bg-gray-200 rounded-full px-1 py-1.5 flex justify-between items-center shadow-inner"
        >
          {/* Sliding Indicator */}
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute top-1 left-1 h-8 w-[calc(50%-4px)] bg-blue-600 rounded-full z-0"
            animate={{ x: indicatorX }}
          />

          {/* User Button */}
          <button
            onClick={() => setSelected('user')}
            className={`w-1/2 z-10 text-sm font-semibold py-1 rounded-full transition-colors duration-300 ${
              selected === 'user' ? 'text-white' : 'text-gray-700'
            }`}
          >
            User
          </button>

          {/* Admin Button */}
          <button
            onClick={() => setSelected('admin')}
            className={`w-1/2 z-10 text-sm font-semibold py-1 rounded-full transition-colors duration-300 ${
              selected === 'admin' ? 'text-white' : 'text-gray-700'
            }`}
          >
            Admin
          </button>
        </div>
      </header>

      {/* Main Page */}
      <main className="p-6">
        {selected === 'user' ? <UserMain /> : <AdminMain />}
      </main>
    </div>
  );
}

export default Home;
