import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const FocusWheelApp = () => {
    const [goal, setGoal] = useState("")
    const [thoughts, setThoughts] = useState([])
    const [newThought, setNewThought] = useState("")
    const [completed, setCompleted] = useState(false)

    const addThought = () => {
        if (newThought.trim() !== "") {
            setThoughts([...thoughts, newThought])
            setNewThought("")
        }
    }

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            e.preventDefault()
            addThought()
        }
    }

    const markAsComplete = () => {
        setCompleted(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Focus Wheel Prozess</h1>
                <Card className="p-4 md:p-6 shadow-xl bg-white rounded-2xl">
                    <CardContent className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Schritt 1: Ziel setzen</h2>
                        <Input
                            placeholder="Schreibe dein Ziel hier auf..."
                            value={goal}
                            onChange={e => setGoal(e.target.value)}
                        />
                    </CardContent>
                </Card>

                {goal && !completed && (
                    <Card className="p-4 md:p-6 shadow-xl bg-white rounded-2xl">
                        <CardContent className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                                Schritt 2: Gedanken hinzufügen
                            </h2>
                            <Textarea
                                placeholder="Schreibe einen positiven Gedanken über dein Ziel..."
                                value={newThought}
                                onChange={e => setNewThought(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <Button
                                onClick={addThought}
                                className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                            >
                                Gedanken hinzufügen
                            </Button>
                        </CardContent>
                    </Card>
                )}

                {thoughts.length > 0 && !completed && (
                    <Card className="p-4 md:p-6 shadow-xl bg-white rounded-2xl">
                        <CardContent className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                                Deine positiven Gedanken
                            </h2>
                            <ol className="list-decimal pl-6 space-y-2">
                                {thoughts.map((thought, index) => (
                                    <li key={index} className="text-gray-700">
                                        {thought}
                                    </li>
                                ))}
                            </ol>
                        </CardContent>
                    </Card>
                )}

                {thoughts.length > 0 && !completed && (
                    <Button onClick={markAsComplete} className="w-full bg-green-500 hover:bg-green-600 text-white">
                        Fertig!
                    </Button>
                )}

                {completed && (
                    <div className="p-6 bg-white rounded-2xl shadow-xl text-center">
                        <h2 className="text-2xl font-bold text-green-600">Großartig gemacht!</h2>
                        <p className="text-lg text-gray-800 mt-4">
                            Du bist deinem Ziel nähergekommen und deine Schwingung hat sich deutlich verbessert. Halte
                            dieses positive Gefühl fest und vertraue darauf, dass dein Ziel zu dir kommt!
                        </p>
                        <div className="mt-6">
                            <span className="text-4xl">✨</span>
                            <span className="text-4xl">🌟</span>
                            <span className="text-4xl">🌈</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FocusWheelApp
