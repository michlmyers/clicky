import React from 'react';
import PropTypes from 'prop-types';
import './DogCard.css';

class DogCard extends React.Component {
    render() {
        {/* need to set up a click event handler for wasClicked set to id*/}
        const { id, image, wasClicked } = this.props
        return (
            <div className="card">
            <div className="img-container">
            <img alt={id} src={image} />
           {/* } <id={id} />
            <wasClicked={wasClicked} /> */}
            </div>
            </div>
        );
    }
}


DogCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    wasClicked: PropTypes.bool
}

export default DogCard;