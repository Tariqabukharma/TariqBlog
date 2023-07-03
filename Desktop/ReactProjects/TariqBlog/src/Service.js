function Service(props) {
  return (
    <div className="service">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default Service;
