import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="pet">Your Pet</label>
          <textarea id="pet" name="pet" required rows={3}/>
        </p>
        <p>
          <label htmlFor="owner">Your name</label>
          <input type="text" id="owner" name="owner" required/>
        </p>
        <p className={classes.actions}>
          <Link type='button' to='..'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    header: {
      'Content-Type':'application/json'
    }
  });
  return redirect('/');
}