interface Props {
  title: string;
  type: string;
}

function BtnCmp({ title, type }: Props) {
  return (
    <button type="button" className={"btn btn-" + type}>
      {title}
    </button>
  );
}

export default BtnCmp;
