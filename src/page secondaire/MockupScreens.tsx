import React from 'react';
import {
  Activity,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Home,
  LayoutDashboard,
  Settings,
  User,
  Zap } from
'lucide-react';
// Screen 1: Home - Value Prop
export function HomeScreen() {
  return (
    <div className="flex flex-col h-full bg-gray-50 pt-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Good Morning,</h3>
          <p className="text-sm text-gray-500">Alex</p>
        </div>
        <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
          <User size={20} />
        </div>
      </div>

      <div className="bg-indigo-600 rounded-2xl p-6 text-white mb-6 shadow-lg shadow-indigo-200">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Zap size={20} />
          </div>
          <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
            Pro
          </span>
        </div>
        <h4 className="text-lg font-semibold mb-1">Daily Goal</h4>
        <p className="text-indigo-100 text-sm mb-4">85% completed</p>
        <div className="w-full bg-indigo-900/30 h-2 rounded-full overflow-hidden">
          <div className="bg-white h-full w-[85%]"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <LayoutDashboard className="text-orange-500 mb-3" size={24} />
          <p className="font-medium text-gray-900">Overview</p>
          <p className="text-xs text-gray-500">4 new updates</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <Calendar className="text-blue-500 mb-3" size={24} />
          <p className="font-medium text-gray-900">Schedule</p>
          <p className="text-xs text-gray-500">2 meetings</p>
        </div>
      </div>
    </div>);

}
// Screen 2: Tracking - Core Feature
export function TrackingScreen() {
  return (
    <div className="flex flex-col h-full bg-white pt-12 px-6">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-gray-900">My Tasks</h3>
        <button className="p-2 bg-gray-100 rounded-full">
          <Calendar size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        {[
        {
          title: 'Design System Review',
          time: '10:00 AM',
          color: 'bg-purple-500',
          done: true
        },
        {
          title: 'Client Meeting',
          time: '11:30 AM',
          color: 'bg-blue-500',
          done: false
        },
        {
          title: 'Product Sync',
          time: '2:00 PM',
          color: 'bg-orange-500',
          done: false
        },
        {
          title: 'Update Documentation',
          time: '4:00 PM',
          color: 'bg-green-500',
          done: false
        }].
        map((item, i) =>
        <div
          key={i}
          className={`flex items-center p-4 rounded-xl border ${item.done ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-200 shadow-sm'}`}>

            <div className={`h-3 w-3 rounded-full ${item.color} mr-4`}></div>
            <div className="flex-1">
              <h4
              className={`font-medium ${item.done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>

                {item.title}
              </h4>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
            {item.done ?
          <CheckCircle2 size={20} className="text-gray-300" /> :

          <div className="h-5 w-5 rounded-full border-2 border-gray-200"></div>
          }
          </div>
        )}
      </div>

      <div className="mt-auto mb-8 p-4 bg-gray-900 rounded-xl text-white flex items-center justify-between shadow-xl">
        <span>3 tasks remaining</span>
        <button className="bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-medium">
          View
        </button>
      </div>
    </div>);

}
// Screen 3: Analytics - Insights
export function AnalyticsScreen() {
  return (
    <div className="flex flex-col h-full bg-gray-50 pt-12 px-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Analytics</h3>
        <p className="text-sm text-gray-500">Last 7 days</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex items-end justify-between h-32 mb-4 px-2">
          {[40, 70, 45, 90, 60, 80, 50].map((h, i) =>
          <div
            key={i}
            className="w-2 bg-indigo-100 rounded-t-full relative group">

              <div
              className="absolute bottom-0 w-full bg-indigo-500 rounded-t-full transition-all duration-500"
              style={{
                height: `${h}%`
              }}>
            </div>
            </div>
          )}
        </div>
        <div className="flex justify-between text-xs text-gray-400 px-1">
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
          <span>S</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} className="text-green-500" />
            <span className="text-xs font-medium text-gray-500">Activity</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">+24%</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={16} className="text-blue-500" />
            <span className="text-xs font-medium text-gray-500">Usage</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">12h</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Top Categories</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                <Zap size={16} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Productivity
              </span>
            </div>
            <span className="text-sm font-bold text-gray-900">45%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                <CreditCard size={16} />
              </div>
              <span className="text-sm font-medium text-gray-700">Finance</span>
            </div>
            <span className="text-sm font-bold text-gray-900">30%</span>
          </div>
        </div>
      </div>
    </div>);

}
// Screen 4: Profile - Personalization
export function ProfileScreen() {
  return (
    <div className="flex flex-col h-full bg-white pt-0">
      <div className="bg-gray-900 text-white pt-12 pb-8 px-6 rounded-b-[2.5rem]">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1">
            <div className="h-full w-full rounded-full bg-gray-800 border-2 border-white/20"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Alex Morgan</h3>
            <p className="text-gray-400 text-sm">Premium Member</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-lg font-bold">128</p>
            <p className="text-xs text-gray-400">Projects</p>
          </div>
          <div className="w-px bg-gray-700"></div>
          <div className="text-center">
            <p className="text-lg font-bold">4.2k</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-2">
        {[
        {
          icon: User,
          label: 'Account Settings'
        },
        {
          icon: Bell,
          label: 'Notifications'
        },
        {
          icon: Settings,
          label: 'Preferences'
        },
        {
          icon: CreditCard,
          label: 'Billing'
        }].
        map((item, i) =>
        <div
          key={i}
          className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-50 group-hover:bg-white border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-indigo-600 transition-colors">
                <item.icon size={20} />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-gray-900">
                {item.label}
              </span>
            </div>
            <ChevronRight
            size={16}
            className="text-gray-300 group-hover:text-gray-500" />

          </div>
        )}
      </div>
    </div>);

}