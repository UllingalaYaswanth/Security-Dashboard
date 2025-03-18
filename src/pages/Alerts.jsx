// import React, { useState } from 'react';

// const AlertsPage = () => {
//   // Dummy incident data
//   const dummyIncidents = [
//     {
//       id: 1,
//       timestamp: '2023-10-10T10:15:00',
//       location: 'Entrance A',
//       type: 'Customer Conflict',
//       description: 'Argument between two customers over parking space.',
//       image: 'https://via.placeholder.com/100',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
//     },
//     {
//       id: 2,
//       timestamp: '2023-10-10T12:30:00',
//       location: 'Food Court',
//       type: 'Staff Misconduct',
//       description: 'Staff member rude to customer.',
//       image: 'https://via.placeholder.com/100',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 3,
//       timestamp: '2023-10-09T15:45:00',
//       location: 'Restroom B',
//       type: 'Vandalism',
//       description: 'Graffiti found on restroom walls.',
//       image: 'https://via.placeholder.com/100',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     }
//   ];

//   // JSON-based mall structure for heatmap
//   const mallStructure = [
//     { id: 1, name: 'Entrance A', crowdDensity: 85, fillColor: '#FF4D4D' }, // Red
//     { id: 2, name: 'Entrance B', crowdDensity: 60, fillColor: '#FFC107' }, // Yellow
//     { id: 3, name: 'Food Court', crowdDensity: 95, fillColor: '#FF4D4D' }, // Red
//     { id: 4, name: 'Restroom A', crowdDensity: 40, fillColor: '#28A745' }, // Green
//     { id: 5, name: 'Restroom B', crowdDensity: 70, fillColor: '#FFC107' }, // Yellow
//     { id: 6, name: 'Parking Lot', crowdDensity: 50, fillColor: '#28A745' }, // Green
//     { id: 7, name: 'Main Hall', crowdDensity: 80, fillColor: '#FF4D4D' } // Red
//   ];

//   const [activeTab, setActiveTab] = useState('recent');
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   // Filter incidents based on the active tab
//   const getFilteredIncidents = () => {
//     const now = new Date();
//     const recentThreshold = new Date(now.getTime() - 24 * 60 * 60 * 1000); // Last 24 hours

//     if (activeTab === 'recent') {
//       return dummyIncidents.filter((incident) => new Date(incident.timestamp) >= recentThreshold);
//     } else if (activeTab === 'all') {
//       return dummyIncidents;
//     }
//     return [];
//   };

//   const filteredIncidents = getFilteredIncidents();

//   // Close video modal
//   const closeVideoModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Incident Alerts</h1>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           onClick={() => setActiveTab('recent')}
//           className={`px-4 py-2 rounded ${
//             activeTab === 'recent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//         >
//           Recent
//         </button>
//         <button
//           onClick={() => setActiveTab('all')}
//           className={`px-4 py-2 rounded ${
//             activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//         >
//           All Time
//         </button>
//         <button
//           onClick={() => setActiveTab('heatmap')}
//           className={`px-4 py-2 rounded ${
//             activeTab === 'heatmap' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//         >
//           Heatmap
//         </button>
//       </div>

