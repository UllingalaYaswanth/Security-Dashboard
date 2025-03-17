// import React from 'react'
// import { CiCamera } from "react-icons/ci";
// import { ImNotification } from "react-icons/im";
// import { TbActivityHeartbeat } from "react-icons/tb";
// import { FaUserGroup } from "react-icons/fa6";

// function Home() {
//   return (
//     <div className='be-white p-5 items-center'>
     
    

//       <div>
//         <div className='flex justify-between'>
//         <div className='flex flex-col'>
//           <h1 className='text-lg font-medium'>Overview</h1>
//           <p className='text-gray-500'>Monitor your security system status and activities</p>
//         </div>
//         <div className='flex gap-5'>
//           <button className='px-6 h-10 border shadow-sm hover:shadow-md hover:bg-gray-200/50 rounded-lg'>Today</button>
//           <button className='px-6 h-10 border shadow-sm hover:shadow-md hover:bg-gray-200/50 rounded-lg'>View Report</button>
//         </div>
//         </div>
//         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
//           <div className='bg-white p-5 rounded-xl shadow text-center border'>
//           <h1 className='text-center text-xl items-center'><CiCamera/></h1>
//             <h2 className='font-medium'>Total Cameras</h2>
//             <p className='text-3xl font-medium'>5</p>
//             <p className='text-gray-500 text-sm'>4 offline, 8 online</p>
//           </div>
//           <div className='bg-white p-5 rounded-xl shadow text-center border'>
//             <FaUserGroup className='text-center text-xl items-center'/>
//           <h2 className='font-medium'>Active Detections</h2>
//             <p className='text-3xl font-medium'>25</p>
//             <p className='text-gray-500 text-sm'><span className='text-green-400'>+15%</span> from last hour</p>
//           </div>
//           <div className='bg-white p-5 rounded-xl shadow text-center border'>
//           <ImNotification className='text-center text-xl items-center'/>
//           <h2 className='font-medium'>Current Alerts</h2>
//             <p className='text-3xl font-medium'>7</p>
//             <p className='text-gray-500 text-sm'><span className='text-red-500'>+2</span> new alerts</p>
//           </div>
//           <div className='bg-white p-5 rounded-xl shadow text-center border'>
//             <TbActivityHeartbeat className='text-center text-xl items-center'/>
//           <h2 className='font-semibold'>System Status</h2>
//             <p className="text-3xl font-semibold">Optimal</p>
//             <p className='text-sm text-gray-500'>All systems optional</p>
//           </div>
//         </div>
//         <div className='mt-5 lg:flex justify-between gap-5'>
//           <div className=' p-5 rounded-xl shadow text-center border lg:w-[75%]'>
//             <h1 className='text-left font-semibold text-xl'>Live Security Feed</h1>
//             <button className='text-start mb-5'>Live View</button>
//             <div >
//               <div className='bg-gray-200 p-5 rounded-xl shadow text-center border w-[99%] h-[720px]'>
//                 <div className='w-[250px] h-200px bg-gray-300 rounded-lg p-4 font-medium'>
//                   <h1 className='text-lg mb-3'>Front Entrance . LIVE</h1>
//                   <div className='grid md:grid-cols-2 justify-between'>
//                     <p> People : 4</p>
//                     <p> Vehicles : 1</p>
//                     <p> Alerts : 4</p>
//                     <p> Objects : 5</p>
//                   </div>
//                 </div>
                

