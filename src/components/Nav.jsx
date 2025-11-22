import React from 'react'

export const Nav = () => {
  return (
    <header className="bg-blue-950 fixed top-0 left-0 h-24 w-full z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img src="STK Logo.png" alt="STK Logo" width={'50px'} height={'50px'} />
                    </a>
                </div>
            </nav>
        </header>
  )
}
