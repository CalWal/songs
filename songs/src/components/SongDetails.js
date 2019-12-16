import React from "react";
import { connect } from "react-redux";

const SongDetails = props => {
  if (!props.song) {
    return <div>Select a song!</div>;
  } else {
    return (
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {props.song.title}
          <br />
          Duration: {props.song.duration}
        </p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { song: state.selectSong };
};

export default connect(mapStateToProps)(SongDetails);
