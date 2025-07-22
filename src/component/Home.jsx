import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import UserMain from './UserMain';
import AdminMain from './AdminMain';
import { Sun, Moon } from 'lucide-react';

function Home() {
  const [selected, setSelected] = useState('user');
  const [indicatorX, setIndicatorX] = useState(0);
  const containerRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setIndicatorX(selected === 'user' ? 0 : width / 2);
    }
  }, [selected]);

  return (
    <motion.div
      className={`min-h-screen transition-colors ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className={`flex justify-between items-center p-6 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">MyPortal</span>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Toggle */}
        <div
          ref={containerRef}
          className="relative w-48 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex justify-between"
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`absolute top-1 left-1 h-8 w-[calc(50%-4px)] rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
            animate={{ x: indicatorX }}
          />
          <button
            onClick={() => setSelected('user')}
            className={`w-1/2 z-10 text-center font-semibold py-1 rounded-full transition ${selected === 'user' ? 'text-white' : 'text-gray-600'}`}
          >
            User
          </button>
          <button
            onClick={() => setSelected('admin')}
            className={`w-1/2 z-10 text-center font-semibold py-1 rounded-full transition ${selected === 'admin' ? 'text-white' : 'text-gray-600'}`}
          >
            Admin
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="p-8">
        {selected === 'user' ? (
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
            <UserMain />
          </motion.div>
        ) : (
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
            <AdminMain />
          </motion.div>
        )}
      </main>
    </motion.div>
  );
}

export default Home;