import React, { useState } from 'react';
import { images } from '../assets';

const Bussiness = () => {
  const [activeTab, setActiveTab] = useState('Custom Store');

  const tabClass = (tab) =>
    `text-left font-bold text-lg md:text-xl py-2 px-4 ${
      activeTab === tab
        ? 'border-l-[5px] text-red-600 border-red-600'
        : 'text-black'
    }`;

  return (
    <div className="w-full flex flex-col items-center justify-around px-4 md:px-10 py-10 mt-5">
      <h1 className="font-bold text-2xl md:text-3xl text-red-900 text-center">
        Grow your business with a suite of tools built for you
      </h1>

      <div className="mt-20 flex flex-col md:flex-row gap-10 w-full">
        {/* Sidebar / Tabs */}
        <aside className="flex flex-col items-center md:items-center w-full md:w-1/4">
          <div className="flex items-start md:items-center">
            {/* Vertical line on medium+ screens */}
            <div className="hidden md:block h-[350px] w-[2px] bg-red-900"></div>

            <div className="flex flex-col space-y-5">
              <button className={tabClass('Custom Store')} onClick={() => setActiveTab('Custom Store')}>
                Custom <br className="hidden md:block" /> Store
              </button>
              <button className={tabClass('Advertising Tool')} onClick={() => setActiveTab('Advertising Tool')}>
                Advertising <br className="hidden md:block" /> Tool
              </button>
              <button className={tabClass('Data and Analytics')} onClick={() => setActiveTab('Data and Analytics')}>
                Data and <br className="hidden md:block" /> Analytics
              </button>
              <button className={tabClass('Customer Support')} onClick={() => setActiveTab('Customer Support')}>
                Customer <br className="hidden md:block" /> Support
              </button>
            </div>
          </div>
        </aside>

        {/* Tab Content */}
        <div className="w-full md:w-3/4 p-4 space-y-5">
          {activeTab === 'Custom Store' && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-5 text-center md:text-left">
                <p className="text-2xl md:text-4xl font-bold">
                  Set up a store that <br /> showcases your brand
                </p>
                <p>
                  Differentiate yourself from the competition with a full store <br className="hidden md:block" />
                  dedicated to your products—no coding or design skills necessary!
                </p>
              </div>
              <img src={images.custom} className="w-full max-w-[500px]" alt="Custom Store" />
            </div>
          )}

          {activeTab === 'Advertising Tool' && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-5 text-center md:text-left">
                <p className="text-2xl md:text-4xl font-bold">
                  Increase exposure by <br /> up to 120% with a suite of <br /> smart advertising tools.
                </p>
                <p>
                  Get your products placed in the right spots to be noticed by the <br className="hidden md:block" />
                  exact audience you are targeting.
                </p>
              </div>
              <img src={images.advertising} className="w-full max-w-[500px]" alt="Advertising Tool" />
            </div>
          )}

          {activeTab === 'Data and Analytics' && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-5 text-center md:text-left">
                <p className="text-2xl md:text-4xl font-bold">
                  Optimize your every <br /> move with in-depth data <br /> and customer insights
                </p>
                <p>
                  Improve performance with dashboards detailing product <br className="hidden md:block" />
                  exposure, click volume, spend, average cost, store visits, and more.
                </p>
              </div>
              <img src={images.dataanaly} className="w-full max-w-[500px]" alt="Data and Analytics" />
            </div>
          )}

          {activeTab === 'Customer Support' && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-5 text-center md:text-left">
                <p className="text-2xl md:text-4xl font-bold">
                  Know you’re supported <br /> throughout your journey
                </p>
                <p>
                  From onboarding help to online chats to local support during <br className="hidden md:block" />
                  business hours and account optimization tips — we’re here for you.
                </p>
              </div>
              <img src={images.customer} className="w-full max-w-[500px]" alt="Customer Support" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
