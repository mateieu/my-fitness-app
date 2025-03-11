import React, { useState } from 'react';
import '../../styles/QuestionnaireForm.css';

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    fitnessGoals: [],
    healthConditions: [],
    preferredWorkoutTime: '',
    dietaryRestrictions: [],
    sleepHours: ''
  });

  const questions = [
    {
      id: 'age',
      label: 'What is your age?',
      type: 'number',
    },
    {
      id: 'gender',
      label: 'What is your gender?',
      type: 'select',
      options: ['Male', 'Female', 'Other']
    },
    {
      id: 'weight',
      label: 'What is your weight (in kg)?',
      type: 'number'
    },
    {
      id: 'height',
      label: 'What is your height (in cm)?',
      type: 'number'
    },
    {
      id: 'activityLevel',
      label: 'What is your current activity level?',
      type: 'select',
      options: [
        'Sedentary',
        'Lightly Active',
        'Moderately Active',
        'Very Active',
        'Extremely Active'
      ]
    },
    {
      id: 'fitnessGoals',
      label: 'What are your fitness goals? (Select all that apply)',
      type: 'checkbox',
      options: [
        'Weight Loss',
        'Muscle Gain',
        'Improve Endurance',
        'Increase Flexibility',
        'Better Overall Health'
      ]
    },
    {
      id: 'healthConditions',
      label: 'Do you have any health conditions?',
      type: 'checkbox',
      options: [
        'None',
        'Heart Disease',
        'Diabetes',
        'Asthma',
        'Joint Pain',
        'Other'
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to n8n webhook
      const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      // Handle the AI response
      console.log('AI Response:', result);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedValues = formData[name] || [];
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...updatedValues, value]
        });
      } else {
        setFormData({
          ...formData,
          [name]: updatedValues.filter(item => item !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <form className="questionnaire-form" onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id} className="form-group">
          <label>{question.label}</label>
          
          {question.type === 'select' && (
            <select
              name={question.id}
              value={formData[question.id]}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {question.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          )}

          {question.type === 'number' && (
            <input
              type="number"
              name={question.id}
              value={formData[question.id]}
              onChange={handleChange}
              required
            />
          )}

          {question.type === 'checkbox' && (
            <div className="checkbox-group">
              {question.options.map(option => (
                <div key={option} className="checkbox-item">
                  <input
                    type="checkbox"
                    name={question.id}
                    value={option}
                    checked={formData[question.id]?.includes(option)}
                    onChange={handleChange}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <button type="submit">Get Your Personalized Plan</button>
    </form>
  );
};

export default QuestionnaireForm; 