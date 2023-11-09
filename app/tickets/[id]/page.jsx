export const dynamicParams = false

import axios from 'axios';
import { notFound } from 'next/navigation';
import React from 'react';

export const generateStaticParams = async () => {
  const response = await axios.get('http://localhost:4000/tickets');
  const tickets = response.data;
  const ids = tickets.map((ticket) => ({ id: ticket.id }));
  return ids;
};

const fetchTicket = async (id) => {
  const res = await fetch('http://localhost:4000/tickets/' + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

const TicketDetails = async ({ params }) => {
  const ticket = await fetchTicket(params.id);

  return (
    <div>
      <div className="card my-5">
        <h3>{ticket.title}</h3>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </div>
  );
};

export default TicketDetails;
