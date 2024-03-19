interface Props {
  title: string;
  type: string;
  onClickAction: () => void;
}

function BtnCmp({ title, type, onClickAction }: Props) {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClickAction}>
      {title}
    </button>
  );
}

export default BtnCmp;
