import PropTypes from 'prop-types';


const CopyButton = ({text, reset }) => {
  return (
    <button onClick={reset}
    className='output-btn form-btn'>{text}
    </button>
  )
}

CopyButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default CopyButton