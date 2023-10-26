import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch } from 'react-redux';

const Product = ({post}) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(remove(post.id));
  }

  return( <div>
        <div>
        <span>
          <AiOutlineClose onClick={remove}/>
        </span>
          <h4>{post.title}</h4>
          <p> {post.body}</p>
          <div>
            <img src='https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D'/>
          </div>
        </div>
  </div>
  )
};

export default Product;
