import './Card.css';

function Card(props){
    console.log(props.className);
    let style_classes = 'card ' + props.className;
    return (
        <div className={style_classes}>
            {props.children}
        </div>
    );
}

export default Card;
