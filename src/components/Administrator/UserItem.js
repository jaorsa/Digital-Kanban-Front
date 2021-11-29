import Card from "../UI/Card/Card";
import "./ExpenseItem.css";

const UserItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //     setTitle('UPDATED!');
  // }

  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <h2>{props.user.first_name}</h2>
          <div className="expense-item__price">{props.user.email}</div>
        </div>
        {/* <button onClick={clickHandler}>Delete User</button> */}
      </Card>
    </li>
  );
};

export default UserItem;
