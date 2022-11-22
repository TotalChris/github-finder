import {useContext} from 'react';
import AlertContext from '../../Context/Alert/AlertContext';

function Alert() {

    const {alert} = useContext(AlertContext)

    return alert !== null && (
        <div className="alert alert-error shadow-lg mb-4">
            {alert.type === 'error' && (
            <svg
                fill='none'
                viewBox='0 0 24 24'
                className='w-6 h-6 stroke-current'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                >
                </path>
            </svg>
            )}
            <span>
                <strong>{alert.message}</strong>
            </span>
        </div>
    )
}

export default Alert