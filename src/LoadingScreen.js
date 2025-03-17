import './App.css';
import logo from './components/pages/images/logo.png';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <img
        src={logo}
        alt="Logo"
        className="w-32 h-32 animate-pulse"
      />
      <p className="mt-4 text-3xl font-semibold">Hacktivate</p> 
    </div>
  );
};

export default LoadingScreen;
