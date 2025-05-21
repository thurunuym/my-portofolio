import React from 'react';

const Header = () => {
  return (
    <div className="bg-black text-white shadow-md top-0 fixed w-full">
      <div className="justify-end mx-auto px-4 py-4 flex justify-between items-center">
        {/* <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb] text-2xl font-bold">
          YourName
        </div> */}
        <nav className="flex align-super space-x-4">
          {['Home', 'About', 'Projects', 'Services', 'Contact Me'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="px-4 py-2 border rounded-lg font-medium
                border-transparent 
                bg-clip-text text-transparent 
                bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb]
                transition-all duration-300"
              style={{
                borderImage: 'linear-gradient(to right, #a9f1df, #ffbbbb) 1',
                borderImageSlice: 1,
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
