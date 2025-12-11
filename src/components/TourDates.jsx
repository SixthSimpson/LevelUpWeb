import React from 'react';

export const TourDates = () => {
  // Sample tour dates - replace with your actual data
  const tourDates = [
    { date: 'Jan 15, 2025', venue: 'The Warfield', city: 'San Francisco, CA', tickets: 'https://tickets.com' },
    { date: 'Jan 22, 2025', venue: 'Red Rocks Amphitheatre', city: 'Morrison, CO', tickets: 'https://tickets.com' },
    { date: 'Feb 5, 2025', venue: 'Brooklyn Steel', city: 'Brooklyn, NY', tickets: 'https://tickets.com' },
    { date: 'Feb 12, 2025', venue: 'The Shrine', city: 'Los Angeles, CA', tickets: 'https://tickets.com' },
    { date: 'Feb 20, 2025', venue: 'Mission Ballroom', city: 'Denver, CO', tickets: 'https://tickets.com' },
    { date: 'Mar 1, 2025', venue: 'Radius', city: 'Chicago, IL', tickets: 'https://tickets.com' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {/* Section Title */}
      <h2 
        className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 tracking-tight"
        style={{
          fontFamily: "'Metal Mania', cursive",
          color: '#00ff00',
          textShadow: '0 0 2px rgba(0, 255, 0, 0.3), 0 0 4px rgba(0, 255, 0, 0.15)',
        }}
      >
        TOUR DATES
      </h2>

      {/* Tour Dates Table */}
      <div className="w-full max-w-4xl">
        <div
          className="overflow-x-auto rounded-lg p-6"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid rgba(0, 255, 0, 0.4)',
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.2), inset 0 0 30px rgba(0, 255, 0, 0.05)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2" style={{ borderColor: 'rgba(0, 255, 0, 0.3)' }}>
                <th className="text-left py-4 px-4 text-lime-400 font-bold uppercase tracking-wider text-sm md:text-base">
                  Date
                </th>
                <th className="text-left py-4 px-4 text-lime-400 font-bold uppercase tracking-wider text-sm md:text-base hidden md:table-cell">
                  Venue
                </th>
                <th className="text-left py-4 px-4 text-lime-400 font-bold uppercase tracking-wider text-sm md:text-base">
                  City
                </th>
                <th className="text-center py-4 px-4 text-lime-400 font-bold uppercase tracking-wider text-sm md:text-base">
                  Tickets
                </th>
              </tr>
            </thead>
            <tbody>
              {tourDates.map((show, index) => (
                <tr 
                  key={index}
                  className="border-b transition-all duration-300 hover:bg-lime-500/10"
                  style={{ borderColor: 'rgba(0, 255, 0, 0.1)' }}
                >
                  <td className="py-4 px-4 text-white font-semibold text-sm md:text-base">
                    {show.date}
                  </td>
                  <td className="py-4 px-4 text-gray-300 text-sm md:text-base hidden md:table-cell">
                    {show.venue}
                  </td>
                  <td className="py-4 px-4 text-gray-300 text-sm md:text-base">
                    <div className="md:hidden text-xs text-gray-400 mb-1">{show.venue}</div>
                    {show.city}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <a
                      href={show.tickets}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                        color: '#000',
                        boxShadow: '0 0 15px rgba(0, 255, 0, 0.4)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.8)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.4)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      BUY
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Shows Message (if needed) */}
        {tourDates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No upcoming tour dates at this time.</p>
            <p className="text-gray-500 text-sm mt-2">Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};