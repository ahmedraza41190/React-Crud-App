
import "./post.css";
import "../home/home.css";
import { TrashFill, PencilFill } from 'react-bootstrap-icons';
import moment from 'moment'

const Post = (props) => {
    const formattedTime = moment(props.time).fromNow();

    return (
        <div className="post" id="">
            <p className="regards center" style={{ fontSize: '0.7em' }}>{formattedTime}</p>
            <h2 className="scrollH">{props.title}</h2>
            <p className="scroll">{props.text}</p>
            <div className="space-around">
                <p className="regards">Build by Ahmed Raza</p>
                <TrashFill onClick={() => { props.del(props.postId) }} className="btn" />
                <PencilFill onClick={() => { props.edit(props.postId) }} className="btn" />
            </div>
        </div>
    );
};


const NoPost = () => {
    return (<h2 className="noPostsMessage">No post found...</h2>)
};

export { Post, NoPost };