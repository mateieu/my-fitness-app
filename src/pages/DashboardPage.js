import React from 'react';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Track your progress and manage your fitness journey</p>
      </header>
      <main className="dashboard-content">
        <section className="stats-section">
          <h2>Your Stats</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Workouts Completed</h3>
              <p>15</p>
            </div>
            <div className="stat-card">
              <h3>Calories Burned</h3>
              <p>1200 kcal</p>
            </div>
            <div className="stat-card">
              <h3>Active Days</h3>
              <p>10</p>
            </div>
          </div>
        </section>
        <section className="goals-section">
          <h2>Your Goals</h2>
          <div className="goals-list">
            <div className="goal-item">
              <h3>Lose 5 kg</h3>
              <p>Progress: 2 kg</p>
            </div>
            <div className="goal-item">
              <h3>Run 10 km</h3>
              <p>Progress: 6 km</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage; 