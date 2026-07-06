function TicketCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>

      <p>{props.status}</p>
    </div>
  );
}

export default TicketCard;