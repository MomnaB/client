import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Header({handleNext, handleBack}) {
    return (
        <div>
            <ArrowBackIcon onClick={handleBack}/>
            <ArrowForwardIcon onClick={handleNext}/>
        </div>
    )
}

export default Header