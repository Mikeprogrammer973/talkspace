"use client"
import React, { useEffect, useRef } from 'react';

interface VideoWithPosterProps {
  src: string;
  posterTime?: number;  // Tempo em segundos para capturar o frame do pôster
  width?: number;
}

const VideoWithPoster: React.FC<VideoWithPosterProps> = ({ src, posterTime = 5, width = 600 }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
  
    if (video) {
      video.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
        video.currentTime = posterTime!;
  
        video.addEventListener('seeked', () => {
          console.log('Video seeked to posterTime');
          const canvas = canvasRef.current;
          if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
              const poster = canvas.toDataURL('image/jpeg');
              video.setAttribute('poster', poster);
  
              console.log('Poster set:', poster);
            }
          }
  
          video.currentTime = 0; // Opcional
        }, { once: true });
      }, { once: true });
    }
  }, [posterTime]);
  
  return (
    <>
      <video ref={videoRef} controls width={width}>
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
};

export default VideoWithPoster;