//       {/* Content Based on Active Tab */}
//       {activeTab === 'heatmap' ? (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Mall Crowd Heatmap</h2>
//           <svg
//             viewBox="0 0 800 600"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-auto border border-gray-300 rounded shadow"
//           >
//             {mallStructure.map((zone) => (
//               <rect
//                 key={zone.id}
//                 x={zone.id * 100 % 700}
//                 y={Math.floor(zone.id / 8) * 100}
//                 width="100"
//                 height="100"
//                 fill={zone.fillColor}
//                 stroke="#000"
//                 strokeWidth="2"
//                 className="cursor-pointer transition-transform hover:scale-110"
//                 onClick={() => alert(`Zone: ${zone.name}, Crowd Density: ${zone.crowdDensity}%`)}
//               />
//             ))}
//           </svg>
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             {activeTab === 'recent' ? 'Recent Incidents' : 'All Time Incidents'}
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="py-2 px-4 border-b">Image</th>
//                   <th className="py-2 px-4 border-b">Timestamp</th>
//                   <th className="py-2 px-4 border-b">Location</th>
//                   <th className="py-2 px-4 border-b">Type</th>
//                   <th className="py-2 px-4 border-b">Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredIncidents.length > 0 ? (
//                   filteredIncidents.map((incident) => (
//                     <tr key={incident.id} className="hover:bg-gray-50">
//                       <td className="py-2 px-4 border-b">
//                         <img
//                           src={incident.image}
//                           alt="Incident"
//                           className="w-12 h-12 object-cover cursor-pointer rounded"
//                           onClick={() => setSelectedVideo(incident.videoUrl)}
//                         />
//                       </td>
//                       <td className="py-2 px-4 border-b">{new Date(incident.timestamp).toLocaleString()}</td>
//                       <td className="py-2 px-4 border-b">{incident.location}</td>
//                       <td className="py-2 px-4 border-b">{incident.type}</td>
//                       <td className="py-2 px-4 border-b">{incident.description}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="py-4 text-center">
//                       No incidents to display
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-3/4 max-w-2xl relative">
//             <button
//               onClick={closeVideoModal}
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//             >
//               &times;
//             </button>
//             <iframe
//               width="100%"
//               height="400"
//               src={selectedVideo}
//               title="Incident Video"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlertsPage;

// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Rectangle, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const AlertsPage = () => {
//   // Dummy incident data
//   const dummyIncidents = [
//     {
//       id: 1,
//       timestamp: '2023-10-10T10:15:00',
//       location: 'Entrance A',
//       type: 'Customer Conflict',
//       description: 'Argument between two customers over parking space.',
//       image: 'https://via.placeholder.com/100',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
//     },
//     {
//       id: 2,
//       timestamp: '2023-10-10T12:30:00',
//       location: 'Food Court',
//       type: 'Staff Misconduct',
//       description: 'Staff member rude to customer.',
//       image: 'https://via.placeholder.com/100',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 3,
//       timestamp: '2023-10-09T15:45:00',
//       location: 'Restroom B',
//       type: 'Vandalism',
//       description: 'Graffiti found on restroom walls.',
//       image: 'https://via.placeholder.com/100',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     }
//   ];

//   // JSON-based mall structure for heatmap
//   const mallStructure = [
//     { id: 1, name: 'Entrance A', crowdDensity: 85, bounds: [[40.748817, -73.985428], [40.748817, -73.975428]], fillColor: '#FF4D4D' }, // Red
//     { id: 2, name: 'Entrance B', crowdDensity: 60, bounds: [[40.748817, -73.975428], [40.738817, -73.975428]], fillColor: '#FFC107' }, // Yellow
//     { id: 3, name: 'Food Court', crowdDensity: 95, bounds: [[40.738817, -73.975428], [40.738817, -73.965428]], fillColor: '#FF4D4D' }, // Red
//     { id: 4, name: 'Restroom A', crowdDensity: 40, bounds: [[40.738817, -73.965428], [40.728817, -73.965428]], fillColor: '#28A745' }, // Green
//     { id: 5, name: 'Restroom B', crowdDensity: 70, bounds: [[40.728817, -73.965428], [40.728817, -73.955428]], fillColor: '#FFC107' }, // Yellow
//     { id: 6, name: 'Parking Lot', crowdDensity: 50, bounds: [[40.728817, -73.955428], [40.718817, -73.955428]], fillColor: '#28A745' }, // Green
//     { id: 7, name: 'Main Hall', crowdDensity: 80, bounds: [[40.718817, -73.955428], [40.718817, -73.945428]], fillColor: '#FF4D4D' } // Red
//   ];

//   const [activeTab, setActiveTab] = useState('recent');
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   // Filter incidents based on the active tab
//   const getFilteredIncidents = () => {
//     const now = new Date();
//     const recentThreshold = new Date(now.getTime() - 24 * 60 * 60 * 1000); // Last 24 hours

//     if (activeTab === 'recent') {
//       return dummyIncidents.filter((incident) => new Date(incident.timestamp) >= recentThreshold);
//     } else if (activeTab === 'all') {
//       return dummyIncidents;
//     }
//     return [];
//   };

