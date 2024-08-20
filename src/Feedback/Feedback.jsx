import css from "./Feedback.module.css";

function Feedback({ feedback: { good, neutral, bad }, total, positive }) {
    return (
        <div>
            <ul>
                <li className={css.item}>
                    Good: {good}
                </li>

                <li className={css.item}>
                    Neutral: {neutral}
                </li>

                <li className={css.item}>
                    Bad: {bad}
                </li>

                <li className={css.item}>
                    Total: {total}
                </li>

                <li className={css.item}>
                    Positive: {positive}
                </li>    
            </ul>
        </div>
    );
}

export default Feedback;

