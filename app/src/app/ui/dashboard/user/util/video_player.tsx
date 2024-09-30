import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ videoSrc, thumbnail }: {videoSrc: string, thumbnail: string}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (videoRef.current) {
      const newTime = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress((newTime / videoRef.current.duration) * 100);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  // Pausar o vídeo quando a aba perde o foco
  useEffect(() => {
    const handleWindowBlur = () => {
      if (videoRef.current && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('blur', handleWindowBlur);
    
    return () => {
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [isPlaying]);

  return (
    <div
      className="relative w-full mx-auto bg-black rounded-lg overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={thumbnail}
        className="w-full h-auto"
        onClick={handlePlayPause}
        onTimeUpdate={handleTimeUpdate}
        muted={isMuted}
      />
      {/* Exibir controles apenas quando o mouse estiver sobre o vídeo */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center">
          <button onClick={handlePlayPause} className="text-white text-xl">
            {isPlaying ? '❚❚' : '▶️'}
          </button>
          <div className="relative w-full h-2 bg-gray-600 rounded mx-4 cursor-pointer" onClick={handleSeek}>
            <div className="absolute top-0 left-0 h-full bg-indigo-500" style={{ width: `${progress}%` }}></div>
          </div>
          <button onClick={handleMuteUnmute} className="text-white text-xl">
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
