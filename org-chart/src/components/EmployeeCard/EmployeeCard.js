import React, { useState } from 'react';
import './EmployeeCard.css';
import OrgChart from '../OrgChart/OrgChart';

// const EmployeeCard = ({node}) => {
//     const [childVisible, setChildVisibility] = useState(false);

//     // Does the current tree node have children (true) or not (false)
//     const hasChild = node.children ? true : false

//     // const hasChild = () => {
//     //     if (node.children) {
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // }

//     const StatusBarColor = ({color}) => {
//         const statusBarStyle = {
//             height: 20,
//             width: '100%',
//             backgroundColor: color
//         }
    
//         return (
//             <div style={statusBarStyle} />
//         );
//     }
    
//     // Conditional Rendering ?
//     const StatusBar = ({status}) => {
//         switch (status) {
//             case "normal":
//                 return <StatusBarColor color={"#4caf50"} />;
//                 break;
//             case "warning":
//                 return <StatusBarColor color={"#ffeb3b"} />;
//                 break;
//             case "critical":
//                 return <StatusBarColor color={"#f44336"} />;
//                 break;
//         }
//     };
//     // Render current tree node 
//     return (
//         <div>
//             <div class="container-style">
//                 {
//                     hasChild && 
//                     <div>
//                         <StatusBar status={node.status} />
//                         {node.position} <br />
//                         {node.location}
//                     </div>
//                 }
//             </div>

//             {
//                 hasChild && 
//                 <ul>
//                     <OrgChart data={node.children} />
//                 </ul>
//             }
//         </div>
//     );
// };

// export default EmployeeCard;