import React, {createRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({poster, url, isPlaying, setIsPlaying}) => {
  const videoRef = createRef();
  let timer = null;
  useEffect(() => {
    if (isPlaying) {
      timer = setTimeout(() => {
        videoRef.current.play();
      }, 1000);
    }

    return () => {
      setIsPlaying(false);
      timer = clearTimeout(timer);
    };
  }, [isPlaying]);

  return (
    <video src={url} ref={videoRef} width={280} height={175} poster={poster} muted></video>
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired
};

export default VideoPlayer;
