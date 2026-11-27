import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="text-3xl text-centre font-bold bg-teal-700 py-4 text-white " >
        MedAxis–Integrated Healthcare Operations Ecosystem
      </header>
      <nav>
        <ul className=" flex flex-row   items center gap-10 list none bg-teal-700 text-white">
            <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
               <li><a href="#">Contact</a></li>
        </ul>
        <hr></hr>
      </nav>
    </div>
  )
}

export default Header