//               </div>
//               <div className='mt-5'>
//                   <div className='flex justify-between gap-5 mb-4'>
//                   <h1 className='text-md font-medium'>Available Cameras</h1>
//                   <h1 className='text-md font-medium cursor-pointer'>View All</h1>
//                   </div>
//                   <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
//                     <div className='flex flex-col justify-between bg-blue-900 rounded-lg text-white font-medium h-[70px] gap-1'>
//                       <div className='text-xs bg-white text-black h-[70%] px-2 py-1 text-center items-center rounded-lg font-medium'>
//                         <h1>220</h1>
//                         <h1>180</h1>
//                       </div>
//                       <h1>Front Entrance</h1>
//                     </div>
//                     <div className='flex flex-col justify-between bg-blue-900 rounded-lg text-white font-medium h-[70px] gap-1'>
//                       <div className='text-xs bg-white text-black h-[70%] px-2 py-1 text-center items-center rounded-lg font-medium'>
//                         <h1>220</h1>
//                         <h1>180</h1>
//                       </div>
//                       <h1>Front Entrance</h1>
//                     </div>
//                     <div className='flex flex-col justify-between bg-blue-900 rounded-lg text-white font-medium h-[70px] gap-1'>
//                       <div className='text-xs bg-white text-black h-[70%] px-2 py-1 text-center items-center rounded-lg font-medium'>
//                         <h1>220</h1>
//                         <h1>180</h1>
//                       </div>
//                       <h1>Front Entrance</h1>
//                     </div>
//                     <div className='flex flex-col justify-between bg-blue-900 rounded-lg text-white font-medium h-[70px] gap-1'>
//                       <div className='text-xs bg-white text-black h-[70%] px-2 py-1 text-center items-center rounded-lg font-medium'>
//                         <h1>220</h1>
//                         <h1>180</h1>
//                       </div>
//                       <h1>Front Entrance</h1>
//                     </div>
//                   </div>
//                 </div>
//             </div>
//           </div>
//           <div className='lg:w-[25%]'>
//             <div className='mb-5 p-5 rounded-xl shadow text-start border'>
//               <h1 className='text-xl font-medium'>Detection trends</h1>
//               <p className='text-gray-500'>Today's activity</p>
//             </div>
//             <div className='p-5 rounded-xl text-start border shadow'>
//               <h1 className='text-xl font-medium'>Recent Incidents</h1>
//               <p className='text-gray-500 mb-3'>last 24 hours</p>
//               <div className='flex gap-5 justify-between mb-3'>
//                 <div>
//                 <h1 className=' font-medium'>Unauthorized Access</h1>
//                 <p className='text-sm text-gray-500'>Front Entrance</p>
//                 <p className='text-sm text-gray-500'>14:35</p>
//                 </div>
//                 <button className='px-3 py-1 bg-red-500 h-[30px] text-xs rounded-lg text-white font-medium'>high</button>
//               </div>
//               <div className='flex gap-5 justify-between mb-3'>
//                 <div>
//                 <h1 className=' font-medium'>Vehicle Stopped</h1>
//                 <p className='text-sm text-gray-500'>Parking Lot</p>
//                 <p className='text-sm text-gray-500'>10:35</p>
//                 </div>
//                 <button className='px-3 py-1 h-[30px] text-xs rounded-lg font-medium border'>low</button>
//               </div>
//               <div className='flex gap-5 justify-between mb-3'>
//                 <div>
//                 <h1 className=' font-medium'>Person Detected</h1>
//                 <p className='text-sm text-gray-500'>Restricted Area</p>
//                 <p className='text-sm text-gray-500'>14:35</p>
//                 </div>
//                 <button className='px-3 py-1 bg-black h-[30px] text-xs rounded-lg text-white font-medium'>medium</button>
//               </div>
//               <div className='flex gap-5 justify-between mb-3'>
//                 <div>
//                 <h1 className=' font-medium'>Motion Detected</h1>
//                 <p className='text-sm text-gray-500'>Storage Room</p>
//                 <p className='text-sm text-gray-500'>14:35</p>
//                 </div>
//                 <button className='px-3 py-1 border h-[30px] text-xs rounded-lg  font-medium'>low</button>
//               </div>
//               <div className='border-t mt-5'>
//               <h1 className='text-gray-500 font-medium cursor-pointer mt-5 text-center'>View All incidents</h1>
//               </div>
//             </div>
//             <div className='p-5 rounded-xl text-start shadow border mt-5'>
//               <h1 className='text-xl font-medium'>System Status</h1>
//               <p className='text-gray-500 mb-5'>All systems operational</p>
//               <div className='flex gap-5 justify-between mb-5'>
//                 <div>
//                 <h1 className='text-sm'>Video Processing</h1>
//                 </div>
//                 <button className='px-3 py-1 bg-green-100 border text-green-500 h-[30px] text-xs rounded-lg font-medium'>Operational</button>
//               </div>
//               <div className='flex gap-5 justify-between mb-5'>
//                 <div>
//                 <h1 className='text-sm'>Object Detection</h1>
//                 </div>
//                 <button className='px-3 py-1 bg-green-100 border text-green-500 h-[30px] text-xs rounded-lg font-medium'>Operational</button>
//               </div>
//               <div className='flex gap-5 justify-between mb-5'>
//                 <div>
//                 <h1 className='text-sm'>Facial Recognition</h1>
//                 </div>
//                 <button className='px-3 py-1 bg-yellow-100/50 h-[30px] text-xs rounded-lg border font-medium'>Degraded</button>
//               </div>
//               <div className='flex gap-5 justify-between mb-5'>
//                 <div>
//                 <h1 className='text-sm'>License Plate Reader</h1>
//                 </div>
//                 <button className='px-3 py-1 bg-red-100/50 text-red-500 border h-[30px] text-xs rounded-lg  font-medium'>Offline</button>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