//   const filteredIncidents = getFilteredIncidents();

//   // Close video modal
//   const closeVideoModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Incident Alerts</h1>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           onClick={() => setActiveTab('recent')}
//           className={`px-4 py-2 rounded ${activeTab === 'recent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//         >
//           Recent
//         </button>
//         <button
//           onClick={() => setActiveTab('all')}
//           className={`px-4 py-2 rounded ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//         >
//           All Time
//         </button>
//         <button
//           onClick={() => setActiveTab('heatmap')}
//           className={`px-4 py-2 rounded ${activeTab === 'heatmap' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//         >
//           Heatmap
//         </button>
//       </div>

//       {/* Content Based on Active Tab */}
//       {activeTab === 'heatmap' ? (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Mall Crowd Heatmap</h2>
//           <MapContainer center={[40.738817, -73.965428]} zoom={15} style={{ height: '500px', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {mallStructure.map((zone) => (
//               <Rectangle
//                 key={zone.id}
//                 bounds={zone.bounds}
//                 pathOptions={{ color: zone.fillColor }}
//                 eventHandlers={{
//                   click: () => alert(`Zone: ${zone.name}, Crowd Density: ${zone.crowdDensity}%`),
//                 }}
//               >
//                 <Popup>{zone.name}</Popup>
//               </Rectangle>
//             ))}
//           </MapContainer>
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             {activeTab === 'recent' ? 'Recent Incidents' : 'All Time Incidents'}
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="py-2 px-4 border-b">Image</th>
//                   <th className="py-2 px-4 border-b">Timestamp</th>
//                   <th className="py-2 px-4 border-b">Location</th>
//                   <th className="py-2 px-4 border-b">Type</th>
//                   <th className="py-2 px-4 border-b">Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredIncidents.length > 0 ? (
//                   filteredIncidents.map((incident) => (
//                     <tr key={incident.id} className="hover:bg-gray-50">
//                       <td className="py-2 px-4 border-b">
//                         <img
//                           src={incident.image}
//                           alt="Incident"
//                           className="w-12 h-12 object-cover cursor-pointer rounded"
//                           onClick={() => setSelectedVideo(incident.videoUrl)}
//                         />
//                       </td>
//                       <td className="py-2 px-4 border-b">{new Date(incident.timestamp).toLocaleString()}</td>
//                       <td className="py-2 px-4 border-b">{incident.location}</td>
//                       <td className="py-2 px-4 border-b">{incident.type}</td>
//                       <td className="py-2 px-4 border-b">{incident.description}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="py-4 text-center">
//                       No incidents to display
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-3/4 max-w-2xl relative">
//             <button onClick={closeVideoModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
//               &times;
//             </button>
//             <iframe
//               width="100%"
//               height="400"
//               src={selectedVideo}
//               title="Incident Video"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlertsPage;


