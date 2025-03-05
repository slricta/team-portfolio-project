import player456 from './components/pages/images/player456.jpg';
import './App.css';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <img
        src={player456}
        alt="Logo"
        className="w-32 h-32 animate-pulse"
      />
      <p className="mt-4 text-lg font-semibold">Team Name</p> 
    </div>
  );
};

export default LoadingScreen;