// import React from 'react';
// import { CiCamera } from "react-icons/ci";
// import { ImNotification } from "react-icons/im";
// import { TbActivityHeartbeat } from "react-icons/tb";
// import { FaUserGroup } from "react-icons/fa6";

// const stats = [
//   { icon: <CiCamera />, title: "Total Cameras", value: "5", description: "4 offline, 8 online" },
//   { icon: <FaUserGroup />, title: "Active Detections", value: "25", description: "+15% from last hour" },
//   { icon: <ImNotification />, title: "Current Alerts", value: "7", description: "+2 new alerts" },
//   { icon: <TbActivityHeartbeat />, title: "System Status", value: "Optimal", description: "All systems operational" },
// ];

// const incidents = [
//   { title: "Unauthorized Access", location: "Front Entrance", time: "14:35", severity: "high" },
//   { title: "Vehicle Stopped", location: "Parking Lot", time: "10:35", severity: "low" },
//   { title: "Person Detected", location: "Restricted Area", time: "14:35", severity: "medium" },
//   { title: "Motion Detected", location: "Storage Room", time: "14:35", severity: "low" },
// ];

// const systemStatus = [
//   { title: "Video Processing", status: "Operational", statusClass: "bg-green-100 text-green-500" },
//   { title: "Object Detection", status: "Operational", statusClass: "bg-green-100 text-green-500" },
//   { title: "Facial Recognition", status: "Degraded", statusClass: "bg-yellow-100/50" },
//   { title: "License Plate Reader", status: "Offline", statusClass: "bg-red-100/50 text-red-500" },
// ];

// function Home() {
//   return (
//     <div className='be-white p-5'>
//       <div>
//         <div className='flex justify-between'>
//           <div>
//             <h1 className='text-lg font-medium'>Overview</h1>
//             <p className='text-gray-500'>Monitor your security system status and activities</p>
//           </div>
//           <div className='flex gap-5'>
//             <button className='px-6 h-10 border shadow-sm hover:shadow-md hover:bg-gray-200/50 rounded-lg'>Today</button>
//             <button className='px-6 h-10 border shadow-sm hover:shadow-md hover:bg-gray-200/50 rounded-lg'>View Report</button>
//           </div>
//         </div>

//         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
//           {stats.map(({ icon, title, value, description }) => (
//             <div className='bg-white p-5 rounded-xl shadow flex flex-col items-center gap-1 border' key={title}>
//               <h1 className='text-xl'>{icon}</h1>
//               <h2 className='font-medium'>{title}</h2>
//               <p className='text-3xl font-medium'>{value}</p>
//               <p className='text-gray-500 text-sm'>{description}</p>
//             </div>
//           ))}
//         </div>

//         <div className='mt-5 lg:flex justify-between gap-5'>
//           <div className='p-5 rounded-xl shadow text-center border lg:w-[75%]'>
//             <h1 className='text-left font-semibold text-xl'>Live Security Feed</h1>
//             <button className='text-start mb-5'>Live View</button>
//             <div className='bg-gray-200 p-5 rounded-xl shadow text-center border w-[99%] h-[720px]'>
//               <div className='w-[250px] h-[200px] bg-gray-300 rounded-lg p-4 font-medium'>
//                 <h1 className='text-lg mb-3'>Front Entrance . LIVE</h1>
//                 <div className='grid md:grid-cols-2 justify-between'>
//                   <p>People: 4</p>
//                   <p>Vehicles: 1</p>
//                   <p>Alerts: 4</p>
//                   <p>Objects: 5</p>
//                 </div>
//               </div>
//             </div>

