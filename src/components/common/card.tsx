const Card = ({ children }: any) => {
  return (
    <div>
      <div>card header</div>
      <div>{children}</div>
      <div>card footer</div>
    </div>
  );
};

export default Card;
