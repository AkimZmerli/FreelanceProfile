// "use client"

// import { useEffect } from 'react';

// export default function Webchat() {
//   useEffect(() => {
  
//     const script = document.createElement('script');
//     script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       window.botpress.on("webchat:ready", () => {
//         window.botpress.open();
//       });

//       window.botpress.init({
//         "botId": "1c5d9e01-f29c-4871-979c-f7e13402eabf",
//         "configuration": {
//           "website": {},
//           "email": {},
//           "phone": {},
//           "termsOfService": {},
//           "privacyPolicy": {},
//           "color": "#3B82F6",
//           "variant": "solid",
//           "themeMode": "light",
//           "fontFamily": "inter",
//           "radius": 1
//         },
//         "clientId": "d513bef8-8842-4adf-b151-2e06b6b08c43"
//       });
//     };

//     // Cleanup script when component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div id="webchat-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
//       <style>
//         {`
//           .bpFab {
//             display: none;
//           }
//           .bpWebchat {
//             position: absolute !important;
//             top: 0 !important;
//             left: 0 !important;
//             right: 0 !important;
//             bottom: 0 !important;
//             width: 100% !important;
//             height: 100% !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// }