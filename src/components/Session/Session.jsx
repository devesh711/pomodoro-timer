import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../contexts/stateProvider';
import { actionTypes } from '../../reducer';

const Session = () => {

    const [{sessionValue, busyIndicator}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleDecrement = () => {
        dispatch({
            ...state,
            type: actionTypes.DECREASE_SESSION_VALUE,
            sessionValue: sessionValue - 1,
            timerValue: (sessionValue - 1) * 60
        })
    }
    const handleIncrement = () => {
        dispatch({
            ...state,
            type: actionTypes.INCREASE_SESSION_VALUE,
            sessionValue: sessionValue + 1,
            timerValue: (sessionValue + 1) * 60
        })
    }

    return (
        <div className='flex flex-col items-center'>
            <span id='session-label' className='font-semibold mb-4'>Session Length</span>
            <div className="flex justify-between items-center text-center">
                <button
                    type='button'
                    id='session-desession__controls--btncrement'
                    className='control-btn'
                    onClick={handleDecrement}
                    disabled={busyIndicator || sessionValue <= 1}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="session-length" className='text-2xl font-normal min-w-7 px-2'>{sessionValue}</p>
                <button
                    type='button'
                    id='session-increment'
                    className='control-btn'
                    onClick={handleIncrement}
                    disabled={busyIndicator || sessionValue > 59}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Session;
