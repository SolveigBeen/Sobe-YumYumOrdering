import { Link } from 'react-router-dom';

export default function Button(props) {
  return(
    <div className="button" style={{ backgroundColor: props.backgroundColor ,border: props.border }}>
   <Link to={props.page} className="button-link">{props.label}  </Link>
    </div>
  )
}
 

