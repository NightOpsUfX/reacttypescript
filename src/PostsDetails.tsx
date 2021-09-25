import {RouteComponentProps, useHistory} from "react-router-dom";

const PostsDetails = (props: RouteComponentProps) => {
    // console.log(props.location)
    let {history, location, match} = props;
    // let locationStateHistory = useHistory();

    return <div>
        Post Details
    </div>
}

export default PostsDetails;