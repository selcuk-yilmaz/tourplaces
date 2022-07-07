const Card = (data) => {
  console.log("ne geliyo", data);
  const { id, title, image, desc } = data;
  return (
    <div className="cards" key={id}>
      <div className="title">
        <h1>{title}</h1>
        <img src={image} alt="" />
        <div className="card-over">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
