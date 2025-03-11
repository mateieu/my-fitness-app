import React, { useState } from 'react';
import '../styles/QuestionnairePage.css';

const QuestionnairePage = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    fitnessGoal: '',
    activityLevel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="questionnaire-page">
      <h1 className="title">Tell Us About Yourself</h1>
      <form className="questionnaire-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fitnessGoal">Fitness Goal</label>
          <select
            id="fitnessGoal"
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleChange}
            required
          >
            <option value="">Select a goal</option>
            <option value="loseWeight">Lose Weight</option>
            <option value="buildMuscle">Build Muscle</option>
            <option value="improveEndurance">Improve Endurance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="activityLevel">Activity Level</label>
          <select
            id="activityLevel"
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select activity level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default QuestionnairePage; 