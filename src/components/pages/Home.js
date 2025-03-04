import React from 'react';
import player456 from './images/player456.jpg';

export const Home = () => {
  return (
    <div className='flex justify-center text-center mx-10'>
      <ul>
        <li className="text-xl font-bold mb-4">Team name and logo</li>
        <li className="text-2xl font-bold mb-4">Meet Team Name</li>
        <p className="text-xl mb-4 mx-40">We are <b>Team Name</b>, a passionate group of Information Technology students from Cavite State University - Imus Campus, 
          driven by curiosity and creativity, we strive to push boundaries, learn continuously, and turn ideas into reality.</p>
        <br/>
        <div className="grid grid-cols-3 gap-4 place-items-center mx-56">
          <div>
            <img src={player456} alt="Team Member 1" className="w-56 h-full object-cover rounded-lg mx-auto" />
            <p className="mt-2 text-center">Gerwin Dean Alcober</p>
          </div>
          <div>
            <img src={player456} alt="Team Member 2" className="w-56 h-full object-cover rounded-lg mx-auto" />
            <p className="mt-2 text-center">Rhodel Andaya</p>
          </div>
          <div>
            <img src={player456} alt="Team Member 3" className="w-56 h-full object-cover rounded-lg mx-auto" />
            <p className="mt-2 text-center">Matthew Meinrad Quiling</p>
          </div>
          </div>
          <br/>
          <div className="grid grid-cols-2 gap-4 place-items-center mx-96">
            <div>
              <img src={player456} alt="Team Member 4" className="w-56 h-full object-cover rounded-lg mx-auto" />
              <p className="mt-2 text-center">Stephen Rodriguez</p>
            </div>
            <div>
              <img src={player456} alt="Team Member 5" className="w-56 h-full object-cover rounded-lg mx-auto" />
              <p className="mt-2 text-center">Daven Waay</p>
            </div>
          </div>


        <li className="text-lg mt-4">Mission and vision statement</li>
      </ul>
    </div>
  );
};
