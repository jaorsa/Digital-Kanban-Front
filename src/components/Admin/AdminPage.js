import { Component, useContext } from "react";
import Users  from "./Users";
import './Users.css';

const DUMMY_DATA = [
    {
        uid: 1,
        username: 'jaorsa',
        first_name: 'Jacqueline',
        last_name: 'Ortiz',
        role: 'operator',
    },
    {
        uid: 2,
        username: 'joarti',
        first_name: 'Jacqueline',
        last_name: 'Ortiz',
        role: 'admin'
    },
    {
        uid: 3,
        username: 'testing',
        first_name: 'probando1',
        last_name: 'probando2',
        role: 'operator'
    },
];

const AdminPage = () => {

    return <>
    <div className="expenses">
        <h1>Admin</h1>
        <Admin />
    </div>
  </>
};

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false, 
            users: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true, users: DUMMY_DATA });

        // this.props.firebase.users().on('value', snapshot => {
        //     const usersObject = snapshot.val();

        //     const userList = Object.keys(usersObject).map(key => ({
        //         ...usersObject[key],
        //         uid: key,
        //     }));

        //     this.setState((prevState) => {
        //         return{
        //             ...prevState,
        //             users: userList,
        //             loading: false,
        //         }
        //     });
        // });
        
    }

    componentWillUnmount() {
    }

    render() {
        const { loading, users } = this.state;
        return(
            <div>
                {/* {loading && <div>Loading ...</div>} */}
                <Users items={users} />
            </div>
        );
    }
}

export default AdminPage;