import { useState } from "react";

function App() {
  const [options, setOptions] = useState(0);
  const [feedback, setFeedback] = useState(() => {
      const savedFeedback = window.localStorage.getItem("saved-feedback");
      if (savedFeedback !== null) {
        return JSON.parse(savedFeedback);
      }
      return { good: 0, neutral: 0, bad: 0 };
  });

  const handleFeedback = () => {
		setFeedback(feedback + 1);
  };

  return (
    <div className="yes">
      Hello
    </div>
  );
}
export default App

