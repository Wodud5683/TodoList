import PropTypes from 'prop-types';
import './style.css';

function Layout({ children }) {
    return (
        <div className='layout'>
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
