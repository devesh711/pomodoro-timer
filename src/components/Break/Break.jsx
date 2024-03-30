import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../contexts/stateProvider'
import { actionTypes } from '../../reducer'

const Break = () => {

    const [{breakValue, busyIndicator}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleDecrement = () => {
        dispatch({
            ...state,
            type: actionTypes.DECREASE_BREAK_VALUE,
            breakValue: breakValue - 1
        })
    }
    const handleIncrement = () => {
        dispatch({
            ...state,
            type: actionTypes.INCREASE_BREAK_VALUE,
            breakValue: breakValue + 1
        })
    }

    return (
        <div className='flex flex-col items-center'>
            <span id='break-label' className='font-semibold'>Break Length</span>
            <div className="flex text-center items-center justify-center">
                <button
                    type='button'
                    id='break-decrement'
                    className='break__controls--btn'
                    onClick={handleDecrement}
                    disabled={busyIndicator || breakValue <= 1}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="break-length" className='text-2xl font-normal min-w-7 px-2'>{breakValue}</p>
                <button
                    type='button'
                    id='break-increment'
                    className=''
                    onClick={handleIncrement}
                    disabled={busyIndicator || breakValue > 59}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Break;
