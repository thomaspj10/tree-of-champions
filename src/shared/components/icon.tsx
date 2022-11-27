import './icon.scss';

export default function Icon(props: {size: string, icon: string, pixelated?: boolean}) {
  return <div className={"icon icon--" + props.size}>
    <i className={props.icon + " " + (props.pixelated ? "pixelated" : "")}></i>
  </div>
}