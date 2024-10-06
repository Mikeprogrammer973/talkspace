import { Square2StackIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ videoSources, thumbnail }: {videoSources: string[], thumbnail:string}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [speed, setSpeed] = useState(1); // Default speed is 1x
  const [quality, setQuality] = useState(videoSources[0]); // Default quality is the first source

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

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handlePictureInPicture = async () => {
    if (videoRef.current && document.pictureInPictureElement !== videoRef.current) {
      await videoRef.current.requestPictureInPicture();
    } else if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    }
  };

  const handleSpeedChange = (newSpeed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
      setSpeed(newSpeed);
    }
  };

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
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
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={quality}
        poster={thumbnail}
        className="w-full h-auto"
        onClick={handlePlayPause}
        onDoubleClick={handleFullScreen}
        onTimeUpdate={handleTimeUpdate}
        muted={isMuted}
        controls={false}
      />

      {/* Controles de Vídeo */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col space-y-3">
          {/* Botões de Controle */}
          <div className="flex justify-between items-center text-white">
            <button onClick={handlePlayPause}>
              {isPlaying ? '❚❚' : '▶️'}
            </button>
            <button title='Back 10s' onClick={() => handleSkip(-10)}>⏪</button>
            <button title='Foward 10s' onClick={() => handleSkip(10)}>⏩</button>
            <button onClick={handleMuteUnmute}>
              {isMuted ? '🔇' : '🔊'}
            </button>
            <button title='FullScreen' onClick={handleFullScreen}><Squares2X2Icon className='w-4' /></button>
            <button title='Picture-in-picture' onClick={handlePictureInPicture}><Square2StackIcon className='w-4' /></button>
          </div>

          {/* Barra de Progresso */}
          <div
            className="relative w-full h-2 bg-gray-600 rounded cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="absolute top-0 left-0 h-full bg-indigo-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Controles de Velocidade e Qualidade */}
          {/* <div className="flex justify-between text-white">
            <div>
              <label>Speed: </label>
              <select
                className="bg-gray-800 text-white rounded px-2 py-1"
                value={speed}
                onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              >
                <option value="0.5">0.5x</option>
                <option value="1">1x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
