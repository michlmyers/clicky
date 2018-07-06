import React from 'react';
import PropTypes from 'prop-types';
import './DogCard.css';

{/*}
class DogCard extends React.Component {
    render() {
        const { id, image, wasClicked } = this.props
        return (
            <div onClick={() => props.dogClick(props.id) } className="card">
            <div className="img-container">
            <img alt={props.id} src={props.image} />
            <id {...id} />
            <wasClicked {...wasClicked} />
            </div>
            </div>
        );
    }
} */}

const DogCard = props => (
    <div onClick={() => props.dogClick(props.id) } className="card">
    <div className="img-container">
    <img alt={props.id} src={props.image} />
    </div>
    </div>
);

{/*
DogCard.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    wasClicked: PropTypes.bool
}
*/}

export default DogCard;