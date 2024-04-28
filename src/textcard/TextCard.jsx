import styles from "./TextCard.module.css";
import PropTypes from "prop-types";
import {parseString} from "../strParsing.jsx"

function TextCard(props) {

    return (
        <div className={styles.container + " " + props.className}>
            <p className={styles.title}>
                {props.title}
            </p>
            {/* eslint-disable-next-line react/jsx-key */}
            {parseString(props.content)}
        </div>
    );

}

TextCard.defaultProps = {
    title: "Placeholder",
}

TextCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}

export default TextCard;