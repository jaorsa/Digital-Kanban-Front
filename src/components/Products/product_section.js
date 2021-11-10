import { useEffect, useState } from 'react';

const [showHide, setShowHide] = useState(true);

const DUMMY_DATA = [
    {
        product_id: 1,
        name: "tornillo 3/4",
        weight: 0.01,
        createdAt: "2021-11-06 14:38:06.262035",
        updatedAt: "2021-11-06 14:38:06.262035",
      },
    {
      product_id: 2,
      name: "tabla de triplay 0.2 m x 0.1 m",
      weight: 0.10,
      createdAt: "2021-11-06 14:38:06.262035",
      updatedAt: "2021-11-06 14:38:06.262035",
    },
    {
        product_id: 3,
        name: "test",
        weight: 0.12,
        createdAt: "2021-11-07 22:41:55.836",
        updatedAt: "2021-11-07 22:41:55.836",
      },
  ];

const product_section = () => {
    return(
        <div className="animate-fade-in-up" >
      <div className="flex items-center">
        <div
          className="border-t-2 border-white flex-grow mb-6 sm:mb-3 mr-3"
          aria-hidden="true"
        ></div>

        <div
          className="text-xl sm:text-2xl md:text-3xl font-bold text-primary pb-5 cursor-pointer inline-block"
          onClick={() => {
            showHide ? setShowHide(false) : setShowHide(true);
          }}
        >
          {habit_group_name == 'Uncategorized'
            ? habit_group_name
            : habit_group_name + ' Routines'}{' '}
          <span
            className={`text-dailies p-3 text-sm align-middle mb-1 text-center inline-flex items-center justify-center w-4 h-4 border-2 sm:border-4 shadow-lg rounded-full font-bold ${associated_habits.length - habitCounter.length == 0 ? 'border-emerald-500 bg-emerald-200' : 'border-dailies-dark bg-dailies-light'}`}
          >
            {associated_habits.length - habitCounter.length == 0  ? <i className="text-emerald-600 fas fa-check"/> : associated_habits.length - habitCounter.length}
          </span>{' '}
          <i
            className={
              (showHide ? 'fas fa-chevron-up' : 'fas fa-chevron-down ') + ''
            }
          />
        </div>
        <div
          className="border-t-2 border-white flex-grow mb-6 sm:mb-3 ml-3"
          aria-hidden="true"
        ></div>
      </div>
      <div
        className={
          (showHide ? '' : 'hidden ') +
          'flex flex-col sm:flex-row gap-3 sm:gap-5 overflow-x-auto flex-nowrap mb-10'
        }
      >
        {/* start */}
        {associated_habits.map((h) => (
          <HabitSquare
            key={h.id}
            habit_id={h.id}
            habit_title={h.habit}
            habit_type={h.habit_type}
            habit_detail={h.latest_details}
            habit_description={h.description}
            streak_duration={h.streak_duration}
            streak_start={h.streak_start}
            streak_end={h.streak_end}
            exp_reward={h.exp_reward}
            habit_icon={h.icon}
            fetchDailies={fetchDailies}
            fetchDailiesCompletedToday={fetchDailiesCompletedToday}
            habitCounter={habitCounter}
            setHabitCounter={setHabitCounter}
          />
        ))}
      </div>
    </div>
    );
};

class productClass extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          products: DUMMY_DATA,
        };
    }

    componentDidMount() {
        this.setState({ loading: true, products: DUMMY_DATA });
    }
};

export default product_section;