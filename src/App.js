import React, { Component } from 'react';
import TimersDashboard from './TimersDashboard'
// https://github.com/MountainlandWEB/reactjs/tree/master/lessons/module-02-components-part-1

/* 
EditableTimer is a component that switches between a Timer (toggleble) and TimerForm (editable).
EditableTimerList is the box-like component that holds all of these EditableTimers.
ToggleableTimerForm switches between a plus button and a TimerForm to be added to EditableTimerList.
TimersDashboard holds EditableTimerList and ToggleableTimerForm, which in them holds everything.
*/
class App extends Component {
  render() {
    return (
      <>
        <TimersDashboard />
      </>
    );
  }
}

export default App;