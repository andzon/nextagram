import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import UserImages from './UserImages'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserProfile from './userProfile';





function Homepage({ users }) {

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
                flexDirection: "column"
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="content">
            <h2>News Feed</h2>
            <ul>
                {users.map(user => (
                    <li className="fixImages">
                        <div className={classes.root}>

                            {<Avatar alt="profileImage" src={user.profileImage} />}

                                <Link to={`/users/${user.id}`}>{user.username}</Link>
                                
                        </div>
                        {/* <div className="line"></div> */}
                        <div>
                            <UserImages userId={user.id} />
                            <hr />
                        </div>
                    </li>


                ))}
            </ul>
        </div>
    )
}


export default Homepage