//             <div className='mt-5'>
//               <div className='flex justify-between gap-5 mb-4'>
//                 <h1 className='text-md font-medium'>Available Cameras</h1>
//                 <h1 className='text-md font-medium cursor-pointer'>View All</h1>
//               </div>
//               <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
//                 {[...Array(4)].map((_, index) => (
//                   <div className='flex flex-col justify-between border border-gray-300 bg-blue-900 rounded-lg text-white font-medium h-[70px] gap-1 hover:border hover:border-black' key={index}>
//                     <div className='text-xs bg-white text-black h-[70%] px-2 py-1 text-center rounded-lg'>
//                       <h1>220</h1>
//                       <h1>180</h1>
//                     </div>
//                     <h1>Front Entrance</h1>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className='lg:w-[25%]'>
//             <div className='mb-5 p-5 rounded-xl shadow text-start border'>
//               <h1 className='text-xl font-medium'>Detection trends</h1>
//               <p className='text-gray-500'>Today's activity</p>
//             </div>
//             <div className='p-5 rounded-xl text-start border shadow'>
//               <h1 className='text-xl font-medium'>Recent Incidents</h1>
//               <p className='text-gray-500 mb-3'>last 24 hours</p>
//               {incidents.map(({ title, location, time, severity }) => (
//                 <div className='flex gap-5 justify-between mb-3' key={title}>
//                   <div>
//                     <h1 className='font-medium'>{title}</h1>
//                     <p className='text-sm text-gray-500'>{location}</p>
//                     <p className='text-sm text-gray-500'>{time}</p>
//                   </div>
//                   <button className={`px-3 py-1 text-xs h-7 rounded-lg font-medium ${severity === 'high' ? 'bg-red-500 text-white' : ''}`}>{severity}</button>
//                 </div>
//               ))}
//               <div className='border-t mt-5'>
//                 <h1 className='text-gray-500 font-medium cursor-pointer mt-5 text-center'>View All incidents</h1>
//               </div>
//             </div>

//             <div className='p-5 rounded-xl text-start shadow border mt-5'>
//               <h1 className='text-xl font-medium'>System Status</h1>
//               <p className='text-gray-500 mb-5'>All systems operational</p>
//               {systemStatus.map(({ title, status, statusClass }) => (
//                 <div className='flex gap-5 justify-between mb-5' key={title}>
//                   <div>
//                     <h1 className='text-sm'>{title}</h1>
//                   </div>
//                   <button className={`px-3 py-1 text-xs rounded-lg font-medium ${statusClass}`}>{status}</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { CiCamera } from "react-icons/ci";
import { ImNotification } from "react-icons/im";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const stats = [
  { icon: <CiCamera />, title: "Total Cameras", value: "5", description: "4 offline, 8 online" },
  { icon: <FaUserGroup />, title: "Active Detections", value: "25", description: "+15% from last hour" },
  { icon: <ImNotification />, title: "Current Alerts", value: "7", description: "+2 new alerts" },
  { icon: <TbActivityHeartbeat />, title: "System Status", value: "Optimal", description: "All systems operational" },
];

const incidents = [
  { title: "Unauthorized Access", location: "Front Entrance", time: "14:35", severity: "high" },
  { title: "Vehicle Stopped", location: "Parking Lot", time: "10:35", severity: "low" },
  { title: "Person Detected", location: "Restricted Area", time: "14:35", severity: "medium" },
  { title: "Motion Detected", location: "Storage Room", time: "14:35", severity: "low" },
];

const systemStatus = [
  { title: "Video Processing", status: "Operational", statusClass: "bg-green-100 text-green-500" },
  { title: "Object Detection", status: "Operational", statusClass: "bg-green-100 text-green-500" },
  { title: "Facial Recognition", status: "Degraded", statusClass: "bg-yellow-100/50" },
  { title: "License Plate Reader", status: "Offline", statusClass: "bg-red-100/50 text-red-500" },
];

// Data for the Weekly Incident Report Bar Graph
const incidentData = {
  labels: ['March 1', 'March 2', 'March 3', 'March 4', 'March 5', 'March 6', 'March 7'],
  datasets: [
    {
      label: 'Incidents Reported',
      data: [3, 5, 2, 6, 8, 4, 7],  // Example data for incidents count each day
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color (with transparency)
      borderColor: 'rgb(75, 192, 192)', // Border color of bars
      borderWidth: 1,
    },
  ],
};