import React, { useState } from 'react';
import { MapContainer, TileLayer, Rectangle, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AlertsPage = () => {
  // Dummy incident data
  const dummyIncidents = [
    {
      id: 1,
      timestamp: '2023-10-10T10:15:00',
      location: 'Entrance A',
      type: 'Customer Conflict',
      description: 'Argument between two customers over parking space.',
      image: 'https://c.ndtvimg.com/2024-02/9aqh0su_ghaziabad-fight_625x300_26_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=545,height=307',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      timestamp: '2023-10-10T12:30:00',
      location: 'Food Court',
      type: 'Staff Misconduct',
      description: 'Staff member rude to customer.',
      image: 'https://i.dailymail.co.uk/i/pix/2013/04/12/article-2307865-193FCF86000005DC-541_634x419.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      timestamp: '2023-10-09T15:45:00',
      location: 'Restroom B',
      type: 'Vandalism',
      description: 'Graffiti found on restroom walls.',
      image: 'https://www.icecleaning.co.uk/media/images/uploaded/inline/01-Graffiti-in-bathrooms.1613384066.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    // Added recent incident
    {
      id: 4,
      timestamp: new Date().toISOString(),
      location: 'Main Hall',
      type: 'Suspicious Activity',
      description: 'Person acting suspiciously near the main entrance.',
      image: 'https://as2.ftcdn.net/v2/jpg/09/33/19/41/1000_F_933194117_nog0ll5439LvRIxEPZrvwgfOK3vNRcON.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  // JSON-based mall structure for heatmap
  const mallStructure = [
    { id: 1, name: 'Entrance A', crowdDensity: 85, bounds: [[40.748817, -73.985428], [40.748817, -73.975428]], fillColor: '#FF4D4D' },
    { id: 2, name: 'Entrance B', crowdDensity: 60, bounds: [[40.748817, -73.975428], [40.738817, -73.975428]], fillColor: '#FFC107' },
    { id: 3, name: 'Food Court', crowdDensity: 95, bounds: [[40.738817, -73.975428], [40.738817, -73.965428]], fillColor: '#FF4D4D' },
    { id: 4, name: 'Restroom A', crowdDensity: 40, bounds: [[40.738817, -73.965428], [40.728817, -73.965428]], fillColor: '#28A745' },
    { id: 5, name: 'Restroom B', crowdDensity: 70, bounds: [[40.728817, -73.965428], [40.728817, -73.955428]], fillColor: '#FFC107' },
    { id: 6, name: 'Parking Lot', crowdDensity: 50, bounds: [[40.728817, -73.955428], [40.718817, -73.955428]], fillColor: '#28A745' },
    { id: 7, name: 'Main Hall', crowdDensity: 80, bounds: [[40.718817, -73.955428], [40.718817, -73.945428]], fillColor: '#FF4D4D' }
  ];

  const [activeTab, setActiveTab] = useState('recent');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Filter incidents based on the active tab
  const getFilteredIncidents = () => {
    const now = new Date();
    const recentThreshold = new Date(now.getTime() - 24 * 60 * 60 * 1000); // Last 24 hours

    if (activeTab === 'recent') {
      return dummyIncidents.filter((incident) => new Date(incident.timestamp) >= recentThreshold);
    } else if (activeTab === 'all') {
      return dummyIncidents;
    }
    return [];
  };

  const filteredIncidents = getFilteredIncidents();

  // Close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Incident Alerts</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('recent')}
          className={`px-4 py-2 rounded ${activeTab === 'recent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Recent
        </button>
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All Time
        </button>
        <button
          onClick={() => setActiveTab('heatmap')}
          className={`px-4 py-2 rounded ${activeTab === 'heatmap' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Heatmap
        </button>
      </div>

      {/* Content Based on Active Tab */}
      {activeTab === 'heatmap' ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Mall Crowd Heatmap</h2>
          <MapContainer center={[40.738817, -73.965428]} zoom={15} style={{ height: '500px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {mallStructure.map((zone) => (
              <Rectangle
                key={zone.id}
                bounds={zone.bounds}
                pathOptions={{ color: zone.fillColor }}
                eventHandlers={{
                  click: () => alert(`Zone: ${zone.name}, Crowd Density: ${zone.crowdDensity}%`),
                }}
              >
                <Popup>{zone.name}</Popup>
              </Rectangle>
            ))}
          </MapContainer>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {activeTab === 'recent' ? 'Recent Incidents' : 'All Time Incidents'}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Image</th>
                  <th className="py-2 px-4 border-b">Timestamp</th>
                  <th className="py-2 px-4 border-b">Location</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredIncidents.length > 0 ? (
                  filteredIncidents.map((incident) => (
                    <tr key={incident.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">
                        <img
                          src={incident.image}
                          alt="Incident"
                          className="w-12 h-12 object-cover cursor-pointer rounded"
                          onClick={() => setSelectedVideo(incident.videoUrl)}
                        />
                      </td>
                      <td className="py-2 px-4 border-b">{new Date(incident.timestamp).toLocaleString()}</td>
                      <td className="py-2 px-4 border-b">{incident.location}</td>
                      <td className="py-2 px-4 border-b">{incident.type}</td>
                      <td className="py-2 px-4 border-b">{incident.description}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-4 text-center">
                      No incidents to display
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-2xl relative">
            <button onClick={closeVideoModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              &times;
            </button>
            <iframe
              width="100%"
              height="400"
              src={selectedVideo}
              title="Incident Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertsPage;
