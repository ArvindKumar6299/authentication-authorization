

const Navbar = () =>{
  return(
    <nav className="bg-slate-200 text-gray-600 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img src="../public/images.png" alt="logo" className="w-10 h-10 object-cover" />
        </div>

        {/* Navigation Links (Desktop) */}

        <div className="hidden md:fex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#home" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="#home" className="text-gray-600 hover:text-blue-500">Tech Stack</a>
          <a href="#home" className="text-gray-600 hover:text-blue-500">Projects</a>
          <a href="#home" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar;