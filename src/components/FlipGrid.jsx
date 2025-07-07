// import React from 'react';
// import './styles.scss'; // Ensure this imports your SCSS styles

// const items = [
//   {
//     imgSrc: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//     link: 'https://www.nytimes.com/2017/02/16/automobiles/headlights-get-new-attention-as-more-than-a-car-design-flourish.html',
//     text: 'Read about headlights',
//     icon: 'fas fa-lightbulb',
//   },
//   {
//     imgSrc: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//     link: 'https://www.designboom.com/design/konstantin-grcic-smart-mobile-disco-car-concept-mercedes-benz-04-18-2018/',
//     text: 'Read about Mercedes-Benz',
//     icon: 'fas fa-car',
//   },
//   {
//     imgSrc: 'https://images.pexels.com/photos/923022/pexels-photo-923022.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//     link: 'https://www.pinterest.com/taketentire/bugs/',
//     text: 'Photos of the VW Beetle',
//     icon: 'fas fa-bug',
//   },
// ];

// const Flap = ({ level, direction, children }) => (
//   <div className={`flap level${level} ${direction}`}>
//     {children}
//   </div>
// );

// const FlapStructure = () => (

// <>
//   <Flap level={0} direction="flip-up">
//   <div className="label-box">Software Engineering</div>


//     <Flap level={1} direction="flip-right">
//       <Flap level={2} direction="flip-down">
//         <Flap level={3} direction="flip-left" />
//         <Flap level={3} direction="flip-right">
//           <Flap level={4} direction="flip-up">
//             <Flap level={5} direction="flip-right">
//               <Flap level={6} direction="flip-left" />
//             </Flap>
//           </Flap>
//         </Flap>
//       </Flap>
//       <Flap level={2} direction="flip-up">
//         <Flap level={3} direction="flip-left">
//           <Flap level={4} direction="flip-up" />
//           <Flap level={5} direction="flip-down">
//             <Flap level={6} direction="flip-left">
//               <Flap level={7} direction="flip-up">
//                 <Flap level={8} direction="flip-left" />
//                 <Flap level={8} direction="flip-right" />
//               </Flap>
//             </Flap>
//           </Flap>
//         </Flap>
//       </Flap>
//     </Flap>
//     <Flap level={1} direction="flip-left">
//       <Flap level={2} direction="flip-up">
//         <Flap level={3} direction="flip-left">
//           <Flap level={4} direction="flip-down">
//             <Flap level={5} direction="flip-left">
//               <Flap level={6} direction="flip-right">
//                 <Flap level={7} direction="flip-up">
//                   <Flap level={8} direction="flip-right" />
//                 </Flap>
//               </Flap>
//             </Flap>
//           </Flap>
//         </Flap>
//       </Flap>
//       <Flap level={2} direction="flip-down">
//         <Flap level={3} direction="flip-right">
//           <Flap level={4} direction="flip-down">
//             <Flap level={5} direction="flip-up" />
//             <Flap level={5} direction="flip-up">
//               <Flap level={6} direction="flip-right" />
//             </Flap>
//           </Flap>
//         </Flap>
//       </Flap>
//     </Flap>
//   </Flap>
//   </>
// );

// const Item = ({ imgSrc, link, text, icon }) => (
//   <div className="item">
//     <div className="item__image">
//       <div className="image-switch__outer">
//         <div className="image-switch__inner">
//           <img src={imgSrc} alt={text} />
         
//         </div>
//       </div>
//     </div>
//     <div className="item__description">
//       <div className="description-switch__outer">
//         <div className="description-switch__inner">
//           <a href={link} target="_blank" rel="noopener noreferrer">
//             <p>{text}</p>
//             <div className="item__action-arrow">
//               <i className="far fa-arrow-alt-circle-right"></i>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//     <FlapStructure />
//     <div className="item__hover-icon">
//       <div className="icon-switch__outer">
//         <div className="icon-switch__inner">
//           <i className={icon}></i>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const FlipGrid = () => (
//   <div className="container">
//     {items.map((item, index) => (
//       <Item key={index} {...item} />
//     ))}
//   </div>
// );

// export default FlipGrid;
























