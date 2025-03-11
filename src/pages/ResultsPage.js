import React, { useState, useEffect } from 'react';
import ResultsDisplay from './components/ResultsDisplay';
import '../styles/ResultsPage.css';

const ResultsPage = () => {
  const [results, setResults] = useState(null);

  // You can fetch results from your backend/n8n here
  useEffect(() => {
    // Example results - replace with actual API call
    const dummyResults = {
      workoutPlan: [
        {
          exercises: [
            { name: 'Push-ups', sets: 3, reps: 10 },
            { name: 'Squats', sets: 3, reps: 15 }
          ]
        }
      ],
      nutrition: {
        dailyCalories: 2000,
        protein: 150,
        carbs: 200,
        fats: 67
      },
      recommendations: [
        'Drink at least 8 glasses of water daily',
        'Get 7-8 hours of sleep'
      ]
    };

    setResults(dummyResults);
  }, []);

  return (
    <div className="results-page">
      <h1>Your Personalized Fitness Plan</h1>
      {results ? (
        <ResultsDisplay results={results} />
      ) : (
        <p>Loading your personalized plan...</p>
      )}
    </div>
  );
};

export default ResultsPage; 