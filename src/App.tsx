import Posts from "./Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    RouteComponentProps
} from "react-router-dom";
import PostsDetails from "./PostsDetails";


const App = () => {
    return (
        <div>
            <Router>
                <Link to={'/posts'}>Posts</Link>
                <Route exact path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/posts/:id'} render={(props:RouteComponentProps) => <PostsDetails{...props}/>}/>

            </Router>
        </div>
    );
}
export default App;