const Img = (props) => {
  const imgs = `https://source.unsplash.com/600x400?${props.name}`;
  return (
    <>
    <center>
    <img className="img-fluid rounded" src={imgs} alt="error" />
    </center>
    </>
  );
};
export default Img;
