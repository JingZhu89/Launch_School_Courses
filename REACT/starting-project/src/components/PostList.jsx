import Post from './Post';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostList() {
  let modalContent;
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => {
            return <Post key={post.body} pet={post.pet} owner={post.owner} id={post.id}/>
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no Posts Yet</h2>
          <p>Start Adding Some</p>
        </div>
      )}
    </>
  )
}

export default PostList;