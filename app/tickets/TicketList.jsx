
import Ticket from './Ticket';

const fetchTickets = async () => {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
};

const TicketList = async () => {
  const tickets = await fetchTickets();

  return (
    <div>
      <Ticket tickets={tickets} />
    </div>
  );
};

export default TicketList;
