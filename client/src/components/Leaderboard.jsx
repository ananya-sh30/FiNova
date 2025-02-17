import React, { useState } from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  

  return (
    <div className="leaderboard">
          <div className="top-three">
        <div className="rectangular-box second">
          <div className="rank-box">2</div>
          <h3>@amanda</h3>
          <p>5156 pts</p>
        </div>
        <div className="rectangular-box first">
          <div className="rank-box">1</div>
          <h3>@jeniffer</h3>
          <p>6470 pts</p>
        </div>
        <div className="rectangular-box third">
          <div className="rank-box">3</div>
          <h3>@canes</h3>
          <p>2341 pts</p>
        </div>
      </div>
      <div className="others">
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>User</th>
              <th>Points</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {[
              { place: 4, user: '@player', points: 3453, activity: '12 min ago' },
              { place: 5, user: '@pineapple', points: 2345, activity: '3 hrs ago' },
              { place: 6, user: '@catplayer', points: 1490, activity: '5 hrs ago' },
              { place: 7, user: '@gamer', points: 1234, activity: '8 min ago' },
              { place: 8, user: '@coder', points: 1198, activity: '1 hr ago' },
              { place: 9, user: '@streamer', points: 1103, activity: '2 hrs ago' },
              { place: 10, user: '@champion', points: 998, activity: '30 min ago' },
              { place: 11, user: '@john', points: 990, activity: '10 min ago' },
              { place: 12, user: '@water', points: 972, activity: '7 hr ago' },
              { place: 13, user: '@jelly', points: 898, activity: '9 hr ago' },
              { place: 14, user: '@lapi', points: 877, activity: '30 min ago' },
              { place: 15, user: '@mouse', points: 809, activity: '1 hr ago' },
              { place: 16, user: '@lion', points: 798, activity: '15 min ago' },
              { place: 17, user: '@smarty', points: 746, activity: '2 hr ago' },
              { place: 18, user: '@charger', points: 742, activity: '19 min ago' },
              { place: 19, user: '@chris', points: 693, activity: '3 hr ago' },
              { place: 20, user: '@elsa', points: 200, activity: '30 min ago' },
            ].map((entry, index) => (
              <tr key={index}>
                <td>{entry.place}</td>
                <td>{entry.user}</td>
                <td>{entry.points}</td>
                <td>{entry.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
