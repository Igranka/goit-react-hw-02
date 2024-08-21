import css from "./Options.module.css";

function Options ({ updateFeedback, handleReset, total }) {
    return (
    <>
        <button
            type="button"
            className={css.btn}
            onClick={() => updateFeedback("good")}
        >
            Good 
        </button>
        
        <button
            type="button"
            className={css.btn}
            onClick={() => updateFeedback("neutral")}
        >
            Neutral
        </button>
            
        <button
            type="button"
            className={css.btn}
            onClick={() => updateFeedback("bad")}
        >
            Bad
        </button>

        {total !== 0 && (
        <button className={css.btn} type="button" onClick={handleReset}>
          Reset
        </button>
      )}
    </>
    );
}

export default Options;