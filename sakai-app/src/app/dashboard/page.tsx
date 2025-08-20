'use client';

import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { ProgressBar } from 'primereact/progressbar';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Divider } from 'primereact/divider';
import { Tag } from 'primereact/tag';

export default function Dashboard() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [courseProgress, setCourseProgress] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);

  useEffect(() => {
    // Chart data for learning progress
    const data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      datasets: [
        {
          label: 'Course Progress',
          data: [65, 72, 78, 85, 90, 95],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Assignments',
          data: [45, 58, 62, 70, 75, 80],
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Learning Progress Overview'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    };

    setChartData(data);
    setChartOptions(options);

    // Mock data for recent activities
    setRecentActivities([
      {
        id: 1,
        user: 'John Doe',
        action: 'Completed Module 3',
        course: 'Advanced React',
        time: '2 hours ago',
        avatar: 'JD',
        status: 'completed'
      },
      {
        id: 2,
        user: 'Sarah Wilson',
        action: 'Submitted Assignment',
        course: 'Data Science',
        time: '4 hours ago',
        avatar: 'SW',
        status: 'pending'
      },
      {
        id: 3,
        user: 'Mike Johnson',
        action: 'Started New Course',
        course: 'Machine Learning',
        time: '6 hours ago',
        avatar: 'MJ',
        status: 'in-progress'
      },
      {
        id: 4,
        user: 'Emily Brown',
        action: 'Achieved Certificate',
        course: 'Web Development',
        time: '1 day ago',
        avatar: 'EB',
        status: 'completed'
      }
    ]);

    // Mock data for course progress
    setCourseProgress([
      {
        id: 1,
        course: 'Advanced React Development',
        instructor: 'Dr. Alex Chen',
        progress: 85,
        status: 'In Progress',
        nextLesson: 'State Management with Redux',
        dueDate: '2024-02-15'
      },
      {
        id: 2,
        course: 'Data Science Fundamentals',
        instructor: 'Prof. Maria Garcia',
        progress: 92,
        status: 'Almost Complete',
        nextLesson: 'Final Project Submission',
        dueDate: '2024-02-10'
      },
      {
        id: 3,
        course: 'Machine Learning Basics',
        instructor: 'Dr. James Wilson',
        progress: 45,
        status: 'In Progress',
        nextLesson: 'Neural Networks',
        dueDate: '2024-02-20'
      },
      {
        id: 4,
        course: 'Web Development Bootcamp',
        instructor: 'Sarah Thompson',
        progress: 100,
        status: 'Completed',
        nextLesson: 'N/A',
        dueDate: '2024-01-30'
      }
    ]);
  }, []);

  const getStatusSeverity = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'info';
      case 'pending':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  const getProgressSeverity = (progress: number) => {
    if (progress >= 80) return 'success';
    if (progress >= 60) return 'info';
    if (progress >= 40) return 'warning';
    return 'danger';
  };

  const statusOptions = [
    { label: 'All Status', value: null },
    { label: 'Completed', value: 'completed' },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Pending', value: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your learning journey.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <i className="pi pi-book text-blue-600 text-xl"></i>
              </div>
            </div>
          </Card>

          <Card className="shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <i className="pi pi-clock text-yellow-600 text-xl"></i>
              </div>
            </div>
          </Card>

          <Card className="shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <i className="pi pi-check-circle text-green-600 text-xl"></i>
              </div>
            </div>
          </Card>

          <Card className="shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Hours</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <i className="pi pi-clock text-purple-600 text-xl"></i>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts and Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Progress Chart */}
          <Card className="shadow-sm">
            <div className="h-80">
              <Chart type="line" data={chartData} options={chartOptions} />
            </div>
          </Card>

          {/* Course Progress */}
          <Card className="shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Progress</h3>
            <div className="space-y-4">
              {courseProgress.map((course) => (
                <div key={course.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{course.course}</h4>
                      <p className="text-sm text-gray-600">{course.instructor}</p>
                    </div>
                    <Tag 
                      value={course.status} 
                      severity={getProgressSeverity(course.progress)}
                      className="text-xs"
                    />
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <ProgressBar 
                      value={course.progress} 
                      className="h-2"
                      color={getProgressSeverity(course.progress) === 'success' ? '#10B981' : 
                             getProgressSeverity(course.progress) === 'info' ? '#3B82F6' :
                             getProgressSeverity(course.progress) === 'warning' ? '#F59E0B' : '#EF4444'}
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Next: {course.nextLesson} • Due: {course.dueDate}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Activities and Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
                <Button label="View All" icon="pi pi-arrow-right" text />
              </div>
              <DataTable value={recentActivities} className="p-datatable-sm">
                <Column 
                  header="User" 
                  body={(rowData) => (
                    <div className="flex items-center space-x-3">
                      <Avatar label={rowData.avatar} size="normal" className="bg-blue-100 text-blue-600" />
                      <span className="font-medium text-gray-900">{rowData.user}</span>
                    </div>
                  )}
                />
                <Column 
                  header="Action" 
                  body={(rowData) => (
                    <div>
                      <p className="font-medium text-gray-900">{rowData.action}</p>
                      <p className="text-sm text-gray-600">{rowData.course}</p>
                    </div>
                  )}
                />
                <Column 
                  header="Time" 
                  body={(rowData) => (
                    <span className="text-sm text-gray-500">{rowData.time}</span>
                  )}
                />
                <Column 
                  header="Status" 
                  body={(rowData) => (
                    <Badge 
                      value={rowData.status} 
                      severity={getStatusSeverity(rowData.status)}
                      className="capitalize"
                    />
                  )}
                />
              </DataTable>
            </Card>
          </div>

          {/* Filters and Quick Actions */}
          <div>
            <Card className="shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <Button 
                  label="Start New Course" 
                  icon="pi pi-plus" 
                  className="w-full justify-start"
                  severity="success"
                />
                <Button 
                  label="View Calendar" 
                  icon="pi pi-calendar" 
                  className="w-full justify-start"
                  outlined
                />
                <Button 
                  label="Download Certificate" 
                  icon="pi pi-download" 
                  className="w-full justify-start"
                  outlined
                />
                <Button 
                  label="Contact Support" 
                  icon="pi pi-question-circle" 
                  className="w-full justify-start"
                  outlined
                />
              </div>

              <Divider />

              <h4 className="text-md font-semibold text-gray-900 mb-3">Filters</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                  <Calendar 
                    value={selectedDate} 
                    onChange={(e) => setSelectedDate(e.value || null)} 
                    showIcon 
                    placeholder="Select date"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <Dropdown 
                    value={selectedStatus} 
                    onChange={(e) => setSelectedStatus(e.value)} 
                    options={statusOptions} 
                    placeholder="Select status"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                  <div className="relative">
                    <InputText 
                      placeholder="Search courses..." 
                      className="w-full pl-10"
                    />
                    <i className="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <Card className="shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
          <DataTable value={courseProgress.filter(c => c.status === 'In Progress')} className="p-datatable-sm">
            <Column field="course" header="Course" />
            <Column field="nextLesson" header="Next Lesson" />
            <Column 
              field="dueDate" 
              header="Due Date" 
              body={(rowData) => (
                <Tag 
                  value={rowData.dueDate} 
                  severity={new Date(rowData.dueDate) < new Date() ? 'danger' : 'info'}
                />
              )}
            />
            <Column 
              header="Actions" 
              body={() => (
                <div className="flex space-x-2">
                  <Button icon="pi pi-play" size="small" text />
                  <Button icon="pi pi-eye" size="small" text />
                </div>
              )}
            />
          </DataTable>
        </Card>
      </div>
    </div>
  );
}
