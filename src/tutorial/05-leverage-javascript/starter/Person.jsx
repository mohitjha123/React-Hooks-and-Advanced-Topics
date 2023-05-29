import avatar from "../../../assets/default-avatar.svg";
const Person = ({ name, nickName = "shakeAndBake", images }) => {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;

  // Nullish coalescing operator ??
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "70px" }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};
export default Person;
