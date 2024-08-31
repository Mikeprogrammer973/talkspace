"use client"
import React, { useEffect, useRef } from 'react';

interface VideoWithPosterProps {
  src: string;
  posterTime?: number; 
  width?: number;
}

const VideoWithPoster: React.FC<VideoWithPosterProps> = ({ src, posterTime = 5, width = 600 }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleLoadedMetadata = () => {
        video.currentTime = posterTime;

        const handleSeeked = () => {
            alert("Seeked!")
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const poster = canvas.toDataURL('image/jpeg');
                video.setAttribute('poster', poster);
        }

          video.currentTime = 0; 
        };

        video.addEventListener('seeked', handleSeeked, { once: true });
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [posterTime]);

  return (
    <video ref={videoRef} className="w-full max-w-[600px] h-auto rounded-lg" controls loop onBlur={(e) => e.currentTarget.pause()} onFocus={(e) => e.currentTarget.play()}>
      <source src={src} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
};

export default VideoWithPoster;