function Home() {
  return (
    <div className='be-white p-5'>
      <div>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-lg font-medium'>Overview</h1>
            <p className='text-gray-500'>Monitor your security system status and activities</p>
          </div>
          <div className='flex gap-5'>
            <button className='px-6 h-10 border shadow-sm hover:shadow-md hover:bg-gray-200/50 rounded-lg'>Today</button>
            <button className='px-6 h-10 border shadow-sm hover:shadow-md hover:bg-gray-200/50 rounded-lg'>View Report</button>
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
          {stats.map(({ icon, title, value, description }) => (
            <div className='bg-white p-5 rounded-xl shadow flex flex-col items-center gap-1 border' key={title}>
              <h1 className='text-xl'>{icon}</h1>
              <h2 className='font-medium'>{title}</h2>
              <p className='text-3xl font-medium'>{value}</p>
              <p className='text-gray-500 text-sm'>{description}</p>
            </div>
          ))}
        </div>

        <div className='mt-5  lg:flex justify-between gap-5'>
          <div className='p-5 bg-white rounded-xl shadow text-center border lg:w-[75%]'>
            <h1 className='text-left font-semibold text-xl'>Live Security Feed</h1>
            <button className='text-start mb-5'>Live View</button>
            <div className='bg-gray-200 p-5 rounded-xl shadow text-center border w-[99%] h-[720px]'>
              <div className='w-[250px] h-[200px] bg-gray-300 rounded-lg p-4 font-medium'>
                <h1 className='text-lg mb-3'>Front Entrance . LIVE</h1>
                <div className='grid md:grid-cols-2 justify-between'>
                  <p>People: 4</p>
                  <p>Vehicles: 1</p>
                  <p>Alerts: 4</p>
                  <p>Objects: 5</p>
                </div>
              </div>
            </div>

            <div className='mt-5 '>
              <div className='flex justify-between gap-5 mb-4'>
                <h1 className='text-md font-medium'>Available Cameras</h1>
                <h1 className='text-md font-medium cursor-pointer'>View All</h1>
              </div>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {[...Array(4)].map((_, index) => (
                  <div className='flex flex-col justify-between border border-gray-300 bg-blue-900 rounded-lg text-white font-medium h-[70px] gap-1 hover:border hover:border-black' key={index}>
                    <div className='text-xs bg-white text-black h-[70%] px-2 py-1 text-center rounded-md'>
                      <h1>220</h1>
                      <h1>180</h1>
                    </div>
                    <h1>Front Entrance</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='lg:w-[25%]'>
            <div className='mb-5 p-5 rounded-xl shadow text-start border bg-white'>
              <h1 className='text-xl font-medium'>Detection trends</h1>
              <p className='text-gray-500'>Today's activity</p>
            </div>
            <div className='p-5 rounded-xl text-start border shadow bg-white'>
              <h1 className='text-xl font-medium'>Recent Incidents</h1>
              <p className='text-gray-500 mb-3'>last 24 hours</p>
              {incidents.map(({ title, location, time, severity }) => (
                <div className='flex gap-5 justify-between mb-3' key={title}>
                  <div>
                    <h1 className='font-medium'>{title}</h1>
                    <p className='text-sm text-gray-500'>{location}</p>
                    <p className='text-sm text-gray-500'>{time}</p>
                  </div>
                  <button className={`px-3 py-1 text-xs h-7 rounded-lg font-medium ${severity === 'high' ? 'bg-red-500 text-white' : ''}`}>{severity}</button>
                </div>
              ))}
              <div className='border-t mt-5'>
                <h1 className='text-gray-500 font-medium cursor-pointer mt-5 text-center'>View All incidents</h1>
              </div>
            </div>

            <div className='p-5 rounded-xl text-start shadow border mt-5 bg-white'>
              <h1 className='text-xl font-medium'>System Status</h1>
              <p className='text-gray-500 mb-5'>All systems operational</p>
              {systemStatus.map(({ title, status, statusClass }) => (
                <div className='flex gap-5 justify-between mb-5' key={title}>
                  <div>
                    <h1 className='text-sm'>{title}</h1>
                  </div>
                  <button className={`px-3 py-1 text-xs rounded-lg font-medium ${statusClass}`}>{status}</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h1 className='text-xl font-medium'>Weekly Incident Report</h1>
          <p className='text-gray-500 mb-3'>March 1 - March 7, 2025</p>
          <div className='bg-white p-5 rounded-xl shadow'>
            <Bar data={incidentData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
