import React, { useState } from 'react'
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  Filter,
  Layers,
  ArrowUpRight,
} from 'lucide-react'

export const PowerBISimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'executive' | 'customer' | 'product' | 'trends'>('executive')
  const [selectedRegion, setSelectedRegion] = useState<string>('All')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Multipliers based on slicers
  const multiplier =
    (selectedRegion === 'All' ? 1 : selectedRegion === 'North' ? 0.45 : selectedRegion === 'South' ? 0.35 : 0.2) *
    (selectedCategory === 'All' ? 1 : selectedCategory === 'Enterprise' ? 0.6 : 0.4)

  const rawSales = 8.76
  const rawProfit = 2.15
  const rawOrders = 3000
  const rawCustomers = 545

  const displaySales = (rawSales * (selectedRegion === 'All' && selectedCategory === 'All' ? 1 : multiplier * 1.5)).toFixed(2)
  const displayProfit = (rawProfit * (selectedRegion === 'All' && selectedCategory === 'All' ? 1 : multiplier * 1.5)).toFixed(2)
  const displayOrders = Math.round(rawOrders * (selectedRegion === 'All' && selectedCategory === 'All' ? 1 : multiplier * 1.5)).toLocaleString()
  const displayCustomers = Math.round(rawCustomers * (selectedRegion === 'All' && selectedCategory === 'All' ? 1 : multiplier * 1.5))

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Interactive DAX Simulation Engine
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Enterprise Sales & Profitability Dashboard
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Real-time recreation of the 4-page Power BI & DAX analytics report.
          </p>
        </div>

        {/* 4 Page Switcher */}
        <div className="flex flex-wrap gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('executive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'executive'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            1. Executive Overview
          </button>
          <button
            onClick={() => setActiveTab('customer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'customer'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            2. Customer Cohorts
          </button>
          <button
            onClick={() => setActiveTab('product')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'product'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3. Product Matrix
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'trends'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            4. Monthly DAX Trends
          </button>
        </div>
      </div>

      {/* Slicers Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-4 bg-slate-900/50 rounded-xl my-6 border border-slate-800/80 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Slicers:</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Region Slicer */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Region:</span>
            {['All', 'North', 'South', 'West'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  selectedRegion === region
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Category Slicer */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Category:</span>
            {['All', 'Enterprise', 'Standard'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Total Sales (DAX Sum)</span>
            <DollarSign className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black text-white">₹{displaySales}M</div>
          <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>+18.4% YoY Growth</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Net Profit</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-300">₹{displayProfit}M</div>
          <div className="text-[11px] text-slate-400 mt-1">
            Margin: <strong className="text-emerald-400">24.54%</strong>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Total Orders</span>
            <ShoppingBag className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black text-white">{displayOrders}</div>
          <div className="text-[11px] text-blue-400 mt-1">Processed across channels</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Unique Customers</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-black text-white">{displayCustomers}</div>
          <div className="text-[11px] text-purple-400 font-semibold mt-1">
            95% Returning Rate (520 Users)
          </div>
        </div>
      </div>

      {/* Tab Specific Visual Content */}
      <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
        {activeTab === 'executive' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>Executive Metric Analysis & Territory Distribution</span>
              </h4>
              <span className="text-xs text-slate-400">DAX Calculation: CALCULATE(SUM(Sales))</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">South Region Sales</div>
                <div className="text-lg font-bold text-cyan-300">₹3.85M (44%)</div>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cyan-500 h-full rounded-full" style={{ width: '44%' }} />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">North Region Sales</div>
                <div className="text-lg font-bold text-blue-300">₹2.95M (34%)</div>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '34%' }} />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">West Region Sales</div>
                <div className="text-lg font-bold text-indigo-300">₹1.96M (22%)</div>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '22%' }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'customer' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>Customer Retention & Cohort Segmentation</span>
              </h4>
              <span className="text-xs text-emerald-400 font-semibold">95% Return Rate</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="flex justify-between text-xs text-slate-300 mb-2">
                  <span>Returning Customers vs First-Time</span>
                  <span className="font-bold text-white">520 / 545</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full" style={{ width: '95%' }} title="Returning (95%)" />
                  <div className="bg-slate-600 h-full" style={{ width: '5%' }} title="New (5%)" />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                  <span className="text-emerald-400 font-medium">● 520 Returning (95.4%)</span>
                  <span>● 25 New (4.6%)</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">Average Order Value (AOV)</div>
                <div className="text-xl font-bold text-white">₹2,920 per transaction</div>
                <p className="text-[11px] text-slate-400 mt-1">
                  High loyalty and high frequency purchasing drives consistent enterprise ARR.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'product' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Product Line Contribution & Margins</span>
            </h4>
            <div className="space-y-2.5">
              {[
                { name: 'Enterprise Cloud Solutions', share: 48, profit: '₹1.15M', margin: '27.4%' },
                { name: 'Analytics & Reporting Licenses', share: 32, profit: '₹0.68M', margin: '24.1%' },
                { name: 'Implementation & Support Services', share: 20, profit: '₹0.32M', margin: '18.3%' },
              ].map((prod) => (
                <div key={prod.name} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="w-1/3">
                    <span className="font-semibold text-slate-200">{prod.name}</span>
                  </div>
                  <div className="w-1/3 px-3">
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${prod.share}%` }} />
                    </div>
                  </div>
                  <div className="w-1/3 text-right">
                    <span className="text-emerald-400 font-bold">{prod.profit}</span>
                    <span className="text-slate-400 ml-2">({prod.margin})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Monthly DAX Growth Model & Variance</span>
              </h4>
              <span className="text-xs text-slate-400">DAX: DATESYTD(Calendar[Date])</span>
            </div>

            <div className="grid grid-cols-6 gap-2 text-center pt-2">
              {[
                { m: 'Jan', val: '650k', h: '45%' },
                { m: 'Feb', val: '720k', h: '55%' },
                { m: 'Mar', val: '810k', h: '65%' },
                { m: 'Apr', val: '890k', h: '75%' },
                { m: 'May', val: '980k', h: '88%' },
                { m: 'Jun', val: '1.1M', h: '100%' },
              ].map((item) => (
                <div key={item.m} className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 flex flex-col justify-end h-32">
                  <div className="w-full bg-cyan-500/20 rounded-md mx-auto flex items-end justify-center mb-2 overflow-hidden" style={{ height: item.h }}>
                    <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-sm" style={{ height: '80%' }} />
                  </div>
                  <div className="text-[10px] text-cyan-400 font-bold">{item.val}</div>
                  <div className="text-[11px] text-slate-400 font-medium">{item.m}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Simulator Footer Callout */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-3 border-t border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <span className="text-cyan-400 font-bold">Tech:</span>
          <span>Power BI Desktop • DAX Measures • Star Schema Data Model • Microsoft Excel</span>
        </div>
        <a
          href="https://github.com/VenkateshVSM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          <span>View on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
