// import React from 'react';
// import './App.css';
// import Arrow from './Arrow';
// import Arrow2 from './Arrow2';

// Making imposible props imposible
// function App() {
//   return (
//     <div className="App">
//       Hello World
//       {/* <Arrow variant="down" />
//       <Arrow variant="up" />
//       <Arrow variant="up" variant="down" /> */}
//       <Arrow2 lineStyle="solidBlack" variant="up" />
//       <Arrow2 lineStyle="solidBlack" variant="down" />
//       <Arrow2 lineStyle="solidRed" variant="up" />
//       <Arrow2 lineStyle="solidRed" variant="down" />
//       <Arrow2 lineStyle="dottedRed" variant="up" />
//       <Arrow2 lineStyle="dottedRed" variant="down" />
//       {/* <Arrow variant="right" /> */}
//     </div>
//   );
// }

// Using the useEffect function to set notification messages counter
// export default App;
// import './App.css';
// import React, { useState, useEffect } from 'react';

// export default function App(props) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `${count} new messages`;
//   });
//   return (
//     <div>
//       <p> {count} new messages</p>
//       <button onClick={() => setCount(count + 1)}>one new message</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// Using useEffect function to track whether the webpage is offline or online
// import React, { useState, useEffect } from 'react';

// export default function App(props) {
//   console.log('render App');
//   const [isOnline, setIsOnline] = useState(true);
//   function onOnline() {
//     setIsOnline(true);
//   }
//   function onOffline() {
//     setIsOnline(false);
//   }

//   useEffect(() => {
//     console.log('useEffect App');
//     window.addEventListener('online', onOnline);
//     window.addEventListener('offline', onOffline);
//     return () => {
//       window.removeEventListener('online', onOnline);
//       window.removeEventListener('offline', onOffline);
//     };
//   }, []);
//   return <div>{isOnline ? 'online' : 'offline'}</div>;
// }

import React, { useRef, useEffect } from 'react';
import Leaflet from 'leaflet';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://unpkg.com/leaflet@latest/dist/leaflet.css';
document.body.appendChild(link);

function Map() {
  const mapWrapperElement = useRef(null);
  console.log('render', mapWrapperElement.current);

  useEffect(() => {
    console.log('useEffect', mapWrapperElement.current);
    const map = Leaflet.map(mapWrapperElement.current).setView(
      [51.505, -0.09],
      13,
    );

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return (
    <div
      ref={mapWrapperElement}
      style={{ width: 400, height: 300, backgroundColor: 'grey' }}
    />
  );
}

export default Map;
