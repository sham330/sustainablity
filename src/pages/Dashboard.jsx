import { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { 
  Trash2, 
  Award, 
  Leaf, 
  BarChart2, 
  Calendar, 
  TrendingDown,
  Repeat,
  AlertTriangle
} from "lucide-react";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

/*useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // Get token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await axios.get('http://localhost:5000/api/user/dashboard', {
          headers: {
            'x-auth-token': token
          }
        });

        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data. Please try again later.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
*/
  // Mock data for demonstration
  const mockData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    totalPoints: 1250,
    level: "Eco Warrior",
    nextLevelPoints: 1500,
    wasteData: [
      { month: "Jan", recyclable: 18, nonRecyclable: 12 },
      { month: "Feb", recyclable: 22, nonRecyclable: 10 },
      { month: "Mar", recyclable: 28, nonRecyclable: 8 },
      { month: "Apr", recyclable: 32, nonRecyclable: 7 },
      { month: "May", recyclable: 35, nonRecyclable: 6 },
      { month: "Jun", recyclable: 40, nonRecyclable: 5 },
    ],
    resourceSubmissions: [
      { name: "Plastic", value: 45, type: "Non-Renewable", color: "#FF8042" },
      { name: "Paper", value: 30, type: "Renewable", color: "#00C49F" },
      { name: "Glass", value: 15, type: "Renewable", color: "#0088FE" },
      { name: "Metal", value: 10, type: "Non-Renewable", color: "#FFBB28" }
    ],
    carbonFootprint: [
      { month: "Jan", reduced: 12, emitted: 38 },
      { month: "Feb", reduced: 15, emitted: 35 },
      { month: "Mar", reduced: 20, emitted: 30 },
      { month: "Apr", reduced: 25, emitted: 28 },
      { month: "May", reduced: 30, emitted: 25 },
      { month: "Jun", reduced: 35, emitted: 22 },
    ],
    monthlyPoints: [
      { month: "Jan", points: 150 },
      { month: "Feb", points: 180 },
      { month: "Mar", points: 210 },
      { month: "Apr", points: 230 },
      { month: "May", points: 260 },
      { month: "Jun", points: 270 },
    ],
    achievements: [
      { id: 1, title: "Zero Waste Week", completed: true, points: 100 },
      { id: 2, title: "Waste Reduction Master", completed: true, points: 150 },
      { id: 3, title: "Recycling Champion", completed: false, points: 200 },
      { id: 4, title: "Carbon Neutralizer", completed: false, points: 250 },
    ],
    tips: [
      "Separate your waste into recyclable and non-recyclable categories.",
      "Consider composting food waste to reduce landfill contribution.",
      "Choose products with minimal packaging to reduce waste.",
      "Use reusable bags, bottles, and containers whenever possible."
    ]
  };

  // Use mock data for demonstration
  const data =  mockData;

  

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
          <h3 className="font-bold">Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Calculate progress percentage for level
  const progressPercentage = (data.totalPoints / data.nextLevelPoints) * 100;

  // Calculate total waste
  const totalWaste = data.wasteData.reduce(
    (acc, month) => acc + month.recyclable + month.nonRecyclable,
    0
  );

  // Calculate renewable vs non-renewable percentages
  const renewableResources = data.resourceSubmissions
    .filter(item => item.type === "Renewable")
    .reduce((acc, item) => acc + item.value, 0);
  
  const nonRenewableResources = data.resourceSubmissions
    .filter(item => item.type === "Non-Renewable")
    .reduce((acc, item) => acc + item.value, 0);

  const totalResources = renewableResources + nonRenewableResources;
  const renewablePercentage = ((renewableResources / totalResources) * 100).toFixed(1);
  const nonRenewablePercentage = ((nonRenewableResources / totalResources) * 100).toFixed(1);

  // Calculate total carbon footprint reduction
  const totalReduction = data.carbonFootprint.reduce(
    (acc, month) => acc + month.reduced, 0
  );
  
  // Calculate total carbon footprint emitted
  const totalEmission = data.carbonFootprint.reduce(
    (acc, month) => acc + month.emitted, 0
  );

  // Carbon reduction percentage
  const carbonReductionPercentage = (
    (totalReduction / (totalReduction + totalEmission)) * 100
  ).toFixed(1);

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total Points Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold">Total Points</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">{data.totalPoints}</span>
                <span className="ml-2 text-gray-500">points</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Progress to {data.level}</span>
                  <span className="text-sm">{progressPercentage.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Total Waste Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Trash2 className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold">Total Waste</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">{totalWaste}</span>
                <span className="ml-2 text-gray-500">kg</span>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Recyclable</p>
                  <p className="font-semibold">{
                    data.wasteData.reduce((acc, month) => acc + month.recyclable, 0)
                  } kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Non-recyclable</p>
                  <p className="font-semibold">{
                    data.wasteData.reduce((acc, month) => acc + month.nonRecyclable, 0)
                  } kg</p>
                </div>
              </div>
            </div>

            {/* Carbon Footprint Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold">Carbon Impact</h3>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Reduced</p>
                  <p className="font-semibold text-green-500">{totalReduction} kg</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">{carbonReductionPercentage}%</p>
                  <p className="text-xs text-gray-500">reduction</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Emitted</p>
                  <p className="font-semibold text-red-500">{totalEmission} kg</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${carbonReductionPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Resource Distribution */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Repeat className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold">Resource Distribution</h3>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Renewable</p>
                  <p className="font-semibold text-green-500">{renewablePercentage}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Non-renewable</p>
                  <p className="font-semibold text-orange-500">{nonRenewablePercentage}%</p>
                </div>
              </div>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data.resourceSubmissions}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {data.resourceSubmissions.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly Points */}
            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <div className="flex items-center mb-4">
                <BarChart2 className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="text-lg font-semibold">Monthly Points</h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.monthlyPoints}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="points"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                <h3 className="text-lg font-semibold">Waste Management Tips</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {data.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "waste":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Monthly Waste Analysis</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.wasteData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="recyclable" name="Recyclable Waste" fill="#00C49F" />
                    <Bar dataKey="nonRecyclable" name="Non-recyclable Waste" fill="#FF8042" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Waste Type Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.resourceSubmissions}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {data.resourceSubmissions.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Recycling Performance</h3>
                <div className="mb-6">
                  <h4 className="text-md font-medium mb-2">Renewable Resources</h4>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-500 h-4 rounded-full text-xs flex items-center justify-center text-white"
                      style={{ width: `${renewablePercentage}%` }}
                    >
                      {renewablePercentage}%
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-medium mb-2">Non-renewable Resources</h4>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-orange-500 h-4 rounded-full text-xs flex items-center justify-center text-white"
                      style={{ width: `${nonRenewablePercentage}%` }}
                    >
                      {nonRenewablePercentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "carbon":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Carbon Footprint Analysis</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.carbonFootprint}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="reduced" name="Carbon Reduced" fill="#00C49F" />
                    <Bar dataKey="emitted" name="Carbon Emitted" fill="#FF8042" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Carbon Reduction Impact</h3>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-green-500">{totalReduction}</span>
                  <span className="text-gray-500 ml-2">kg CO₂ reduced</span>
                </div>
                <div className="mb-4 text-center">
                  <span className="text-lg font-medium">That's equivalent to:</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Trees planted:</span>
                    <span className="font-medium">{Math.round(totalReduction / 20)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Car miles avoided:</span>
                    <span className="font-medium">{Math.round(totalReduction * 2.5)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy saved (kWh):</span>
                    <span className="font-medium">{Math.round(totalReduction * 1.5)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Carbon Footprint Trend</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.carbonFootprint}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="emitted" 
                        name="Carbon Emitted"
                        stroke="#FF8042" 
                        strokeWidth={2} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="reduced" 
                        name="Carbon Reduced"
                        stroke="#00C49F" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        );

      case "rewards":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Points History</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.monthlyPoints}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="points"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Your Achievements</h3>
              <div className="space-y-4">
                {data.achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-4 rounded-lg border ${
                      achievement.completed ? "border-green-500 bg-green-50" : "border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {achievement.completed ? (
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium">{achievement.title}</h4>
                          <span className="text-sm text-gray-500">
                            {achievement.points} points
                          </span>
                        </div>
                      </div>
                      <div>
                        {achievement.completed ? (
                          <span className="text-green-500 font-medium text-sm">Completed</span>
                        ) : (
                          <span className="text-gray-500 font-medium text-sm">Incomplete</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Level Progress</h3>
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Award className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h4 className="text-xl font-medium">{data.level}</h4>
                  <p className="text-gray-500">
                    {data.totalPoints} / {data.nextLevelPoints} points to next level
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-600 h-4 rounded-full text-xs flex items-center justify-center text-white"
                  style={{ width: `${progressPercentage}%` }}
                >
                  {progressPercentage.toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a tab to view data</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Waste Management Dashboard</h1>
            <div className="flex items-center">
              <div className="mr-4 text-right">
                <p className="text-sm font-medium text-gray-900">{data.name}</p>
                <p className="text-sm text-gray-500">{data.email}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white font-medium">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`${
                activeTab === "overview"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("waste")}
              className={`${
                activeTab === "waste"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Waste Analysis
            </button>
            <button
              onClick={() => setActiveTab("carbon")}
              className={`${
                activeTab === "carbon"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Carbon Footprint
            </button>
            <button
              onClick={() => setActiveTab("rewards")}
              className={`${
                activeTab === "rewards"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Points & Rewards
            </button>
          </nav>
        </div>

        {/* Content */}
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Dashboard;