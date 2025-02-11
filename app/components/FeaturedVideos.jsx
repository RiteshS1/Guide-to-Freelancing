"use client";
import React, { useState } from 'react';

const FeaturedVideos = () => {
  const [activeTab, setActiveTab] = useState('Beginner');

  const thumbnailPath = '/yt_thumbnails.png';

  const videos = {
    Beginner: [
      { title: 'Master Freelancing with Manu', link: 'https://youtu.be/Ue5bOpVswIo?si=dm3cuxkJzQ0hhtXv', thumbnail: '/thumbnails/video_1.png', description: 'Founder & CEO of Aceternity explains...blah blah' },
      { title: 'Video 2', link: '/video2', thumbnail: thumbnailPath, description: 'Description for Video 2' },
      { title: 'Video 3', link: '/video3', thumbnail: thumbnailPath, description: 'Description for Video 3' },
      // Add more videos here
    ],
    Intermediate: [
      { title: 'Video 4', link: '/video4', thumbnail: thumbnailPath, description: 'Description for Video 4' },
      { title: 'Video 5', link: 'https://youtu.be/8UOs_rhpbO0?si=3rmMxJ6WVtgHApNI', thumbnail: '/thumbnails/video_5.png', description: 'Description for Video 5' },
      { title: 'Video 6', link: '/video6', thumbnail: thumbnailPath, description: 'Description for Video 6' },
      // Add more videos here
    ],
    Expert: [
      { title: 'Video 7', link: '/video7', thumbnail: thumbnailPath, description: 'Description for Video 7' },
      { title: 'Video 8', link: '/video8', thumbnail: thumbnailPath, description: 'Description for Video 8' },
      { title: 'Video 9', link: 'https://youtu.be/V_9tcBPX-74?si=2QQxlDTuIO0NQNIw', thumbnail: '/thumbnails/video_9.png', description: 'Description for Video 9' },
      // Add more videos here
    ],
  };

  return (
    <section className="bg-black h-screen p-10">
      <h3 className="text-3xl font-bold mb-4 text-white">Featured Videos
        <br />COMING SOON...
      </h3>
      <div className="flex mb-4">
        {['Beginner', 'Intermediate', 'Expert'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 cursor-pointer ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <table className="w-full text-white">
          <tbody>
            {videos[activeTab].map((video, index) => (
              <tr key={index} className="border-b cursor-pointer border-gray-700 hover:bg-gray-800 transition-colors">
                <td className="px-4 py-2 flex items-center">
                  <a href={video.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img src={video.thumbnail} alt={video.title} className="w-48 h-28 mr-4 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold">{video.title}</h3>
                      <p className="text-sm text-gray-400">{video.description}</p>
                    </div>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeaturedVideos;