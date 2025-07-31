// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // ✅ Import your images
// import img01 from '../assets/image 5.png';
// import img02 from '../assets/image 24.png';
// import img03 from '../assets/image 19.png';
// import img04 from '../assets/image 17.png';
// import img05 from '../assets/image 13.png';

// const categories = [
//   {
//     name: 'Mobiles',
//     thumbnail: img01,
//     items: [
//       { label: 'iPhone', img: img01 },
//       { label: 'Samsung', img: img02 },
//       { label: 'Redmi', img: img03 },
//       { label: 'Realme', img: img01 },
//       { label: 'Nothing', img: img04 },
//       { label: 'OnePlus', img: img05 },
//     ],
//   },
//   {
//     name: 'Electronics',
//     thumbnail: img03,
//     items: [
//       { label: 'Laptop', img: img05 },
//       { label: 'Camera', img: img01 },
//       { label: 'Headphones', img: img03 },
//       { label: 'Smartwatch', img: img02 },
//       { label: 'Printer', img: img05 },
//     ],
//   },
//   {
//     name: 'Fashion',
//     thumbnail: img05,
//     items: [
//       { label: 'Men', img: img02 },
//       { label: 'Women', img: img05 },
//       { label: 'Kids', img: img04 },
//       { label: 'Footwear', img: img03 },
//       { label: 'Watches', img: img05 },
//     ],
//     },
//     {
//         name: 'Mobiles',
//         thumbnail: img01,
//         items: [
//           { label: 'iPhone', img: img01 },
//           { label: 'Samsung', img: img02 },
//           { label: 'Redmi', img: img03 },
//           { label: 'Realme', img: img01 },
//           { label: 'Nothing', img: img04 },
//           { label: 'OnePlus', img: img05 },
//         ],
//       },
//       {
//         name: 'Electronics',
//         thumbnail: img03,
//         items: [
//           { label: 'Laptop', img: img05 },
//           { label: 'Camera', img: img01 },
//           { label: 'Headphones', img: img03 },
//           { label: 'Smartwatch', img: img02 },
//           { label: 'Printer', img: img05 },
//         ],
//       },
//       {
//         name: 'Fashion',
//         thumbnail: img05,
//         items: [
//           { label: 'Men', img: img02 },
//           { label: 'Women', img: img05 },
//           { label: 'Kids', img: img04 },
//           { label: 'Footwear', img: img03 },
//           { label: 'Watches', img: img05 },
//         ],
//       },
// ];

// const Banner = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const timeoutRef = useRef(null);

//   const handleEnter = (cat) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveCategory(cat);
//     setDropdownOpen(true);
//   };

//   const handleLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setDropdownOpen(false);
//       setActiveCategory(null);
//     }, 800);
//   };

//   const handleClick = (cat) => {
//     if (activeCategory?.name === cat.name && isDropdownOpen) {
//       setDropdownOpen(false);
//     } else {
//       setActiveCategory(cat);
//       setDropdownOpen(true);
//     }
//   };

//   return (
//     <div className="relative  shadow z-40">
//       {/* Top Menu */}
//       <div
//         className="flex justify-center flex-wrap gap-6 py-4 text-sm font-semibold text-gray-800 cursor-pointer"
//         onMouseLeave={handleLeave}
//       >
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onMouseEnter={() => handleEnter(cat)}
//             onClick={() => handleClick(cat)}
//             className={`flex flex-col items-center hover:text-blue-600 transition-colors ${
//               activeCategory?.name === cat.name && isDropdownOpen ? 'text-blue-600' : ''
//             }`}
//           >
//             <img
//               src={cat.thumbnail}
//               alt={cat.name}
//               className="w-20 h-20 object-cover rounded-lg mb-1"
//             />
//             {cat.name}
//           </div>
//         ))}
//       </div>

