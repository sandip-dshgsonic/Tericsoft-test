"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VideoShowcase = ({ darkMode }) => {
  const videoRefs = useRef([]);
  const [videosLoaded, setVideosLoaded] = useState([false, false, false]);

  const videos = [
    "/Videos/video1.mp4",
    "/Videos/video2.mp4",
    "/Videos/video3.mp4",
  ];

  const handleVideoLoad = (index) => {
    setVideosLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.load();
        const playVideo = async () => {
          try {
            video.playbackRate = 1.0;
            await video.play();
          } catch (error) {
            console.log("Video autoplay failed:", error);
          }
        };
        video.addEventListener("loadeddata", () => {
          handleVideoLoad(index);
          playVideo();
        });
        return () => {
          video.removeEventListener("loadeddata", handleVideoLoad);
        };
      }
    });
  }, []);

  return (
    <div
      className={`min-h-screen py-9 mt-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {!videosLoaded[index] && (
                <div
                  className={`absolute inset-0 rounded-xl flex items-center justify-center ${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-10 h-10 border-4 rounded-full animate-spin ${
                      darkMode
                        ? "border-blue-500 border-t-transparent"
                        : "border-gray-600 border-t-transparent"
                    }`}
                  />
                </div>
              )}
              <div
                className={`relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 ${
                  darkMode
                    ? "hover:shadow-blue-500/20"
                    : "hover:shadow-gray-400/40"
                } hover:scale-[1.02]`}
                style={{ height: "450px" }}
              >
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    darkMode
                      ? "bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-violet-600/20"
                      : "bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-violet-400/10"
                  } group-hover:opacity-75`}
                />
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className={`w-full h-full object-cover transform transition-all duration-500 ${
                    videosLoaded[index] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  playsInline
                  autoPlay
                  loop
                  muted
                >
                  <source src={src} type="video/mp4" />
                </video>
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                    darkMode
                      ? "from-black/60 via-transparent to-transparent"
                      : "from-gray-800/40 via-transparent to-transparent"
                  } opacity-0 group-hover:opacity-100`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
