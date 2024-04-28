import PropTypes from "prop-types";
import TextCard from "../textcard/TextCard";
import styles from "./imaged-p.module.css"

function renderImg(props) {

    const styleName = `${styles.pImg} ${props.href?styles.pImgLink:""}`;
    
    let img = <img className={styleName} src={props.src} href={props.href}></img>;

    if (props.href) {

        img = <a href={props.href}> {img} </a>;

    }

    return img;

}


export default function ImagedParagraph(props) {

    const img = renderImg(props);
    
    if (props.reversed == true) {

        return (
            <div className={styles.container}>
                <TextCard className={styles.card} title={props.title} content={props.content}/>
                <div className={styles.imgContainer}>
                    {img}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {img}
            </div>
            <TextCard className={styles.card} title={props.title} content={props.content}/>
        </div>
    )

}

ImagedParagraph.propTypes = {

    "title": PropTypes.string,
    "src": PropTypes.string,
    "content": PropTypes.string,
    "href": PropTypes.string,
    "reversed": PropTypes.string

}