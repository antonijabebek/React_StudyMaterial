import PropTypes from "prop-types";

export default function Comment(props) {
    return (
        <div className="comment">
            <Avatar author={props.author} />
            <p> {props.text}</p>
            <p>Author: {props.author.name}</p>
            <small>{formatDate(props.date)}</small>
            <p>{props.verified === true
                ? "This comment is from verified user"
                : "This comment is from verified user"}</p>
        </div>
    );
}

function Avatar(props) {
    return <img id="avatar" src={props.author.url} alt={props.author.name} />;
}
function formatDate(date) {
    return date.toLocaleDateString("en-US");
}


Comment.PropTypes = {
    text: PropTypes.string,
    date: PropTypes.any,
    author: PropTypes.object,
};


Comment.defaultProps = {
    verified: true,
}