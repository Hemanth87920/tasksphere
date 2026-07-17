import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckSquare, LogOut } from 'lucide-react';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 text-indigo-600 font-bold text-xl">
            <CheckSquare className="h-6 w-6" />
            <span>TaskSphere</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-slate-600 hover:text-slate-900 transition font-medium">Home</Link>
            
            {currentUser ? (
              <>
                <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 transition font-medium">Dashboard</Link>
                <div className="flex items-center space-x-3 border-l pl-4 border-slate-200">
                  <span className="text-sm font-semibold text-slate-700 bg-slate-100 py-1 px-3 rounded-full">
                    Hi, {currentUser.username}
                  </span>
                  <button 
                    onClick={handleLogout} 
                    className="text-red-500 hover:text-red-600 transition flex items-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-slate-600 hover:text-slate-900 transition font-medium">Login</Link>
                <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}