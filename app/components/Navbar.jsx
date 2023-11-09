import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Link href="/">DashBoard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create</Link>
    </div>
  );
}

export default Navbar
