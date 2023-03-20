import { Link } from 'react-router-dom';
import css from './LoggedOut.module.css';

export const LoggedOut = () => {
    return (
        <div className={css.unauthorized}>
            <h2 className={css.title}>Welcome to Phonebook APP!</h2>
            <p className={css.notification}>
                In order to use this Phonebook you must be registered.
            </p>
            <p className={css.choice}>
                Please <Link to={"/register"} className={css.link}>register</Link> here.
            </p>
            <p className={css.choice}>
                Please <Link to={"/login"} className={css.link}>sign in</Link> here.
            </p>
        </div>
    )
}
