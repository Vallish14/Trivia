// src/pages/index.tsx
import React, { useState } from 'react';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import axios from 'axios';

const IndexPage: React.FC = () => {
    const [teams, setTeams] = useState<string[]>(['']);

    const handleInputChange = (index: number, value: string) => {
        const newTeams = [...teams];
        newTeams[index] = value;
        setTeams(newTeams);
    };

    const handleAddTeam = () => {
        setTeams([...teams, '']);
    };

    const handleStartGame = async () => {
        try {
            // Assuming your backend API endpoint is '/api/start-game'
            const response = await axios.post('/api/start-game', { teams });
            console.log('Game started with teams:', teams);
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error starting game:', error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
            <div className="container max-w-3xl px-4 py-8 space-y-8">
                {teams.map((team, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div className="relative w-full">
                            <Input
                                className="w-full px-4 py-2 pr-4 text-gray-900 bg-gray-100 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-50"
                                placeholder="Team Name"
                                value={team}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                        </div>
                    </div>
                ))}
                <div className="flex justify-center gap-4">
                    <Button
                        className="w-full px-4 py-2 text-white bg-gradient-to-br from-indigo-500 to-purple-500 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={handleAddTeam}
                    >
                        Add Team
                    </Button>
                </div>
                <div className="flex justify-center">
                    <Button
                        className="w-full px-4 py-2 text-lg font-medium text-white bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gradient-to-br dark:from-indigo-600 dark:to-purple-600 dark:hover:bg-gradient-to-br dark:hover:from-indigo-700 dark:hover:to-purple-700 dark:focus:ring-indigo-600"
                        onClick={handleStartGame}
                    >
                        Start Game
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default IndexPage;
