import { setDifficulty, updateSettings } from "actions/GameActions";
import { toggleSidebar } from "actions/UIActions";

import { Paragraph, Settings, Sidebar } from "components";
import PropTypes from "prop-types";
import "rc-slider/assets/index.css";

import Slider from "rc-slider/lib/Slider";
import React, { Component } from "react";

import TiTimesOutline from "react-icons/lib/ti/times-outline";
import { connect } from "react-redux";

import Select from "react-select";
import "react-select/dist/react-select.css";
import { bindActionCreators } from "redux";

class SidebarSettings extends Component {
  render() {
    const {
      isSettingsOpen,
      toggleSidebar,
      matrivSettings,
      matrivDifficulty,
      updateSettings,
      setDifficulty,
      difficulties
    } = this.props;

    return (
      <Sidebar open={isSettingsOpen}>
        <Sidebar.Title>Game Parameters</Sidebar.Title>
        <Sidebar.CloseButton onClick={() => toggleSidebar("settings")}>
          <TiTimesOutline />
        </Sidebar.CloseButton>
        <Sidebar.Content>
          <Settings>
            <Paragraph>
              Tweak your parameters to better suit your level!
            </Paragraph>
            <Select
              name="degree-difficulty"
              defaultValue={matrivDifficulty}
              value={matrivDifficulty}
              onChange={e => setDifficulty(e)}
              options={difficulties}
              placeholder="Custom..."
            />
            <Settings.Item>
              <Settings.Label>Game time (min)</Settings.Label>
              <Settings.Counter>{matrivSettings.time}</Settings.Counter>
              <Slider
                value={matrivSettings.time}
                min={1}
                max={10}
                onChange={value => updateSettings("time", value)}
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Label>Number of Lives</Settings.Label>
              <Settings.Counter>
                {matrivSettings.numberOfLives}
              </Settings.Counter>
              <Slider
                value={matrivSettings.numberOfLives}
                min={1}
                max={10}
                onChange={value => updateSettings("numberOfLives", value)}
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Label>Number of Questions</Settings.Label>
              <Settings.Counter>
                {matrivSettings.numberOfQuestions}
              </Settings.Counter>
              <Slider
                value={matrivSettings.numberOfQuestions}
                min={1}
                max={30}
                onChange={value => updateSettings("numberOfQuestions", value)}
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Label>Characters per question</Settings.Label>
              <Settings.Counter>
                {matrivSettings.charactersPerQuestion}
              </Settings.Counter>
              <Slider
                value={matrivSettings.charactersPerQuestion}
                min={2}
                max={12}
                onChange={value =>
                  updateSettings("charactersPerQuestion", value)
                }
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Checkbox>
                <input
                  type="checkbox"
                  name="hints"
                  checked={matrivSettings.hints}
                  onChange={event =>
                    updateSettings("hints", event.target.checked)
                  }
                />Hints (if available)
              </Settings.Checkbox>
            </Settings.Item>
          </Settings>
        </Sidebar.Content>
      </Sidebar>
    );
  }
}

SidebarSettings.propTypes = {
  isSettingsOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  matrivSettings: PropTypes.shape({
    time: PropTypes.number,
    numberOfLives: PropTypes.number,
    numberOfQuestions: PropTypes.number,
    charactersPerQuestion: PropTypes.number,
    hint: PropTypes.bool
  }).isRequired,
  matrivDifficulty: PropTypes.string.isRequired,
  updateSettings: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  difficulties: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  isSettingsOpen: state.ui.sidebars.settings,
  matrivSettings: state.matriv.settings,
  matrivDifficulty: state.matriv.difficulty,
  difficulties: state.matriv.difficulties
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar,
      updateSettings,
      setDifficulty
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarSettings);
