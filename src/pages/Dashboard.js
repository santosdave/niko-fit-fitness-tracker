import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Button';
import CalorieChart from '../components/CalorieChart';
import WorkoutChart from '../components/WorkoutChart';
function Dashboard() {
    return (
        <div className="space-y-10 w-full">
            <div className="flex space-x-10 items-end">
                <h1 className="text-4xl">Dashboard</h1>
                <Link  to="/workout">
                    <Button value="New workout" variant="primary" type="text"/>
                </Link>
            </div>
            <main className="lg:flex lg:space-x-10 space-y-5 lg:space-y-0">
                <section className="lg:w-72 bg-primary text-white rounded-xl">
                    <div className="p-10 space-y-10">
                        <h2 className="text-lg text-white">Workouts</h2>
                        <div className="space-y-1">
                            <h5 className="text-white text-sm font-light">Total</h5>
                            <h3 className="text-white text-6xl font-light">0</h3>
                        </div>
                    </div>
                    <WorkoutChart/>
                </section>
                <section className="flex-grow bg-white rounded-xl lg:flex">
                    <div className="p-10 space-y-10">
                        <h2 className="text-lg text-primary"> Calories</h2>
                        <div className="space-y-1">
                            <h5 className="text-primary font-light text-sm">TODAY</h5>
                            <h3 className="text-primary font-light text-6xl">0</h3>
                        </div>
                        <div className="space-y-1">
                            <h5 className="text-primary font-light text-sm">THIS WEEK</h5>
                            <h3 className="text-primary font-light text-6xl">0</h3>
                        </div>
                        <div className="space-y-1">
                            <h5 className="text-primary font-light text-sm">THIS MONTH</h5>
                            <h3 className="text-primary font-light text-6xl">0</h3>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <CalorieChart/>
                    </div>
                </section>

            </main>
            
        </div>
    )
}

export default Dashboard
