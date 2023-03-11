import classes from './Post.module.css';
import { Link } from 'react-router-dom';
function Post(prop) {
  return (
    <li className={classes.post}>
      <Link to={prop.id}>
        <p className={classes.owner}>{prop.owner}</p>
        <p className={classes.pet}>{prop.pet}</p>
      </Link>
    </li>
  );
}

export default Post;