//       {/* Dropdown */}
//       <AnimatePresence>
//         {activeCategory && isDropdownOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             onMouseEnter={() => {
//               if (timeoutRef.current) clearTimeout(timeoutRef.current);
//               setDropdownOpen(true);
//             }}
//             onMouseLeave={handleLeave}
//             className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
//                       backdrop-blur-lg bg-white/80 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
//                       rounded-3xl px-6 py-6 w-[90%] max-w-xl
//                        z-50 transition-all duration-500"
//           >
//             <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center tracking-wide">
//               {activeCategory.name}
//             </h2>

//             {/* Responsive Scrollable Grid */}
//             <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto no-scrollbar px-1">
//               {activeCategory.items.map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.1, rotate: 1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group min-w-[150px] flex-shrink-0 md:flex-shrink flex flex-col items-center
//                              text-center p-4 rounded-xl cursor-pointer
//                              bg-white/90 hover:bg-gradient-to-br from-blue-100 to-purple-100
//                              transition-all duration-300 shadow-md hover:shadow-lg"
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.label}
//                     className="w-14 h-14 object-contain mb-2 rounded-md transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700">
//                     {item.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Banner;


import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img01 from '../assets/image 5.png';
import img02 from '../assets/image 24.png';
import img03 from '../assets/image 19.png';
import img04 from '../assets/image 17.png';
import img05 from '../assets/image 13.png';

const categories = [
  {
    name: 'Mobiles',
    thumbnail: img01,
    items: [
      { label: 'iPhone', img: img01 },
      { label: 'Samsung', img: img02 },
      { label: 'Redmi', img: img03 },
      { label: 'Realme', img: img01 },
      { label: 'Nothing', img: img04 },
      { label: 'OnePlus', img: img05 },
    ],
  },
  {
    name: 'Electronics',
    thumbnail: img03,
    items: [
      { label: 'Laptop', img: img05 },
      { label: 'Camera', img: img01 },
      { label: 'Headphones', img: img03 },
      { label: 'Smartwatch', img: img02 },
      { label: 'Printer', img: img05 },
    ],
  },
  {
    name: 'Fashion',
    thumbnail: img05,
    items: [
      { label: 'Men', img: img02 },
      { label: 'Women', img: img05 },
      { label: 'Kids', img: img04 },
      { label: 'Footwear', img: img03 },
      { label: 'Watches', img: img05 },
    ],
  },
];

const Banner = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = (cat) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(cat);
    setDropdownOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      setActiveCategory(null);
    }, 800);
  };

  const handleClick = (cat) => {
    if (activeCategory?.name === cat.name && isDropdownOpen) {
      setDropdownOpen(false);
    } else {
      setActiveCategory(cat);
      setDropdownOpen(true);
    }
  };

  return (
    <div className="relative shadow z-40">
      {/* New Top Menu */}
      <motion.div
        className="bg-white py-4 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        onMouseLeave={handleLeave}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.name}
                className={`text-gray-800 font-semibold text-lg relative focus:outline-none
                  ${
                    activeCategory?.name === cat.name && isDropdownOpen
                      ? 'text-purple-600'
                      : 'hover:text-purple-600'
                  }
                `}
                onMouseEnter={() => handleEnter(cat)}
                onClick={() => handleClick(cat)}
                whileHover={{ scale: 1.05 }}
              >
                {cat.name.toUpperCase()}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-600 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX:
                      activeCategory?.name === cat.name && isDropdownOpen
                        ? 1
                        : 0,
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {activeCategory && isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              setDropdownOpen(true);
            }}
            onMouseLeave={handleLeave}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                      backdrop-blur-lg bg-white/80 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                      rounded-3xl px-6 py-6 w-[90%] max-w-xl
                       z-50 transition-all duration-500"
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center tracking-wide">
              {activeCategory.name}
            </h2>

            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto no-scrollbar px-1">
              {activeCategory.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group min-w-[150px] flex-shrink-0 md:flex-shrink flex flex-col items-center 
                             text-center p-4 rounded-xl cursor-pointer 
                             bg-white/90 hover:bg-gradient-to-br from-purple-100 to-pink-100 
                             transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-14 h-14 object-contain mb-2 rounded-md transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-purple-700">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
