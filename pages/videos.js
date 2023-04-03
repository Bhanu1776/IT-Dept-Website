/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const API_KEY = process.env.NEXT_PUBLIC_YT_API;

// const channelId = 'UCPcOCuFaHs1AuldTgjgtOLW';   //* College ChannelID
const channelId = 'UCmFt1y9cbHx3amPRctMEyvA'; //* Temporary Testing channelID

const fetchURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

const videos = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          VideoLink: `https://www.youtube.com/embed/${doc.id.videoId}`,
        }));
        setAllVideos(result);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {allVideos.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-row">
            <iframe
              width="460"
              height="315"
              src={item.VideoLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default videos;
