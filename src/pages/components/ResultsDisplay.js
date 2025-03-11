import React from 'react';
import '../../styles/ResultsDisplay.css';

const ResultsDisplay = ({ results }) => {
  if (!results) return null;

  return (
    <div className="results-container">
      <h2>Your Personalized Fitness Plan</h2>
      
      {/* Workout Plan */}
      <section className="plan-section">
        <h3>Workout Plan</h3>
        <div className="workout-plan">
          {results.workoutPlan && results.workoutPlan.map((workout, index) => (
            <div key={index} className="workout-day">
              <h4>Day {index + 1}</h4>
              <ul>
                {workout.exercises.map((exercise, i) => (
                  <li key={i}>
                    {exercise.name}: {exercise.sets} sets x {exercise.reps} reps
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Nutrition Plan */}
      <section className="plan-section">
        <h3>Nutrition Recommendations</h3>
        <div className="nutrition-plan">
          <p>Daily Calorie Target: {results.nutrition?.dailyCalories}</p>
          <div className="macros">
            <h4>Macronutrient Split:</h4>
            <ul>
              <li>Protein: {results.nutrition?.protein}g</li>
              <li>Carbs: {results.nutrition?.carbs}g</li>
              <li>Fats: {results.nutrition?.fats}g</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Recommendations */}
      <section className="plan-section">
        <h3>Additional Recommendations</h3>
        <ul>
          {results.recommendations?.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResultsDisplay; 