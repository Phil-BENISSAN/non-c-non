import PropTypes from "prop-types";

function DifficultyWateringCan({difficulté}) {

        const WateringCan = [];
        const FullWateringCan = "";
        const EmptyWateringCan = "";
    
        for (let i = 0; i < 3; i++) {
            if (i < difficulté) {
                WateringCan.push(FullWateringCan);
            } else {
                WateringCan.push(EmptyWateringCan);
            }
        }
    
        return <div>{WateringCan}</div>;
    }
    
    DifficultyWateringCan.propTypes = {
          difficulté: PropTypes.number.isRequired,
    };

export default DifficultyWateringCan;