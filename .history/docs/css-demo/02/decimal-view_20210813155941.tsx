type DecimalViewProps = {
  value: number;
};
const DecimalView = (props: DecimalViewProps) => {
  const { value } = props;
  return <span>{value}</span>;
};

export default DecimalView;
