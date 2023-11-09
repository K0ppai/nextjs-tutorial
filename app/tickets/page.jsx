import React, { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from './loading';

const Tickets = () => {
  return (
    <div>
      <h1>Ticket Page</h1>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default Tickets;
