
const DUMMY_DATA = [
    {
        id: 1,
        username: 'jaorsa',
        first_name: 'Jacqueline',
        last_name: 'Ortiz',
    },
    {
        id: 2,
        username: 'joarti',
        first_name: 'Jacqueline',
        last_name: 'Ortiz',
    },
    {
        id: 3,
        username: 'testing',
        first_name: 'probando1',
        last_name: 'probando2',
    },
];

class AdminPage extends Component {
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
                <h1>Admin</h1>
                {loading && <div>Loading ...</div>}
                <Users items={users} />
            </div>
        );
    }
}