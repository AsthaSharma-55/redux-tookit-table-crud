import React,{useEffect} from 'react'
import { Link,useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from './features/ContactSlice';

function View() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { contacts } = useSelector((state) => state.contact)
    console.log('aaaaaaaaa',contacts)

    useEffect(() => {
        dispatch(getUser(id))    
    }, [id])
  
    return (    
        <div >
          <div >
            <h1>User Contact Detail</h1>
          </div>
         <div>
            <h3>{contacts[id].id}</h3>

            <h3>{contacts[id].name}</h3>
            <h3>{contacts[id].email}</h3>
            <h3>{contacts[id].status}</h3>
            <h3>{contacts[id].phone}</h3>

            <Link to="/">
              <button>Go Back</button>
            </Link>
          </div>
        </div>
      
    );
  };

export default View